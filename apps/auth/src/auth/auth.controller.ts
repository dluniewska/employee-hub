// auth.controller.ts
import { Controller, UnauthorizedException, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.services';
import { LoginCredentialsDto } from 'shared-types';
import { TokenResponseDto } from 'shared-types';
import { JwtAuthGuard } from './jwt.auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @MessagePattern({ cmd: 'login' })
  async login(@Payload() credentials: LoginCredentialsDto): Promise<TokenResponseDto> {
    const user = await this.authService.login(credentials);
    if (user) {
      const accessToken = await this.authService.createToken(user.id, user.username, user.role, user.email);
      return { user: user, token: accessToken}
    } else {
      throw new UnauthorizedException();
    }
  }

  @MessagePattern({ cmd: 'authme' })
  async authMe(@Payload() token: string) {
    const res = await this.authService.authme(token);
    if (!res.status) {
      throw new UnauthorizedException(res.message);
    }
    return { statusCode: 200, message: 'Token is valid' };
  }
}
