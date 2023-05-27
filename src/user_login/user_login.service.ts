import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserLoginDto } from './dto/create-user_login.dto';
import { UpdateUserLoginDto } from './dto/update-user_login.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserLoginService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserLoginDto: CreateUserLoginDto) {
    const user = {
      ...createUserLoginDto,
      password: await bcrypt.hash(createUserLoginDto.password, 10),
    };

    return user;
  }
}
