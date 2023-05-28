import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/api/v1/users/login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  login() {
    // return this.authService.login();
  }
}
