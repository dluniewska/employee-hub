import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../types/types.user';
import { KnexService } from 'src/database/knex.service';

@Injectable()
export class UsersService {

    constructor(private readonly knexService: KnexService) { }

    async getUser(email: string): Promise<User> {
        let user = null;
        try {
            user = await this.knexService.knex('auth').where('email', email).del();
            console.log(user)
        }
        catch(e) {
            console.error("Error while retrieving orders");
            console.log(e)
        }
        
        return user;
    }
}
