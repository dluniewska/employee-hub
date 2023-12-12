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
import bigint_stringify from "src/helpers/json_helper";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UserService) { }

    @Get()
    async getUsers(
        @Query('skip') skip?: number,
        @Query('take') take?: number
    ): Promise<User[]> {
        let res = await this.usersService.users({skip, take}); 
        return bigint_stringify(res);
    }
}