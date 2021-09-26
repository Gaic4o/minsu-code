import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import useInput from '@hooks/useInput';
import useSocket from '@hooks/useSocket';
import Workspace from '@layouts/Workspace';
import { IChannel, IChat, IUser } from '@typings/db';
import gravatar from 'gravatar';
import fetcher from '@utils/fetcher';
import makeSection from '@utils/makeSection';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useSWR, { useSWRInfinite } from 'swr';
import { Container, DragOver, Header } from './styles';
import InviteChannelModal from '@components/InviteChannelModal';


// 0초 A : 안녕~(optimistic UI) 
// 1초 B : 안녕~
// 2초 A : 안녕~(실제 서버) 
// 리벨리에이트 할 상황이면 꼭 해주기. 

const Channel = () => {
    const { workspace, channel } = useParams<{ workspace: string, channel: string }>();
    const { data: myData } = useSWR(`/api/users`, fetcher);
    const [chat, onChangeChat, setChat] = useInput('');
    const { data: channelData } = useSWR<IChannel>(`/api/workspaces/${workspace}/channels/${channel}`, fetcher);
    // 채팅 받아오는 API 
    const { data: chatData, mutate: mutateChat, revalidate, setSize } = useSWRInfinite<IChat[]>(
        (index) => `/api/workspaces/${workspace}/channels/${channel}/chats?perPage=20&page=${index + 1}`,
        fetcher,
    );
    const { data: channelMembersData } = useSWR<IUser[]>(
        myData ? `/api/workspaces/${workspace}/channels/${channel}/members` : null,
        fetcher,
      );
    const [showInviteChannelModal, setShowInviteChannelModal] = useState(false);
    const [dragOver, setDragOver] = useState(false);
      



      

    const [socket] = useSocket(workspace);
    // 40
    // 20 + 20 + 0  0개면 isEmpty true -> 자동으로 isReachEnd 도 true. 
    // 45 개다? 20 + 20 + 5 siEmpty 는 아닌데 ReachingEnd는 맞습니다.
    // 데이터가 비어있다. 
    const isEmpty = chatData?.[0]?.length === 0;
    // 끝을 나타내는 것. 
    const isReachingEnd = isEmpty || (chatData && chatData[chatData.length - 1]?.length < 20) || false;
    const scrollbarRef = useRef<Scrollbars>(null);
    const onSubmitForm = useCallback(
        (e) => {
        e.preventDefault();
   
        // 어떤 사람에게 챗을 보내라. 
        // UI
        if (chat?.trim() && chatData && channelData) {
            const savedChat = chat;
            mutateChat((prevChatData) => {
              prevChatData?.[0].unshift({
                id: (chatData[0][0]?.id || 0) + 1,
                content: savedChat,
                UserId: myData.id,
                User: myData,
                ChannelId: channelData.id,
                Channel: channelData,
                createdAt: new Date(),
              });
              return prevChatData;
            }, false).then(() => {
              // 여기서도 마찬가지. 업데이트.
              localStorage.setItem(`${workspace}-${channel}`, new Date().getTime().toString());
              // 기존의 글자 지우기. 
              setChat('');
              if (scrollbarRef.current) {
                console.log('scrollToBottom!', scrollbarRef.current?.getValues());
                scrollbarRef.current.scrollToBottom();
              }
            });
            axios
            .post(`/api/workspaces/${workspace}/channels/${channel}/chats`, {
            content: chat,
        })
        .then(() => {
            // 기존 챗팅창 글자 지우기.
            revalidate();
            setChat('');
            // 채팅입력했을 떄 가장 밑으로 내려감. 
           
        })
        .catch(console.error);
    }
    }, [chat, workspace,  myData, channelData, chatData, channel],)


    const onMessage = useCallback(
        (data: IChat) => {
            //  내 id가 아닌 것만. 
            // 여기서 내 아이디도 추가하면 위에 id 추가했던 것이 2번 
          if (data.Channel.name === channel && data.UserId !==myData?.id) {
              // mutate 해서 최신 배열. 
            mutateChat((chatData) => {
                // 최신으로 가져오기. 
              chatData?.[0].unshift(data);
              return chatData;
            }, false).then(() => {
              if (scrollbarRef.current) {
                if (
                  scrollbarRef.current.getScrollHeight() <
                    //   스크롤 150 미만으로 내렸을 떄는. 
                  scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollTop() + 150
                ) {
                    // 그 다음은 무시.
                  console.log('scrollToBottom!', scrollbarRef.current?.getValues());
                  setTimeout(() => {
                    scrollbarRef.current?.scrollToBottom();
                  }, 100);
                } else {
                  toast.success('새 메시지가 도착했습니다.', {
                    onClick() {
                      scrollbarRef.current?.scrollToBottom();
                    },
                    closeOnClick: true,
                  });
                }
              }
            });
          }
        },
        [channel, myData],
      );
    

    useEffect(() => {
        socket?.on('message', onMessage);
        return () => {
            socket?.off('message', onMessage);
        }
    }, [socket, onmessage]);

    // 로딩 시 스크롤바 제일 아래로.
    // 입력창이 제일 위에 있는 데 가장 밑으로 내려갑니다.
    useEffect(() => {
        if (chatData?.length === 1) {
            scrollbarRef.current?.scrollToBottom();
        }
    }, [])

    // 워크스체이스 채널 현재 시간을 기록. 채널들 들어갈 떄 마다 현재 시각으로 기록. 
    // 여기까지 일었다 증거
    useEffect(() => {
      localStorage.setItem(`${workspace}-${channel}`, new Date().getTime().toString());
    }, [workspace, channel]);
  

    // MDN 에 있는 것 그대로 가져옴,. 
    const onDrop = useCallback(
      (e) => {
        e.preventDefault();
        console.log(e);
        // 선언. 
        const formData = new FormData();
        if (e.dataTransfer.items) {
          // Use DataTransferItemList interface to access the file(s)
          // 배열에서 반복문 돌면서. 
          for (let i = 0; i < e.dataTransfer.items.length; i++) {
            // If dropped items aren't files, reject them
            console.log(e.dataTransfer.items[i]);
            if (e.dataTransfer.items[i].kind === 'file') {
              const file = e.dataTransfer.items[i].getAsFile();
              console.log(e, '.... file[' + i + '].name = ' + file.name);
              formData.append('image', file);
            }
          }
        } else {
          // Use DataTransfer interface to access the file(s)
          for (let i = 0; i < e.dataTransfer.files.length; i++) {
            console.log(e, '... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
            formData.append('image', e.dataTransfer.files[i]);
          }
        }
        axios.post(`/api/workspaces/${workspace}/channels/${channel}/images`, formData).then(() => {
          setDragOver(false);
          localStorage.setItem(`${workspace}-${channel}`, new Date().getTime().toString());
        });
      },
      [workspace, channel],
    );

    const onDragOver = useCallback((e) => {
      e.preventDefault();
      console.log(e);
      setDragOver(true);
    }, []);

    

    const onClickInviteChannel = useCallback(() => {
        setShowInviteChannelModal(true);
    }, [])

    const onCloseModal = useCallback(() => {
        setShowInviteChannelModal(false);   
    }, []);

    if (!myData || !myData) {
        return null;
    }

    const chatSections = makeSection(chatData ? ([] as IChat[]).concat(...chatData).reverse() : []);

    return ( 
        <Container onDrop={onDrop} onDragOver={onDragOver}>
            <Header>
                <span>#{channel}</span>
                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <span>{channelMembersData?.length}</span>
                    <button 
                     onClick={onClickInviteChannel}
                     className="c-button-unstyled p-ia__view_header__button"
                     aria-label="Add people to #react-native"
                     data-sk="tooltip_parent"
                     type="button"
                    >
                    <i className="c-icon p-ia__view_header__button_icon c-icon--add-user" aria-hidden="true" />
                    </button>
                </div>
            </Header>
            <ChatList 
            chatSections={chatSections} 
            scrollRef={scrollbarRef} 
            setSize={setSize} 
            isEmpty={isEmpty}
            isReachingEnd={isReachingEnd}
            />
            <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm}  />
            <InviteChannelModal
                show={showInviteChannelModal}
                onCloseModal={onCloseModal}
                setShowInviteChannelModal={setShowInviteChannelModal}
            />
           {dragOver && <DragOver>업로드!</DragOver>}
        </Container>
    );
}

export default Channel;

