import { Controller, Get, Param, Post, Body, Put, Delete, Query,ParseIntPipe, UseFilters } from "@nestjs/common";
import { UsersService } from "./user.services"
import { User } from "@prisma/client";
import bigintStringify from "./../helpers/jsonHelper";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { UserEntity } from "./entities/user.entity";
import { PrismaClientExceptionFilter } from "./../database/prisma-client-exception.filter";

@Controller("users")
@ApiTags("users")
@UseFilters(PrismaClientExceptionFilter)
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @ApiCreatedResponse({ type: UserEntity, isArray: true })
    async getUsers(@Query('skip', ParseIntPipe) skip?: number, @Query('take', ParseIntPipe) take?: number): Promise<Partial<User>[]> {
        return await this.usersService.users({ skip, take });
    }

    @Get(':id')
    @ApiCreatedResponse({ type: UserEntity })
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<Partial<User>> {
        return bigintStringify(await this.usersService.user({ id }));
    }

    @Post()
    @ApiCreatedResponse({ type: UserEntity })
    async create(@Body() createUserDto: CreateUserDto): Promise<Partial<User>> {
        return bigintStringify(await this.usersService.createUser(createUserDto));
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return bigintStringify(await this.usersService.updateUser({ id }, updateUserDto));
    }

    @Delete(':id')
    async deletePost(@Param('id', ParseIntPipe) id) {
        return await this.usersService.deletePost({ id: id });
    }
}  