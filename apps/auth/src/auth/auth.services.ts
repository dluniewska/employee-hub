import { Injectable } from '@nestjs/common';
import { User } from '../types/types.user';
import { KnexService } from 'src/database/knex.service';
import { BaseUserDto, LoginCredentialsDto, TokenResponseDto } from 'shared-types';
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

    async validateUser(credentials: LoginCredentialsDto): Promise<BaseUserDto | null> {
        const user = await this.getUser(credentials.username);

        if (!user) return null;

        const isValidPwd = await this.comparePassword(credentials.password, user.password);

        return isValidPwd ? this.parseToBaseUserDto(user) : null;
    }

    async login(user: BaseUserDto): Promise<TokenResponseDto> {
        const accessToken = await this.createToken(user.id, user.username, user.role, user.email);
        return { user: user, token: accessToken }
    }

    async validateToken(jwt: string) {
        try {
            let res = await this.jwtService.verify(jwt);
            return res;
        }
        catch (e) {
            console.log(e)
        }
    }

    async authme(jwt: string) {
        try {
            const decoded = this.jwtService.verify(jwt);
            return { status: true, data: decoded };
        } catch (error) {
            return { status: false, message: 'Invalid or expired token' };
        }
    }

    private async createToken(userId: number, username: string, role: string, email: string): Promise<string> {
        const payload = { sub: userId, username, email, role };
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
