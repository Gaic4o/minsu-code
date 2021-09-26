Switch 는 하나 누르면 다른 하나는 꺼짐.
여러 개 중에서 하나만 선택하는 것.

싱글 페이지 어플리케이션은 페이지가 하나이기 떄문에.
가짜로 만들어 줌. History API 

새로고침을 할 떄 프론트로 안가고 서버로 갑니다.
localhost:3090 sinugp login -> 3090 으로 보냅니다. 다 무시하고.

Webpack devServer historyAPIFallback 에서 true 를 해주면.
가짜 주소를 만들어 줍니다.



npm i @loadable/component - loadable 코드 스플리팅 언제 할 지 알아서 불러옵니다.

1. style 
2. css 모듈 className 
3. style-component  

emotion 에서 styled 가져옵니다.
SCSS 도 사용 가능.

CRA 를 안쓰는 이유. - 나중에 불필요함.

onChange 할 떄는 useCallback 써야지 성능 최적화 도움.
리액트는 버츄얼 돔으로 이전 다음 상태 확인.
달라진 것을 그림.

검사 후에도 달라진게 x - 검사 x 

제너레이터 공부하기. T typescript 

redux 단점 : 코드가 너무 길어짐.
이 component 에서 쓰는 것들은 여기 component 해결.

API POST 회원가입 보내면.
POST, OPTIONS 2개가 갑니다.

서버가 프론트는 3090 인데.
백엔드는 3095.

port 가 다름.
포트가 다르면? 2개를 보냅니다.
월래 서로 요청이 안됩니다.

백쪽에서 cors 를 보내서.
아니면 devServer webpack 에서 proxy 서버 설정 해 주면 됩니다.




서버에서 보내 준 에러 메시지 표시하기.

아이디 

alstn@naver.com 
김민수  alstn alstn 



swr 사용하기 (쿠키 공유하기)

프론트 입장에서 로그인 성공했다는 것을 어떻게 알 것인가?
로그인 정보를 서버에서 갖다 줌.

프론트에서는 이 데이터를 저장하고 있어야 함.
State 는 안됨 왜냐? 온갖곳에서 저장되어 있어야 해서.

컴포넌트를 넘나 들면서 갖고 있어야 함.
redux 가 필요함. 

하지만 redux 사용하지 않음.
swr 사용하기.


post 요청 swr 점목 시키기 어려움.
get 요청을 많이 씀.

swr 쓰고 싶다.
로그인 했으니까 로그인 했ㅎ다는 정보 get swr 날려보면 됨


  withCredentials: true 이 설정을 넣으면 쿠기가 생성됩니다.
  connect.sid 가 생겼습니다. cookies 


  로그인을 하면 swr 저정 후 메인 페이지에 넘어 가야 합니다.
  컨트롤 
  1: login -> users 호출.
  2: 몇 초 간격으로 요청이 몇 번옴. 서버에 무리가 감. self 로 ddos 공격 가능.


FC 안에 Children type 이 잇음.
VFC 는 childrne 안쓰는 컴포너트,.


channel 에 있는 index
  <Workspace><div>로그인 하신 것을 축하드립니다.</div></Workspace> 
  하면 workspace children 이 됩니다.

  
  if (data) {
    return <Redirect to="/workspace/channel" />
  }
  로그인 성공 후에는 채널로 가게 됩니다.

  data 에 쿠기값 내 계정 정보들이 저장됩니다.


