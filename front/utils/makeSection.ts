import { IChat, IDM } from '@typings/db';
import dayjs from 'dayjs';

export default function makeSection<T extends IDM | IChat>(chatList: T[]) {
  const sections: { [key: string]: T[] } = {};
  chatList.forEach((chat) => {
    const monthDate = dayjs(chat.createdAt).format('YYYY-MM-DD');
    if (Array.isArray(sections[monthDate])) {
      sections[monthDate].push(chat);
    } else {
      sections[monthDate] = [chat];
    }
  });
  return sections;
}

// [{ id: 1, d : '2021-02-25' }, { id: 2, d: '2021-02-23' }, { id: 3, d: '2021-02-24' }, ..]

/* 
sections = {
  '2021-02-25': [1, 4],
  '2021-02-23': [2],
  '2021-02-24': [3],
}

*/