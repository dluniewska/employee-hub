// auth.service.ts
import { Injectable, Inject, ExecutionContext } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable, firstValueFrom, timeout } from 'rxjs';
import { ValidateUserResponseDto } from './dto/validate-user-response.dto';
import { LoginCredentialsDto } from './dto/login-credentials.dto';
import { TokenResponseDto } from './dto/token-response.dto';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE') private client: ClientProxy) {}

  login(credentials: LoginCredentialsDto): Observable<TokenResponseDto> {
    return this.client.send<TokenResponseDto, LoginCredentialsDto>({ cmd: 'login' }, credentials);
  }

  authme(token: string) {
    return this.client.send<boolean, string>({ cmd: 'authme' }, token);
  }

  validateUser(context: ExecutionContext): Promise<ValidateUserResponseDto> {
    const req = context.switchToHttp().getRequest();
    const res = firstValueFrom(this.client.send({ role: 'auth', cmd: 'check' }, { jwt: req.headers['authorization']?.split(' ')[1] }).pipe(timeout(5000)));
    return res;
  }
}
