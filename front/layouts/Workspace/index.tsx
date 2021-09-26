

import ChannelList from '@components/ChannelList';
import CreateChannelModel from '@components/CreateChannelModal';
import DMList from '@components/DMList';

import InviteWorkspaceModal from '@components/InviteWorkspaceModal';
import Menu from '@components/Menu';
import Model from '@components/Modal';
import useInput from '@hooks/useInput';
import useSocket from '@hooks/useSocket';
import loadable from '@loadable/component';
import { Button, Input, Label } from '@pages/SignUp/styles';
import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import gravatar from 'gravatar'
import React, { useCallback, useEffect, useState } from 'react';
import { VFC } from 'react';
import { Link, Redirect, Route, Switch, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { ChannelsPart, ChatsPart, Container, CreateButton, Footer, Header, LogOutButton, Main, MenuScroll, Messenger, Nav, ProfileImg, ProfileModal, RightMenu, Section, WorkspaceButton, WorkspaceModal, WorkspaceName, WorkspacePart, Workspaces } from './styles';


const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));


const Workspace: VFC = () => {

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCreateWorkspaceModel, setShowCreateWorkspaceModel] = useState(false);
  const [showWorkspaceModel, setShowWorkspaceModel] = useState(false);
  const [showInviteWorkspaceModel, setshowInviteWorkspaceModel] = useState(false);
  const [showInviteChannelModel, setshowInviteChannelModel] = useState(false);
  const [showCreateChannelModel, setShowCreateChannelModel] = useState(false); // 생성 채널.
  const [newWorkspace, onChangeNewWorkspace, setNewWorkspace] = useInput('');
  const [newUrl, onChangeNewUrl, setNewUrl] = useInput(''); 
  

  const { data: Userdata, error,  revalidate, mutate } = useSWR<IUser | false>('/api/users', fetcher, {
      dedupingInterval: 1000,
  });
  const { workspace } = useParams<{workspace: string}>();

  // 채널 데이터 가져오기.
  const { data: channelData } = useSWR<IChannel[]>(Userdata ? `/api/workspaces/${workspace}/channels` : null, fetcher);
  
  // Workspace 데이터 가져오기.
  const { data: memberData } = useSWR<IUser[]>(Userdata ? `/api/workspaces/${workspace}/members` : null, fetcher);
  // workspace 소켓연결. 
  const [socket, disconnect] = useSocket(workspace);

  useEffect(() => {
    if (channelData && Userdata) {
      console.info('로그인하자', socket);
      socket?.emit('login', { id: Userdata?.id, channels: channelData.map((v) => v.id) });
    }
  }, [socket, channelData, Userdata]);

  // workspaec 바뀔 떄 disconnect 
  useEffect(() => {
    return () => {
      disconnect();
    }
  }, [workspace, disconnect])


  const onLogout = useCallback(() => {
    axios.post('/api/users/logout', null, {
      withCredentials: true,
    }) 
    .then(() => {
      mutate(false);
    })
  }, [])


  const onCreateWorkspace = useCallback((e) => {
    e.preventDefault();
    if (!newWorkspace || !newWorkspace.trim()) return;
    if (!newUrl || !newUrl.trim()) return;
    axios.post('/api/workspaces', {
      workspace: newWorkspace,
      url: newUrl,
    }, {
      withCredentials: true,
    })
    .then(() => {
      revalidate();
      setShowCreateWorkspaceModel(false);
      setNewWorkspace(''); // 빈값으로 초기화/
      setNewUrl('');
    })
    .catch((error) => {
      console.dir(error);
      toast.error(error.response?.data, { position: 'bottom-center'}); // 에러 내용이 뚝 올라옴.
    })
  }, [newWorkspace, newUrl])


  // 화면에 떠있는 모든 모델을 다 다는 메서드.
  const onCloseModel = useCallback(() => {
    setShowCreateWorkspaceModel(false);
    setShowCreateChannelModel(false);
    setshowInviteWorkspaceModel(false);
    setshowInviteChannelModel(false);
  }, [])
  
  const onClickUserProfile = useCallback(() => {
    setShowUserMenu((prev) => !prev);
  }, [])

  const toggleWorkspaceModel = useCallback(() => {
    setShowWorkspaceModel((prev) => !prev);
  }, [])

  const onClickCreateWorkspace = useCallback(() => {
    setShowCreateWorkspaceModel(true);
  }, [])

  const onClickAddChannel = useCallback(() => {
    setShowCreateChannelModel(true);
  }, [])

  const onCloseUserProfile = useCallback((e) => {
    e.stopPropagation();
    setShowUserMenu(false);
  }, [])

  const onClickInviteWorkspace = useCallback(() => {
    setshowInviteWorkspaceModel(true);
  }, []);

  if(!Userdata) {
    return <Redirect to="/login" />
  }

  return (
    <Container>

        <Nav>
        <WorkspacePart>
          <Workspaces>
            {Userdata.Workspaces.map((ws) => {
              return (
                <Link key={ws.id} to={`/workspace/${ws.url}/channel/일반`}>
                  <WorkspaceButton>{ws.name.slice(0, 1).toUpperCase()}</WorkspaceButton>
                </Link>
              )
            })}
            <CreateButton onClick={onClickCreateWorkspace}>+</CreateButton>
          </Workspaces>
        </WorkspacePart>

        <ChannelsPart>
            {/* 채널 part */}
            <WorkspaceName onClick={toggleWorkspaceModel}>민수코드</WorkspaceName>

            <MenuScroll>
                <Menu show={showWorkspaceModel} onCloseModal={toggleWorkspaceModel} style={{ top: 95, left: 80 }}>
                  <WorkspaceModal>
                    {/* 워크스페이스 Name 클릭하면 모달창. */}
                      <h2>민수코드</h2>
                      <button onClick={onClickInviteWorkspace}>워크스페이스에 사용자 초대</button>
                      <button onClick={onClickAddChannel}>채널 만들기</button>
                      <button onClick={onLogout}>로그아웃</button>
                  </WorkspaceModal>
                </Menu>
                {/* 채널 목록들 */}
                <ChannelList />
        
                {/* {channelData?.map((v) => (<div>{v.name}</div>))} */}
            </MenuScroll>
        </ChannelsPart>
        </Nav>


        <Main>
        <Header>
            <RightMenu>
                {/* 정보 보기*/}
                <span onClick={onClickUserProfile}>
                  <ProfileImg src={gravatar.url(Userdata.email, { s: '28px', d: 'monsterid' })} alt={Userdata.email} />

                  {showUserMenu && ( // 자기 정보 보기.   
                    <Menu style={{right: 0, top: 38 }}
                    show={showUserMenu} onCloseModal={onCloseUserProfile}>
                      <ProfileModal>
                      <img  src={gravatar.url(Userdata.email, { s: '36px', d: 'monsterid'  })} alt={Userdata.email} />
                      <div>
                      <span id="profile-name">{Userdata.email}</span>
                      <span id="profile-active">Active</span>
                      </div>
                      </ProfileModal>
                      <LogOutButton onClick={onLogout}>로그아웃</LogOutButton>
                      </Menu>
                  )}
                </span>
            </RightMenu>
        </Header>

        <Section>
        <ChatsPart>
        <Switch>
              <Route path="/workspace/:workspace/channel/:channel" component={Channel} />
              <Route path="/workspace/:workspace/dm/:id" component={DirectMessage} />
        </Switch>
        </ChatsPart>

        <Messenger>
          <DMList />
        </Messenger>
        </Section>

    
        </Main>


         {/* 워크스페이스 신규 생성 모뎀 창 */}
         <Model show={showCreateWorkspaceModel} onCloseModal={onCloseModel}>
           <form onSubmit={onCreateWorkspace}>
              <Label id="workspace-label">
                <span>워크스페이스 이름</span>
                <Input id="workspace" value={newWorkspace} onChange={onChangeNewWorkspace} />
              </Label>
              
              <Label id="workspace-url-label">
                <span>워크스페이스 url</span>
                <Input id="workspace" value={newUrl} onChange={onChangeNewUrl} />
              </Label>
              <Button type="submit">생성하기</Button>
           </form>
         </Model> 
            

          {/* 채널 신규 생성 모델 창. */}
          <CreateChannelModel
          show={showCreateChannelModel}
          onCloseModal={onCloseModel}
          setShowCreateChannelModal={setShowCreateChannelModel}
          />

          <InviteWorkspaceModal
          show={showInviteWorkspaceModel}
          onCloseModal={onCloseModel}
          setShowInviteWorkspaceModal={setshowInviteWorkspaceModel}
          />

    </Container>
  )
}

export default Workspace;