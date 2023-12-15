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
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UserService) { }

    @Get()
    async getUsers(@Query('skip', ParseIntPipe) skip?: number, @Query('take', ParseIntPipe) take?: number): Promise<Partial<User>[]> {
        return await this.usersService.users({ skip, take });
    }

    @Get(':id')
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<Partial<User> | null> {
        return bigintStringify(await this.usersService.user({ id }));
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<Partial<User> | null> {
        return bigintStringify(await this.usersService.createUser(createUserDto));
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return bigintStringify(await this.usersService.updateUser({ id }, updateUserDto));
    }

    @Delete(':id')
    async deletePost(@Param('id', ParseIntPipe) id): Promise<Partial<User>> {
        return await this.usersService.deletePost({ id: id });
    }
} 