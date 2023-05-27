import { Module } from '@nestjs/common';
import { UserLoginService } from './user_login.service';
import { UserLoginController } from './user_login.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UserLoginController],
  providers: [UserLoginService, PrismaService],
})
export class UserLoginModule {}
