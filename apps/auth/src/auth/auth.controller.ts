// auth.controller.ts
import { Controller, UnauthorizedException } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.services';
import { LoginCredentialsDto } from 'shared-types';
import { TokenResponseDto } from 'shared-types';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @MessagePattern({ cmd: 'login' })
  async login(@Payload() credentials: LoginCredentialsDto): Promise<TokenResponseDto> {
    const user = await this.authService.validateUser(credentials);
    if (user) {
      const accessToken = await this.authService.createToken(user.id, user.username, user.role, user.email);
      return { token: accessToken };
    } else {
      throw new UnauthorizedException();
    }
  }
}
