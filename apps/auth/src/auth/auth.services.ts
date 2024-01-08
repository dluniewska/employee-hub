import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../types/types.user';
import { KnexService } from 'src/database/knex.service';
import { LoginCredentialsDto } from 'shared-types';
import { TokenResponseDto } from 'shared-types';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly knexService: KnexService, private readonly jwtService: JwtService) { }

    private async hashPassword(password: string): Promise<string> {
        const saltRounds: number = parseInt(process.env.BCRYPT_SALT); // or higher based on security requirement
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    }

    private async comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, hashedPassword);
    }

    async validateUser(credentials: LoginCredentialsDto): Promise<User | null> {
        let user = await this.getUser(credentials.username)
        let isValidPwd = await this.comparePassword(credentials.password, user.password);
        let res: User | null = null;

        if (isValidPwd) {
            res = user;
        }
        return res;
    }

    async createToken(userId: number, username: string, role: string, email: string): Promise<string> {
        const payload = { sub: userId, username };
        return this.jwtService.sign(payload);
    }

    private async getUser(username: string): Promise<User | null> {
        let user = null;
        try {
            user = await this.knexService.knex('auth').where('username', username).first();
        }
        catch(e) {
            console.error("Error while retrieving orders");
            console.log(e)
        }
        
        return user;
    }
}
