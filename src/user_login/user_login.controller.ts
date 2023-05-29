import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserLoginService } from './user_login.service';
import { CreateUserLoginDto } from './dto/create-user_login.dto';
import { UpdateUserLoginDto } from './dto/update-user_login.dto';

@Controller('/api/v1/users')
export class UserLoginController {
  constructor(private readonly userLoginService: UserLoginService) {}

  @Post('login')
  create(@Body() createUserLoginDto: CreateUserLoginDto) {
    return this.userLoginService.create(createUserLoginDto);
  }
}
