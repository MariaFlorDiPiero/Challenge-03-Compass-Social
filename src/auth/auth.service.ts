import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
// import { UnauthorizedError } from './errors/unauthorized.error';
import { User } from '../user/entities/user.entity';
import { UserLoginService } from '../user_login/user_login.service';
// import { UserPayload } from './models/UserPayload';
// import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    // private readonly jwtService: JwtService,
    private readonly userLoginService: UserLoginService,
  ) {}

  // async login(username: User): Promise<UserToken> {
  //   const payload: UserPayload = {
  //     sub: username.id,
  //     email: username.email,
  //     name: username.name,
  //   };

  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userLoginService.findByUsername(username);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new Error('Email ou senha incorretos.');
  }
}
