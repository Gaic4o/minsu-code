import { IChannel, IUser, IChat } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { FC, useCallback, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import useSWR from 'swr';
import { NavLink } from 'react-router-dom';
import { CollapseButton } from '@components/DMList/styles';
import EachChannel from '@components/EachChannel';
import {  ChannelMap, ChannelName } from './styles';



const ChannelList: FC = () => {
  const { workspace } = useParams<{ workspace?: string }>();
  const location = useLocation();
  const [channelCollapse, setChannelCollapse] = useState(false);
  const [countList, setCountList] = useState<{ [key: string]: number | undefined }>({});

  const { data: userData } = useSWR<IUser>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });
  const { data: channelData } = useSWR<IChannel[]>(userData ? `/api/workspaces/${workspace}/channels` : null, fetcher);
  
  
  const toggleChannelCollapse = useCallback(() => {
    setChannelCollapse((prev) => !prev);
  }, []);

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
        <ChannelName>채널 목록</ChannelName>
      </h2>
      <ChannelMap >
      {!channelCollapse &&
      // map 안에 들어있는 별도 컴포넌트로 분리하면 최적화. 
          channelData?.map((channel) => {
            return <EachChannel key={channel.id} channel={channel} />;
          })}
      </ChannelMap>
    </>
  );
};

export default ChannelList;