잠깐 깜빡이는 페이지.
거슬린다면? 로딩중 처리 따로 해줘야 합니다.

  if(data === undefined) {
    return <div>로딩중...</div>
  }


 revalidate 단점은 요청을 한 번 더 보냅니다.
 사용자 데이터 얻어올려면 또 가져옵니다.
 swr 가져올 떈 데이터를 저장 할 떈 편한데 요청을 자주 보냅니다.

 mutate 를 씀.
 revlidate 는 서버로 다시 요청을 보내서 데이터를 다시 가져오고.,
  mutate 서버로 요청 안보내고 다시 수정하는 것.

     mutate(response.data, false); false 도 꼭 설정 해야 합니다.
     인스타그램 바로 하트 스크롤 하트 하트 하면 하트들 바로 색 칠해짐.
     월래 바로 되지 않음. 서버로 요청 -> 처리 -> 하트 불이 들어옴.
     좋아요 눌렀을 떄 불이 바로 들어옴. 서버로 갔다 오기전에 mutate 입니다.
     요청은 나중에 보내는 것.
     // OPTIMISTIC UI swr 기능. 
     기본은 FASTICSTIC UI 


  프로필 이미지를 랜덤으로 생성해 주는 라이브러리 - 그아바타
  gravatar 

  랜덤으로 아이콘을 만들어 줍니다.
  매번 램더으로 생성되는 것이 아니라 이메일 이미지가 1:1 매칭.



메뉴 만들기.

같은 회사더라도 운영진 C 급 방에서만 자료.
일반 방에서는 모두 볼 수 있고.

권한이 나눠져 있음.

초대  기능도 구현해보기.
아바타 눌렀을 떄 메뉴 뜨기.



IUser를 넣으면 ws 데이터 타입 가능.
IUser | false  로그인 x false 



워크스페이스 만들기 (gravatar) 



onSubMitForm - ChexBox 
구체적인 작업 다른곳에서도 재사용하고 싶음 Form 을. 

onSubmitForm, onChangeChat 

재사용 하는 데 서로 다른 데이터는 Props 로 뺴줍니다.








socket.io 전용 훅스 만들기.

한 번만 연결 해놓으면 서버 -> 프론트 프론트 -> 서버 한 번에 데이터를 받을 수 있음.
socket.on 문서 아래에 WebSocket API 도 만들어 놓음.

hello API - 소켓 연결 테스트용 API 
onlineList - 현재 온라인인 사람들 아이디 목록.
message - 새로운 채널 메시지가 올 떄.
dm - 새로운 dm 메시지가 올 때 

웹 소켓은
하나의 컴포넌트에 종속되게 넣어버리면 그 컴포넌트가 사라지면 x 
공통된 컴포넌트에 넣어 줍니다.

Hook 에 Socket.io 만들어 줍니다.

화면이 들어가지 않는다? hook 에 다가 넣어주기.
s
socket.emit('hello', 'world') - hello 라는 api 에 world 를 보내줍니다.

socket.on('message', (data) { - 데이터 받는 callback 함수. 
  console.log(data);
});

socket.diconnect(); - 한번 맺었던 연결을 끊는 함수. 

비밀번호같은것을 남한테 전달 했는데.
그 메시지가 전세계 사람들한테 다 퍼질 수 있음.

slack 에서 workspace, channel 

경영진 방에서 누구 짤라 했는데 socket 잘못 만들어서 일반 직원들 방에 범위를 잘 조정해줘야 합니다.
socket 에서 namespace(workspace), room(channel) 있습니다.


workspace 에다가 연결을 함.


const [socket, disconnect] = useSocket(workspace);

useEffect(() => {
  socket.on('message')
  socket.emit();
  disconnect();
}, [])

hook 에서 return 은 내 맘.


const disconnect = useCallback(() => {

}, [])




socket.io 이벤트 연결하기.

socket.emit 

- 클라이언트에서 서버로 보내는 이벤트(클라이언트에서는 emit으로 보냄) 

login 

- 워크스페이스 채널이 로딩 완료되었을 떄 서버에 로그인했음을 알리는 이벤트.
- 클라이언트 data: { id: number(유저 아이디), channels:number[] (채널 아이디 리스트)}

disconnect 

- 클라이언트에서 소켓 연결을 종료하는 함수



socket 연결 끊어 줄 떄는.

workspace 가 바뀔 떄. 기존 워크스페이스 정리. 

useEffect(() => 
return () => {
  disconnect();
} [workspace, disconnect]);

처음부터 크롬에게 websocket 만 쓰라고 지시 할 수 있음.
transports: ['websocket']

