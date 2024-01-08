// auth.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { LoginCredentialsDto } from 'shared-types';
import { TokenResponseDto } from 'shared-types';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE') private client: ClientProxy) {}

  login(credentials: LoginCredentialsDto): Observable<TokenResponseDto> {
    return this.client.send<TokenResponseDto, LoginCredentialsDto>({ cmd: 'login' }, credentials);
  }
}
