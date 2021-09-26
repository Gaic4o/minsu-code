<h1>9월 15일 1일차</h1>

1. Nest js 셋팅하기.
  
  `npm i -g @nestjs/cli 설치하기.` 



2. Hot Reload 핫 리로딩 설정.

  `핫 리로딩은 express 에 nodemon 역할`
  변경 사항이 생기면? 프로세스를 다시 껐다가 종료 해야하는데 리로딩을 설정하면
  자동으로 업데이트 해 줍니다.

  [`Hot Reload 공식문서`]['https://docs.nestjs.kr/recipes/hot-reload']
  공식 문서 보고 따라하기 webpack 만 만들어주고 package 에서 webpack 실행만 해 주면 됩니다. 



3. 컨트롤러 구성. 

워크스페이스가 
단톡방 비슷한 것.

MinsuCode 

Workspaces(codeServer)
    channel(channel) 

minsuseob (워크스페이스) 
dms (메시지) 
users (유저) 
channels (워크스페이 채널) 





4. dotenv, morgan 미들웨어 구성.

  npm i --save @nestjs/config 
  .env 를 모듈로 만들어서 연결 해야 하는데. 미리 모듈로 감싸놓은 패키지 사용하기. `ConfigModule.forRoot(),` 



 미들웨어 설정.
  
  middlewares -> logger next() 써야지만 미들웨어는 동작합니다.

  export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
      consumer.apply(LoggerMiddleware).forRoutes('*');

   implements (반드시 구현 해야 한다.) 





5. 모듈 컨트롤러 구성.
  
  g mo users - 모듈 설치. 
  main 모듈에 imports 다 시켜주어야 합니다. workspace, channel, user 



  Body, Query, Param 
  
  인터페이스는 typescript 존재하고, 컴파일 끝나고 나면 사라져 버림.
  class 는 실제 자바스크립트로 바뀌고 나서도 남아 있습니다.





6. API 설계

  nest g co channels && nest g s channels 
  nest g s workspaces && nest g co workspaces 

  함수명은 꼭 get post 말고 좀 더 와닿는 이름 만들기.

  api 한 번 잘못만들면 파생되는 나비 효과 큼.
  api 수정 할 떈 사용자가 없어야 함.





7. Swagger 로 API 문서 만들기.

  nest 는 + spring + 앵귤러를 잘 융합.


    // swagger 설정. 
    const config = new DocumentBuilder()
    .setTitle('MinsuCode API')
    .setDescription('민수Code API 문서 입니다!')
    .setVersion('1.0') 
    .addCookieAuth('connect.sid')
    .build();
    const document = SwaggerModule.createDocument(app, config);
    // /api 문서들을 만들어 줍니다.
    SwaggerModule.setup('api', app, document);

  exports 새 모듈을 만들었는데 다른 모듈에서도 가져가게 하고 싶다면 이것을 사용.






8. req, res 안쓰도록 커스텀 데코레이터 만들기.

@Req, Res 를 사용하면 바꾸기도 어렵고 테스트 하기도 힘듭니다.
이런 것들 있으면 뺴주는 것이 좋습니다.

common - decorators user 만들어 준 뒤, 여기다가 req 를 만들어 줍니다.
@user user 를 하면 됩니다.

decorators - token response 요청. 
@Token() token 






1.  인터셉터 사용하기.

2.  typeorm entity (자동 생성하는 법) 
    typeorm-model-generator DB에 있는 것을 그대로 전환해줌.
    npx typeorm-mode-generator -h localhost -d sleact -u root -x nodejsbook -e mysql 

  
typeorm 커넥션 맺기.
데코레이트는 장식자. 꾸며주는 애들.

TypeOrmModule.forRoot(ormconfig), 
ormconfig.ts 를 만들어주기.
 
keepConnectionAlive: true, - 안 켜두면 재시작할 떄 typeorm 은 DB 연결을 끊어 버립니다.








typorm seeding, migration

synchornize: true 해 준 뒤 나중에는 꼭 false 해주기.
기존 엔티티를 바탕으로 쭉 작성됩니다.