http 연결 안하고 websocket 바로 연결.

if 조건문 하나 만들어주기.
workspace socket 이 없다면 만들어주고.

if (!sockets[workspace]) {
  sockets[workspace] = io.connect(`${backUrl}/ws-${workspace}`, {
    transports: ['websocket'],
  });
}

있다면 바로 return .

return [sockets[workspace], disconnect];

nest typeorm 에서는 @3 버전은 호환이 안됩니다.
웹소켓은 연결 한 번 맺고 연결 하나에서 데이터를 왔다 갔다 합니다.

sid 라고 해서 socket id 를 보내줍니다 - Network 
서버랑 프론트랑 같은 socket id 

프론트는 - ws/client 로 연결할래.





DM 내용 표시하기 

이제 ChatData 를 화면에다가 그리면 됩니다.
ChatList 컴포넌트를 공통으로 쓸 떈 Props 가 필요한 경우도 있습니다.

dms 글자가 들어 있어서 Channel에서 재사용을 못 할 거 같습니다.


ChatList 컴포너늩에서.

interface Props { // 챗 데이터를 없을 수 도 있습니다.
  chatData?: IDM[]; 
}

{chatData?.map((chat ) => (
  <Chat key={chat.id} data={chat} />
))}


Chat 컴포넌트 만들우저귀.

const user = data.Sender;

return <ChatWrapper>
  <div className="chat-img">
  <img src={gravatar.url(user.email, { s: '36px', d: 'retro',})</div>
</ChatWrapper>




커스텀 스크롤바와 dayjs 

npm install react-custom-scrollbars-2 --save 

Chat 

styles (Scrollbars) 
import { Scrollbars } from 'react-custom-scrollbars';


스코롤 좀 했따가 가만이 잉쓰면 사라지고 스크롤 내릴 떄 나타나는 autoHide 
스크롤 내릴 떄 onScrollFrame 호출이 됩니다


const scrollbarRef = useRef(null); 
onScroll = useCallback(() => {

}, [])

가로로 배치됐떤 이유는 스크롤바가 div 역할을 해줍니다.
날짜는 라이브러리 쓰는 것이 좋음.

DAT.JS 

<span>{dayjs(data.createAt).format('h:mm A')}</span>




멘션 기능 만들기

@제로초2 hashtag 하기.
직접 구현하는 것도 의미가 있지만 라이브러리 추천.

@제 리스트들 쭉 뜨기 (자동완성 추천) 
구현.

react-mentions 

<Mention appendSpaceonAdd trigger="@" data={memberData?.map((v) => ({ id: v.id, display: v.nickname })) || []}
  renderSuggestion={renderSuggesion}
/>
  

트리거 기능은 @ 칠 떄 활성화.
appendSpaceonAdd 띄어쓰기 기능.
memberData 만들어주기.

renderSuggestion={renderSuggesion} (추천 렌더링을 어떻게 할 것인지) 
직접 작성. 

renderSuggesion 

const renderSuggestion = useCallback(() => {

}, []);


css 에서는 변수를 못써서 클래스를 바꿔가는 식으로.
스타일컴포넌트 변수를 쓸 수 있어서 focus 가 true false 만들 수 있습니다.


React 멘션의 사용 방법.

  // 맨션의 부부는 맨션의 Input 이여야 합니다. 
  <MentionsTextarea> 
  <Mention>
  </MentionsTextarea>



정규표현식으로 문자열 변환하기.


@[제로초](5)

npm i regexify-string 
정규표현식 쓰는 것도 라이브러리 도움을 받자.

// @[제로초1](7)
// \d 숫자 +는 1개 이상 ?는 0 개 이상 g는 모두찾기
// @[제로초]12](7) 
// +? 

const result = regexifyString({
  input: data.content, 
  pattern: /@\[.+\]\)\(\d+\)/g, // 정규 표현식. 모두 찾겠다 (g)
  decorator() {
    const arr = match.match(/@\[.+?\]/(\d+?\)/)!; 
    if (arr) {
      return (
        <Link key={match + index} to={`workspace/${workspace}/dm/${arr[2]`}>
          @{arr[1]}
        </Link>
      )
    }
    return <br key={index} />
  }
})

