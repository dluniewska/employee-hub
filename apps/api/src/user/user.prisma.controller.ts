import { Controller, Get, Param, Post, Body, Put, Delete, Query,ParseIntPipe, UseFilters, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import bigintStringify from "./../helpers/jsonHelper";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { UserEntity } from "./entities/user.prisma.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AuthGuard } from "../auth/guards/auth.guard";
import { Roles } from "../auth/decorators/roles.decorator";
import { PrismaClientExceptionFilter } from "../database/prisma/prisma-client-exception.filter";
import { PrismaUsersService } from "./user.prisma.services";

@Controller("users")
@ApiTags("users")
@UseFilters(PrismaClientExceptionFilter)
@UseGuards(AuthGuard)
export class PrismaUsersController {
    constructor(private readonly usersService: PrismaUsersService) { }

    @Get()
    @ApiCreatedResponse({ type: UserEntity, isArray: true })
    async getUsers(@Query('skip', ParseIntPipe) skip?: number, @Query('take', ParseIntPipe) take?: number): Promise<Partial<User>[]> {
        return bigintStringify(await this.usersService.users({ skip, take }));
    }

    @Get('byskills')
    @ApiCreatedResponse({ type: UserEntity, isArray: true })
    async getUsersBySkills(@Query('strings') skills: string[], @Query('skip', ParseIntPipe) skip?: number, @Query('take', ParseIntPipe) take?: number): Promise<Partial<User>[]> {
        return bigintStringify(await this.usersService.getUsersBySkill({ skip, take, skills }));
    }

    @Get(':id')
    @ApiCreatedResponse({ type: UserEntity })
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<Partial<User>> {
        return bigintStringify(await this.usersService.user({ id }));
    }

    @Post()
    @Roles('ADMIN')
    @ApiCreatedResponse({ type: UserEntity })
    async createUser(@Body() createUserDto: CreateUserDto): Promise<Partial<User>> {
        return bigintStringify(await this.usersService.createUser(createUserDto));
    }

    @Put(':id')
    @Roles('ADMIN')
    async updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return bigintStringify(await this.usersService.updateUser({ id }, updateUserDto));
    }

    @Delete(':id')
    @Roles('ADMIN')
    async deleteUser(@Param('id', ParseIntPipe) id) {
        return await this.usersService.deleteUser({ id: id });
    }
}  