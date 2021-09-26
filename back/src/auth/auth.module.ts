import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

import { Users } from '../entities/Users';
import { AuthService } from './auth.service';
import { LocalSerializer } from './local.serializer';
import { LocalStrategy } from './local.strategy';


@Module({
  imports: [
    // 남의 모듈이면 imports 
    PassportModule.register({ session: true }),
    TypeOrmModule.forFeature([Users]),
    
  ],
  // 여기서 다 묶어주기 
  // 인젝터블이면 다 여기 
  providers: [AuthService, LocalStrategy, LocalSerializer],
})
export class AuthModule {}
