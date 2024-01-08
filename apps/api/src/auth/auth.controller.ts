// client.controller.ts
import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { LoginCredentialsDto } from 'shared-types';
import { Observable } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() credentials: LoginCredentialsDto): Observable<any> {
    return this.authService.login(credentials).pipe(
      catchError((error) => {
        throw new HttpException("Login failed", HttpStatus.UNAUTHORIZED);
      })
    );
  }
}
