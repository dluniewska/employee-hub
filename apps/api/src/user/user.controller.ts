import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
    Query,
    ParseIntPipe,
} from "@nestjs/common";
import { UserService } from "./user.services"
import { User } from "@prisma/client";
import bigintStringify from "src/helpers/jsonHelper";
import { createUserDto } from "./dto/create-user.dto";
import { baseUserDto } from "./dto/base-user.dto";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UserService) { }

    @Get()
    async getUsers(
        @Query('skip', ParseIntPipe) skip?: number,
        @Query('take', ParseIntPipe) take?: number
    ): Promise<User[]> {
        return await this.usersService.users({ skip, take });
    }

    @Get(':id')
    async getUser(
        @Param('id', ParseIntPipe) id: number,
    ): Promise<User | null> {
        return await this.usersService.user({ id: id });
    }

    // @Post()
    // async createUser(
    //     @Body() userData: createUserDto
    // ): Promise<baseUserDto> {
    //     return await this.usersService.createUser({userData});
    // }
}