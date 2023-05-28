import { Injectable } from '@nestjs/common';
import { UserLoginService } from 'src/user_login/user_login.service';
import * as bcript from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userLoginService: UserLoginService) {}

  async validateUser(username: string, password: string) {
    const user = await this.userLoginService.findByUsername(username);

    if (user) {
      const isPasswordValid = await bcript.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new Error('Email ou senha incorreta');
  }
}
