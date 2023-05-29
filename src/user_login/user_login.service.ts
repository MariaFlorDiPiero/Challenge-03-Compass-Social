import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserLoginDto } from './dto/create-user_login.dto';
import { UpdateUserLoginDto } from './dto/update-user_login.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Prisma } from '.prisma/client';

@Injectable()
export class UserLoginService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserLoginDto: CreateUserLoginDto) {
    const hashedPassword = await bcrypt.hash(createUserLoginDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        name: '',
        email: '',
        username: createUserLoginDto.username,
        password: hashedPassword,
      },
    });

    return user;
  }

  findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
    });
  }
}
