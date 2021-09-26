import React, { useCallback, useEffect, useRef, useState } from "react";

import useSWR, {useSWRInfinite} from "swr";
import fetcher from "@utils/fetcher";
import { Container, DragOver, Header } from "@pages/Channel/styles";
import gravatar from 'gravatar';
import { useParams } from "react-router";

// import ChatList from "@components/ChatList";
import useInput from "@hooks/useInput";
import ChatBox from "@components/ChatBox";
import ChatList from "@components/ChatList";
import axios from "axios";
import { IDM } from "@typings/db";
import makeSection from "@utils/makeSection";
import Scrollbars from "react-custom-scrollbars";
import useSocket from "@hooks/useSocket";
import { toast } from "react-toastify";


const DirectMessage = () => {
    const { workspace, id } = useParams<{ workspace: string, id: string }>();
    const { data: userData } = useSWR(`/api/workspaces/${workspace}/users/${id}`, fetcher);
    const { data: myData } = useSWR(`/api/users`, fetcher);
    const [chat, onChangeChat, setChat] = useInput('');

    // 채팅 받아오는 API 
    const { data: chatData, mutate: mutateChat, revalidate, setSize } = useSWRInfinite<IDM[]>(
        (index) => `/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=${index + 1}`,
        fetcher,
    );

    const [socket] = useSocket(workspace);
    // 40
    // 20 + 20 + 0  0개면 isEmpty true -> 자동으로 isReachEnd 도 true. 
    // 45 개다? 20 + 20 + 5 siEmpty 는 아닌데 ReachingEnd는 맞습니다.
    // 데이터가 비어있다. 
    const isEmpty = chatData?.[0]?.length === 0;
    // 끝을 나타내는 것. 
    const isReachingEnd = isEmpty || (chatData && chatData[chatData.length - 1]?.length < 20) || false;
    const scrollbarRef = useRef<Scrollbars>(null);
    const [dragOver, setDragOver] = useState(false);

    const onDrop = useCallback(
      (e) => {
        e.preventDefault();
        console.log(e);
        // File drag MON code 
        const formData = new FormData();
        // items 안에 들어있음. 
        if (e.dataTransfer.items) {
          // Use DataTransferItemList interface to access the file(s)
          for (let i = 0; i < e.dataTransfer.items.length; i++) {
            // If dropped items aren't files, reject them
            if (e.dataTransfer.items[i].kind === 'file') {
              const file = e.dataTransfer.items[i].getAsFile();
              console.log('... file[' + i + '].name = ' + file.name);
              formData.append('image', file);
            }
          }
        } else {
          // files 에 들어있나? items 에 들어있나? 
          // Use DataTransfer interface to access the file(s)
          for (let i = 0; i < e.dataTransfer.files.length; i++) {
            console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
            formData.append('image', e.dataTransfer.files[i]);
          }
        }
        axios.post(`/api/workspaces/${workspace}/dms/${id}/images`, formData).then(() => {
          setDragOver(false);
          localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
          revalidate();
        });
      },
      [workspace, id],
    );
  
    const onDragOver = useCallback((e) => {
      e.preventDefault();
      // 콘솔에 나왔던 것 다 찍고. 
      console.log(e);
      // ture 로 만들어서. 업로드 하면에 투명하게 가렸던 것 보이게 만들기. 
      setDragOver(true);
    }, []);
  


    const onSubmitForm = useCallback(
        (e) => {
        e.preventDefault();
   
        // 어떤 사람에게 챗을 보내라. 
        // UI
        if (chat?.trim() && chatData) {
            const savedChat = chat;
            mutateChat((prevChatData) => {
              prevChatData?.[0].unshift({
                id: (chatData[0][0]?.id || 0) + 1,
                content: savedChat,
                SenderId: myData.id,
                Sender: myData,
                ReceiverId: userData.id,
                Receiver: userData,
                createdAt: new Date(),
              });
              return prevChatData;
            }, false).then(() => {
              // 여기서도 방에 들어온 것만 아니라 특정 행동을 했을 떄도 
              // 업데이트 해야 합니다.
              localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
              // 기존의 글자 지우기. 
              setChat('');
              if (scrollbarRef.current) {
                console.log('scrollToBottom!', scrollbarRef.current?.getValues());
                scrollbarRef.current.scrollToBottom();
              }
            });
            axios
            .post(`/api/workspaces/${workspace}/dms/${id}/chats`, {
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
    }, [chat, workspace, id, myData, userData, chatData],)


    const onMessage = useCallback(
        (data: IDM) => {
            //  내 id가 아닌 것만. 
            // 여기서 내 아이디도 추가하면 위에 id 추가했던 것이 2번 
          if (data.SenderId === Number(id) && myData.id !== Number(id)) {
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
        [id, myData, mutateChat],
      );
    
      useEffect(() => {
        localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
      }, [workspace, id]);
    
    useEffect(() => {
        socket?.on('dm', onMessage);
        return () => {
            socket?.off('dm', onMessage);
        }
    }, [socket, onmessage]);

    // 로딩 시 스크롤바 제일 아래로.
    // 입력창이 제일 위에 있는 데 가장 밑으로 내려갑니다.
    useEffect(() => {
        if (chatData?.length === 1) {
            scrollbarRef.current?.scrollToBottom();
        }
    }, [])



    if (!userData || !myData) {
        return null;
    }

    const chatSections = makeSection(chatData ? chatData.flat().reverse(): [])

    return ( 
        <Container onDrop={onDrop} onDragOver={onDragOver}>
            <Header>
                 <img src={gravatar.url(userData.email, { s: '24px', d: 'monsterid' })} alt={userData.nickname} />
                <span>{userData.nickname}</span>
            </Header>
            <ChatList 
            chatSections={chatSections} 
            scrollRef={scrollbarRef} 
            setSize={setSize} 
            isEmpty={isEmpty}
            isReachingEnd={isReachingEnd}
            />
            <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm}  />
            {dragOver && <DragOver>업로드!</DragOver>}
        </Container>
    );
};

export default DirectMessage;