npm run schema:sync 
npm run schema:drop 테스트 할 떄 테이블들 싹 다 지움 (가짜 테이블, 가짜 데이터 넣고 테스트) 

drop 과 sync 중간에 seed 이라는 기능이 필요합니다.
Tyorm seeding 

가짜 데이터를 만들어 faker 라이브러리도 있음.
implements Seeder - create-ininial-data.ts 

PickType 으로 Users 를 불러오고 email, nickname, password  를 가져옵니다.


async 함수에서는 throw 해도 서버가 죽지 않습니다.
자동으로 캐치 됩니다.







Exception Filter 

httpException.filter.ts 

- HttpExceptionFilter implements ExceptionFilter.
  ctx, response, status, err 접근 가능.







class-validator 

들어오는 데이터를 자동으로 검증 해주면 좋겠다.
dto 로 검증가능.

401 400 이런 것들은 BadRequestException, UnauthorizedException 요청 해주기 401 400 안 붙여줘도 됩니다.

main.ts 에 app.useGlobalPipes(new ValidationPipe()); 설정 해 주기.
여기서 알아서 검증 타입이 있다? 여기서 다 검증 해 줍니다

직접 dto 를 통해서 Validation(검증) 할 수 있습니다.

postman 으로 원하는 응답이 오는 지 확인 해 봅시다.

next.js request lifectyle 꼭 보기.
Pipes 는 - Data Validation 사용.







@nextjs/passport 

login 할 떄 passport 으로 로그인.
@UseGuards() 가 있습니다.

Guards 라이프 사이클 사용하기.
401 이런 것들은 Guards 에서 처리.

Guards 가 먼저 실행되서 에러가 난다면 서비스 실행 x 
바로 입셉션 필터로 넘어갑니다.

@UseGuards(LocalAuthGuard)

nest 용 @nestjs/passport
npm i passport passport-local 

대부분 것들은 context 매개변수로 들어있고.
context 로 Http 꺼내와서 getRequest() 할 수 있고.
요청 정보 바탕(request)으로 logIn 을 하고. 

공식문서에 그대로 있습니다.

passport 할 떄 로컬 전략 - 시리얼라이즈, 디시리얼라이즈 전략도 필요.

모듈 아니면 provider(service, guard, 인터셉터, injectable())
passport 에 썻던 애들은 다 local.strgragy.ts, local.serilizer.ts 

스트레터지는 
auth 서비스도 구현 해보기.

auth.service.ts 
구현한다면? 필요 할 때 마다 import 해서 쓸 수 있습니다.

   if (result) {
      // 유저에서 패스워드랑 그 나머지. 
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }

유저에서 password 만 뺴고 나머지 password -> 나머지 가져오기.

local.stratrgy.ts 에서 

validate 검증을 해서 email, password 
그러면 done 을 하고.
!user 가 아니라면 - UnauthorizeException;..

done 를 한다면? req.login 으로 갑니다.
local.auth.gurad.ts 에 있는 await super.logIn(request); 여기로 갑니다.

req login 되면 - loca.seralizer.ts 로 갑니다.
serilizeUser 하면 - user에 id 만 뽑아서 session 저장.

id 만 뽑아서 descr.. 에서는 Repository는 findOneOrFail.
디시리얼라이즈유저에서는 id 세션에 저장된 바탕으로 복원해서 req.user 에 넣는다.

@nextjs/passport 가 쓰이는 이유가 PassPortModule 을 사용해서 모듈화를 시켜줍니다.
PassportModule.register({ session: true }),

main.ts 에 passport.initilize, session 
passport 모듈만으로 충분하지 x 위에 2개 것도 추가 해 주어야 합니다.

여러 개 가져오는 것은 find 
복잡 해 질 땐 직접 쿼리를 씁니다. findOne

 @UseGuards(new LocalAuthGuard()) 로그인.
 @UseGuards(new NotLoggedInGuard()) 로그인 안 한 사람만. 




typeorm transaction

await this.workspaceMembersRepository.save({
  UserId: returned.id,
  WorkspaceId: 1, 
})