a?.b // optional chaining 
c??b; // nullish coalescing 








날짜별로 묶어주기 (position: sticky) 

채팅을 그룹화를 만들어서 그룹화 해서 할 것.
구역을 나눔.
(알고리즘 어려운 건 아니고)

export default function makeSection(chatList) {
  const sections = { [key: string]: IDM[] } = {};
  chatList.forEach((chat) => {
    const month = dayjs(chat.createAt).format('YYYY-MM-DD');
    if (Array.isArray(sections[monthDate])) {
      sections[monthDate].push(chat);
    } else {
      sections[monthDate] = [chat];
    }
    sections[monthDate];
  })
  return sections; 
}

// [{ id: 1, d : '2021-02-25'}, { id: 2, d: '2021-02-23' }, { id: 3, d: '2021-02-24' ,..}]

DirectMessage 가서 

const chatSection = makeSection(chatData) 





리버스 인피니트 스크롤링(useSWRRinfinite) 

쭉 내려서 추가가 되는 데 위로 올려서 위로 추가를 해야 합니다.
reverinfinite 스크롤.

스크롤이 가장 위로 올라 간다. 판단.

const onScroll = useCallback((values) => {
  if (values.scrollTop === 0) { // 스크롤이 가장 위로 올라 갔을 떄. 
    console.log('가장 위');
  }
}, [])



const { data: chatData, mutate: mutateChat, revalidate, setSize } = useSWRInfinite<IDM[]>(
  (index) => `/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=${index + 1}`,
  fetcher, 
);

// 40 
// 20 + 20 + 5 
const isEmpty = chatData?.[0]?.length === 0; // 데이터가 비어있다. 
const isReachingEnd = isEmpty || (chatData && chatData[chatData.length - 1 ]?.length < 20) // 끝을 나타내는 것.

이 2개 변수를 선언 해 주기. 





스크롤바 조정하기

scroll 

// 로딩 시 스크롤바 제일 아래로. 
useEffect(() => {
  if (chatData?.length === 1) {
    scrollbarRef.current?.scrollToBottm(); // 가장 밑으로 로딩 시 내려 갑니다. 
  }
}, [chatData])


그리고 post 에서 chat 요청 할 떄마다.
onSubmitForm useCallback 요처엥서 - scrollbarRef.current?.scrollToBottom()

살짝 딜레이 걸림.
0. 몇초 뒤에 됩니다.

post 하고 응답받는 시간 떄문에 그럽니다.
delay 가 발생.
이런 delay 가 사용성을 저하. - optimic ui 

화면에 바로 반영하고 나중에 서버로 요청.

이미로 데이터를 만들어 놓아야 합니다.

mutateChat((prevChatData) => {
  prevChatData?.[0].unshift({
    // dm 객체들 가져오기.
    id: (chatData[0][0]?.id || 0) + 1,
    content: savedChat,
    SenderId: myData.id, 
    Sender: myData,
    ReceiverId: userData.id,
    Receiver: userData,
    createAt: new Date(),
  }, false)
})

이거 하고 
then 으로 post 요청하기.




// 어떻게 스크롤 위치 유지.
지금 현재 스크롤 위치 - 스크롤 값 뺴주기
console.log(ref.current?.getScrollHeight(), values.scrollHeight); // 스크롤 찍어 보고. 
ref.current?.scrollTop(ref.current?.getScrollHeight() - values.scrollHeight) 



