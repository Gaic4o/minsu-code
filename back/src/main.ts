import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import passport  from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './httpException.filter';
import { ValidationPipe } from '@nestjs/common';
import path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';


declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());


    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
      }),
    );
   if (process.env.NODE_ENV === 'production') {
        app.enableCors({
     origin: ['http://minsu.shell'],
     credentials: true
    })
   } else {
     app.enableCors({
       origin: true,
       credentials: true,
     })
   }
    app.useStaticAssets(
    process.env.NODE_ENV === 'production'
      ? path.join(__dirname, '..', '..', 'uploads')
      : path.join(__dirname, '..', 'uploads'),
    {
      prefix: '/uploads',
    },
  );
  app.useStaticAssets(
    process.env.NODE_ENV === 'production'
      ? path.join(__dirname, '..', '..', 'public')
      : path.join(__dirname, '..', 'public'),
    {
      prefix: '/dist',
    },
  );


   // class-validator 검증까지 다 해줍니다. 
   app.useGlobalPipes(new ValidationPipe({
     transform: true
   })); // 추가해 줘야 validatiaon 이 됩니다.
   app.useGlobalFilters(new HttpExceptionFilter());

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



 app.use(cookieParser());
 app.use(
   session({
     resave: false,
     saveUninitialized: false,
     secret: process.env.COOKIE_SECRET,
     cookie: {
       httpOnly: true,
     },
   }),
 );
 app.use(passport.initialize());
 app.use(passport.session());


 const PORT = process.env.PORT || 3000;
 await app.listen(PORT);
 // nodemon 같은 역할 hotloader 근데 제대로 swagger 만들 떄 동작하지 x 
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
