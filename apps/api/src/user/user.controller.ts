import {
    Controller, 
    Get, 
    Param,
    Post,
    Body,
    Put,
    Delete,
    Query,
} from "@nestjs/common";
import { UserService } from "./user.services"
import { User } from "@prisma/client";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UserService) { }

    @Get()
    async getUsers(
        @Query('skip') skip?: number,
        @Query('take') take?: number
    ): Promise<User[]> {
        return await this.usersService.users({skip, take});
    }
}