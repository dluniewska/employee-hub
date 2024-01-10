import { Injectable } from '@nestjs/common';
import { User } from '../types/types.user';
import { KnexService } from 'src/database/knex.service';
import { BaseUserDto, LoginCredentialsDto } from 'shared-types';
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

    async login(credentials: LoginCredentialsDto): Promise<BaseUserDto | null> {
        let user = await this.getUser(credentials.username)
        let isValidPwd = await this.comparePassword(credentials.password, user.password);
        let res: BaseUserDto | null = null;

        if (isValidPwd) {
            res = this.parseToBaseUserDto(user);
        }
        return res;
    }

    async authme(token: string) {
        try {
            const decoded = this.jwtService.verify(token);
            return { status: true, data: decoded };
        } catch (error) {
            return { status: false, message: 'Invalid or expired token' };
        }
    }

    async createToken(userId: number, username: string, role: string, email: string): Promise<string> {
        const payload = { sub: userId, username };
        return this.jwtService.sign(payload);
    }

    private async getUser(username: string): Promise<User | null> {
        let user: User = null;
        try {
            user = await this.knexService.knex('auth')
                .select('id', 'email', 'username', 'role', 'password')
                .where('username', username)
                .first() as User;
        }
        catch (e) {
            console.error("Error while retrieving user");
            console.log(e)
        }

        return user;
    }

    parseToBaseUserDto = (user: User): BaseUserDto => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    };
}
