import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthenticateService {

    constructor(
        @Inject('USER_CLIENT')
        private readonly client: ClientProxy,
        private readonly jwtService: JwtService) {}
    
      async signin(username: string, password: string): Promise<any> { }
    
      async login(user) {}
}