const onMessage = useCallback((data: IDM) => {
  if (data.SenderId === Number(id) && myData.id !== Number(id)) {
    mutateChat((chatData) => {
      ..
    })
  }CORS 

프론트는 3090 인데.
서버쪽은 3095 

서로 port 가 다릅니다.
월래 서로 요청이 안됩니다.

1. 백쪽에서 cors npm 라이브러리를 사용 해 해결 하던가.
2. webpack devServer 에서 proxy 서버를 설정 해 주면 됩니다.

swr 를 이용해서 따로 useEffect 훅을 사용해 axios get 요청을 할 필요 없습니다.
swr 를 이용하면 바로바로 localhost 주소만 알면 금방금방 렌더링 할 때 마다 바로바로 로그인 됩니다.

하지만 그렇다고 해서 다른 페이지들 마다 다 useEffect 로 로그인 정보를 불러 올 순 없음. 
프론트에서 이 데이터를 쉽게 저장 할 수 있습니다.

그래서 나온 것이 redux 입니다.
하지만 redux 말고 swr 를 사용하면 쉽게 만들 수 있습니다.

withCredentials: true 를 설정 해 주면 Cookie 생성됩니다.


FC 안에는 Children type 이 있습니다.
VFC 는 Children 안쓰는 component 가 있습니다.

Channel index 에.
<Workspace><div>로그인 하신 것을 축하드립니다.</div></Workspace>


if (data) {
    return <Redirect to="/workspace/channel" />
}
- 로그인 성공 후 채널로 가게 됩니다. (data 쿠기값 내 계정 정보들이 저장됩니다.) 

잠깐 깜박이는 페이지가 있다면?
if (data === undefined) {
    return <div>로딩중..</div>
}




revalidate 의 단점 -> 요청을 한 번 더 보내줍니다.
사용자 데이터를 업데이트 한다면? 1번 더 가져옵니다.
SWR 로 가져올 떈 데이터를 저장 할 떈 편하지만 요청을 자주 보내줍니다.

그러므로 mutate(OPTIMISTIC UI swr) 를 사용합니다.

`revalidate 서버로 다시 요청을 보내서 데이터를 다시 가져오고, mutate 서버로 요청을 안보내고 다시 수정하는 것.`

mutate(response.data, false); // false 도 꼭 설정 해 주어야 합니다.

인스타그램 바로 하트 scroll 하트 하트 보내면 바로 색이 칠해 집니다.
원래는 되지 않습니다 기존 방식으로는, 
서버로 요청 -> 처리 -> 하트 불러옴.

저희는 OPTIMISTIC UI 를 사용해서 좋아요를 눌렀을 떄 바로 불이 들어옵니다.
하지만 저희는 바로 서버로 보내지 않고 서버로 갔다 오기전에 먼저 하트를 눌러주고, 요청은 나중에 보내 줍니다.

기존 방식은 FASTICSTIC UI 


프로필 이미지를 랜덤으로 생성해 주는 것. - gravatar (랜덤으로 아이콘을 만들어 줍니다.) 


재사용하는 함수들은 Props 로 뺴줍니다.





socket.io 전용 훅스 만들기.

한 번만 연결 해 놓으면 서버 -> 프론트 -> 서버 한 번에 데이터를 받을 수 있습니다.
socket.on 문서에 WebSocket API 도 만들어 놓습니다.

Hello API - 소켓 연결 테스트용 API
onlineList - 현재 온라인인 사람들 아이디 목록..


web Socket 은
하나의 컴포넌트에 종속되게 넣어버리면 x (그 컴포넌트가 사라지면 x) 
공통된 컴포넌트에 넣어 줍니다. 


화면에 socket 이 들어가지 않는다? hook 에 넣어주기.

socket.emit('hello', 'world') - hello 라는 api 에 world 를 넣어줍니다.
socket.on('message', (data) { - 데이터를 받는 Callback 함수. 
    console.log(data)
})
socket.disconnect() - 한번 맺었던 연결 끊는 함수.


socket.io 이벤트 연결하기.

socket.emit (클라이언트에서 서버로 보내는 이벤트(클라이언트에선 emit 으로 보냅니다.)) 
socket.login (워크스페이스 채널이 로딩 완료되었을 떄, 서버에 로그인했음을 알리는 이벤트.) 
socket.disconnect (클라이언트에서 소켓 연결을 끊는 함수) 


chatData 같은 것은 Channel, worksapces 에서 공틍으로 사용하다 보니 Props 가 필요한 경우도 있습니다.

interface Props {
    chatData?: IDM[];
}

{chatData?.map((chat) => (
    <Chat key={chat.id} data={chat} /> 
))}







Custom ScrollBar Dayjs 

스크롤 좀 했다가 가만이 있으면 스크롤이 사라지고, 내릴 떈 나타나는 autoHide 
스크롤 내릴 떈 onScrollFrame 호출이 됩니다



멘션 기능 만들기.

@제로초2 hashtag 하기.
직접 구현하는 것도 의미가 있지만 라이브러리 추천.

react-mentions 

<Mention appendSpaceonAdd trigger="@" data={memberData?.map((v) => ({ id: v.id, display: v.nickname })) || []} 
    renderSuggestion={renderSuggestion} />

React 멘션의 사용 방법.

<MentionTextarea>
<Mention>
</MentionsTextarea>



정규표현식으로 문자열 변환하기.

@[제로초](5) 

npm i regexify-string  (정규표현식 쓰는 것도 라이브러리 도움을 받자) 
...


리버스 인피니트 스크롤링(useSWRRinfinite) 

쭉 내려 추가가 되는 데 위로 올려 위로 추가를 해야 합니다.
reverinfinite 스크롤.

스크롤이 가장 위로 올라간다고 판단.

const onScroll = useCallback((values) => {
    if (values.scrollTop === 0) { // 스크롤이 가장 위로 올라 갔을 떄. 
        console.log('가장 위');
    }
}. [])



스크롤 바 조정하기 scroll 


// 로딩 시 스크롤 bar 제일 아래로.
useEffect(() => {
    if (chatData?.length === 1) {
        scrollbarRef.current?.scrollToBottom() // 가장 밑으로 로딩 시 내려 갑니다. 
    }
}, [chatData])

post 에서 chat 요청 할 떄마다.
onSubmitForm useCallback 요청에서 - scrollbarRef.current?.scrollToBottom() 

살짝 딜레이가 걸립니다 0, 
몇 초 뒤에 됩니다.

post 하고 응답받는 시간 떄문에 그럽니다.
delay 가 발생.
이런 delay 가 사용성을 저하시킵니다. OPTIMISTIC UI 를 사용합니다.

화면에 바로 반영하고, 나중에 서버로 요청.
이미 데이터를 만들어 놓아야 합니다.

mutateChat((prevChatData) => {
  prevChatData?.[0].unshift({
    // dm 객체들 가져오기.
    id: (chatData[0][0]?.id || 0) + 1,
    content: savedChat,
    SenderId: myData.id, 
    Sender: myData,
    ReceiverId: userData.id,
    Receiver: userData,
    createAt: new Date(),
  }, false)
})
이렇게 하고 then 으로 post 요청.



// 어떻게 스크롤 위치 유지를 할 까?
지금 현재 스크롤 위치 - 스크롤 값 뺴주기.

console.log(ref.current?.getScrollHeight(), values.scrollHeight); // 스크롤 찍어 보고,
ref.current?.scrollTop(ref.current?.getScrollHeight() - values.scrollHeight) 



const onMessage = useCallback((data: IDM) => {
  if (data.SenderId === Number(id) && myData.id !== Number(id)) {
    mutateChat((chatData) => {
      ..
    })
  }
})


})


과거 내역 볼려고 위로 보고 있는데.
채팅을 치면 내려감.

이런 현상을 없애줘야 합니다.




안읽은 메시지란? 

내가 어떤 시점에서 읽었는 지알아야하고.
그 시점 이후로 몇개가 쌓였는지 알아야 합니다.

1,2,3,4 들어가는 순간 0 으로 초기화.
모든 채팅 서비스는 다 마찬가지.

어느 시점까지 읽었나.
그리고 그 뒤로 얼마나 쌓였나.

뒤로 얼마나 쌓였나는 API 로 만들어 놓음. unreads 
