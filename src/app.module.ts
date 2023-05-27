import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { UserLoginModule } from './user_login/user_login.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UserModule, PostsModule, CommentsModule, UserLoginModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
