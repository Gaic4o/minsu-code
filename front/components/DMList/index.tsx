// import EachDM from '@components/EachDM';
// import useSocket from '@hooks/useSocket';
import { CollapseButton, DMName } from '@components/DMList/styles';
import EachDM from '@components/EachDM';
import useSocket from '@hooks/useSocket';
import { IDM, IUser, IUserWithOnline } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useSWR from 'swr';


const DMList: FC = ( ) => {
  const { workspace } = useParams<{ workspace?: string }>();
  const { data: userData } = useSWR<IUser>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const { data: memberData } = useSWR<IUserWithOnline[]>(
    userData ? `/api/workspaces/${workspace}/members` : null,
    fetcher,
  );
  const [socket] = useSocket(workspace);
//  콜렉스 버튼 접폈다 펴짐.
  const [channelCollapse, setChannelCollapse] = useState(false);
  const [onlineList, setOnlineList] = useState<number[]>([]);
  const [countList, setCountList] = useState<{ [key: string]: number}>({});

  const toggleChannelCollapse = useCallback(() => {
    setChannelCollapse((prev) => !prev);
  }, []);

  const resetCount = useCallback( 
      (id) => () => {
        setCountList((list) => {
            return {
                ...list,
                [id]: 0,
            };
        });
  }, [])

  const onMessage = (data: IDM) => {
      console.log('dm왔다', data);
      setCountList((list) => {
          return {
              ...list, 
              [data.SenderId]: list[data.SenderId] ? list[data.SenderId] + 1 : 1,
          }
      })
  }

  useEffect(() => {
    console.log('DMList: workspace 바꼈다', workspace);
    setOnlineList([]);
    setCountList({});
  }, [workspace]);

  useEffect(() => {
    socket?.on('onlineList', (data: number[]) => {
      setOnlineList(data);
    });
    // console.log('socket on dm', socket?.hasListeners('dm'), socket);
    return () => {
      // console.log('socket off dm', socket?.hasListeners('dm'));
      socket?.off('onlineList');
    };
  }, [socket]);

  return (
    <>
     <h2>
        <CollapseButton collapse={channelCollapse} onClick={toggleChannelCollapse}>
        <i
            className="c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline"
            data-qa="channel-section-collapse"
            aria-hidden="true"
          />
        </CollapseButton>
        <DMName>메시지</DMName>
      </h2>
      <div>
      {!channelCollapse &&
          memberData?.map((member) => {
            const isOnline = onlineList.includes(member.id);
            return <EachDM key={member.id} member={member} isOnline={isOnline} />;
          })}
      </div>
    </>
  );
};

export default DMList;
