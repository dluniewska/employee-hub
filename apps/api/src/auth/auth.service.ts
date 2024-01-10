// auth.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { LoginCredentialsDto, TokenResponseDto } from 'shared-types';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE') private client: ClientProxy) {}

  login(credentials: LoginCredentialsDto): Observable<TokenResponseDto> {
    return this.client.send<TokenResponseDto, LoginCredentialsDto>({ cmd: 'login' }, credentials);
  }

  authme(token: string) {
    return this.client.send<boolean, string>({ cmd: 'authme' }, token);
  }
}
