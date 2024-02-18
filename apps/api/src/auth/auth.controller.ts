// client.controller.ts
import { Controller, Post, Body, HttpException, HttpStatus, Get, Req } from '@nestjs/common';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { LoginCredentialsDto } from './dto/login-credentials.dto';

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

  @Get('authme')
  async authMe(@Req() request) {
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new HttpException('Token not found', HttpStatus.UNAUTHORIZED);
    }

    return this.authService.authme(token).pipe(
      catchError((error) => {
        throw new HttpException("Validation failed", HttpStatus.UNAUTHORIZED);
      })
    );
  }
}
