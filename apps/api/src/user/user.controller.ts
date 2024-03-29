import { Controller, Get, Param, Post, Body, Put, Delete, Query,ParseIntPipe, UseFilters, UseGuards } from "@nestjs/common";
import { UsersService } from "./user.services"
import { Skill, User } from "@prisma/client";
import bigintStringify from "./../helpers/jsonHelper";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { PrismaClientExceptionFilter } from "./../database/prisma-client-exception.filter";
import { UserEntity } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AuthGuard } from "../auth/guards/auth.guard";

@Controller("users")
@ApiTags("users")
@UseFilters(PrismaClientExceptionFilter)
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @UseGuards(AuthGuard)
    @ApiCreatedResponse({ type: UserEntity, isArray: true })
    async getUsers(@Query('skip', ParseIntPipe) skip?: number, @Query('take', ParseIntPipe) take?: number): Promise<Partial<User>[]> {
        return bigintStringify(await this.usersService.users({ skip, take }));
    }

    @Get('byskills')
    @UseGuards(AuthGuard)
    @ApiCreatedResponse({ type: UserEntity, isArray: true })
    async getUsersBySkills(@Query('strings') skills: string[], @Query('skip', ParseIntPipe) skip?: number, @Query('take', ParseIntPipe) take?: number): Promise<Partial<User>[]> {
        return bigintStringify(await this.usersService.getUsersBySkill({ skip, take, skills }));
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    @ApiCreatedResponse({ type: UserEntity })
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<Partial<User>> {
        return bigintStringify(await this.usersService.user({ id }));
    }

    @Post()
    @UseGuards(AuthGuard)
    @ApiCreatedResponse({ type: UserEntity })
    async createUser(@Body() createUserDto: CreateUserDto): Promise<Partial<User>> {
        return bigintStringify(await this.usersService.createUser(createUserDto));
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    async updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return bigintStringify(await this.usersService.updateUser({ id }, updateUserDto));
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteUser(@Param('id', ParseIntPipe) id) {
        return await this.usersService.deleteUser({ id: id });
    }
}  