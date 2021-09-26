import { IDM, IChat } from '@typings/db';
import React, {  VFC, memo, useMemo } from 'react';
import { ChatWrapper } from './styles';
import gravatar from 'gravatar';
import dayjs from 'dayjs';
import regexifyString from 'regexify-string';
import { Link, useParams } from 'react-router-dom';

// a?.b; // optinal chaining
// a??b; // nullish coalescing 


interface Props {
    data: (IDM | IChat);
}
const BACK_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://minsucode.com';
const Chat: VFC<Props> = ({ data }) => {
    const { workspace } = useParams<{workspace: string}>();
    // Sender 에 DM 이 있으면 DM 이 없으면 Chat 
    const user = 'Sender' in  data ? data.Sender : data.User;

    // @[제로초](7)
    // \d 숫자 +1는 개 이상 ?는 0 개나 1개 g는 모두 찾기. 
    // [제로초]12](7)
    // + 만 있으면 최대한 많이 찾습니다.  +? 붙이면 최대한 조금 찾기. 
    const result = useMemo<(string | JSX.Element)[] | JSX.Element>(
        () =>
        // chat 컴포넌트에서 판단을 해서 
          data.content.startsWith('uploads\\') || data.content.startsWith('uploads/') ? (
            //  img 태그로 바꿔줍니다. 
            <img src={`${BACK_URL}/${data.content}`} style={{ maxHeight: 200 }} />
          ) : (
            regexifyString({
              pattern: /@\[(.+?)]\((\d+?)\)|\n/g,
              decorator(match, index) {
                const arr: string[] | null = match.match(/@\[(.+?)]\((\d+?)\)/)!;
                if (arr) {
                  return (
                    <Link key={match + index} to={`/workspace/${workspace}/dm/${arr[2]}`}>
                      @{arr[1]}
                    </Link>
                  );
                }
                return <br key={index} />;
              },
              input: data.content,
            })
          ),
        [workspace, data.content],
      );

    return( <ChatWrapper>
            <div className="chat-img">
                <img src={gravatar.url(user.email, { s: '36px', d: 'monsterid'})} alt={user.nickname} />
            </div>
            <div className="chat-text">
                <div className="chat-user">
                    <b>{user.nickname}</b>
                    <span>{dayjs(data.createdAt).format('h:mm A')}</span>
                </div>
                <p>{result}</p>
           
            </div>
    </ChatWrapper>
    )
};

export default memo(Chat);