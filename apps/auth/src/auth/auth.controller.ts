// auth.controller.ts
import { Controller, UnauthorizedException, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.services';
import { LoginCredentialsDto } from 'src/types/login-credentials.type';
import { TokenResponseDto } from 'src/types/token-response.type';
import { Token } from 'src/types/token.type';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @MessagePattern({ cmd: 'login' })
  async login(@Payload() credentials: LoginCredentialsDto): Promise<TokenResponseDto> {
    const user = await this.authService.validateUser(credentials);
    if (user) {
      return await this.authService.login(user);
    } else {
      throw new UnauthorizedException();
    }
  }

  @MessagePattern({ cmd: 'authme' })
  async authMe(@Payload() jwt: string) {
    const res = await this.authService.authme(jwt);
    if (!res.status) {
      throw new UnauthorizedException(res.message);
    }
    return { statusCode: 200, message: 'Token is valid' };
  }

  @MessagePattern({ role: 'auth', cmd: 'check'})
  async validateToken(@Payload() token: Token) {
    try {
      return await this.authService.validateToken(token.jwt);
    } catch(e) {
      return false;
    }
  }
}
