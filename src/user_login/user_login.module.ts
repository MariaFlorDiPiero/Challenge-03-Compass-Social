import { Module } from '@nestjs/common';
import { UserLoginService } from './user_login.service';
import { UserLoginController } from './user_login.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [UserLoginController],
  providers: [UserLoginService, PrismaService],
  exports: [UserLoginService],
})
export class UserLoginModule {}
