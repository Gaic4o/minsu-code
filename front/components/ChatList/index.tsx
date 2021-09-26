import Chat from '@components/Chat';
import { ChatZone, Section, StickyHeader } from '@components/ChatList/styles';
import { IChat, IDM } from '@typings/db';
import React, { useCallback, useRef, VFC, forwardRef, RefObject} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
    chatSections: { [key: string]: (IDM | IChat)[] };
    setSize: (f: (size: number) => number) => Promise<(IDM | IChat)[][] | undefined>;
    isEmpty: boolean;
    isReachingEnd: boolean;
    scrollRef: RefObject<Scrollbars>;
}

const ChatList: VFC<Props> = (({ chatSections,scrollRef, setSize, isEmpty, isReachingEnd}) => {
    
    const onScroll = useCallback((values) => {
        // 이떄 데이터 더 불러오기.
        if (values.scrollTop === 0 && !isReachingEnd) {
            console.log('가장 위');
            // 데이터 추가 로딩.
            setSize((prevSize) => prevSize + 1)
            .then(() => {
                // 스크롤 위치 유지. 
                if (scrollRef?.current) {
                    // console.log(ref.current?.getScrollHeight(), values.scrollHeight);
                    scrollRef.current?.scrollTop(scrollRef.current?.getScrollHeight() - values.scrollHeight)
                }
              
            })
        }
    }, []);
    return (
        <ChatZone>
            <Scrollbars autoHide ref={scrollRef} onScrollFrame={onScroll}>
            {Object.entries(chatSections).map(([date, chats]) => {
            return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
            </Scrollbars>
        </ChatZone>
    )
});

export default ChatList;