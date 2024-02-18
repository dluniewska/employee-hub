import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards } from "@nestjs/common";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { TypeOrmUsersService } from "./user.typeorm.service";
import { User } from "./entities/user.entity";
import { Roles } from "src/auth/decorators/roles.decorator";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("users")
@ApiTags("users")
@UseGuards(AuthGuard)
export class TypeOrmUsersController {
    constructor(private readonly usersService: TypeOrmUsersService) { }

    @Get()
    @ApiCreatedResponse({ type: () => User, isArray: true })
    async getUsers(@Query('skip', ParseIntPipe) skip?: number, @Query('take', ParseIntPipe) take?: number): Promise<Partial<User>[]> {
        return await this.usersService.findAll({ skip, take });
    }

    // @Get('byskills')
    // @ApiCreatedResponse({ type: () => User, isArray: true })
    // async getUsersBySkills(@Query('strings') skills: string[], @Query('skip', ParseIntPipe) skip?: number, @Query('take', ParseIntPipe) take?: number): Promise<Partial<User>[]> {
    //     return await this.usersService.getUsersBySkill({ skip, take, skills });
    // }

    @Get(':id')
    @ApiCreatedResponse({ type: () => User })
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<Partial<User>> {
        return await this.usersService.findOne(id);
    }

    @Post()
    @Roles('ADMIN')
    @ApiCreatedResponse({ type: () => User })
    async createUser(@Body() createUserDto: CreateUserDto): Promise<Partial<User>> {
        return await this.usersService.create(createUserDto);
    }

    @Put(':id')
    @Roles('ADMIN')
    async updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return await this.usersService.update({ id, updateUserDto });
    }

    @Delete(':id')
    @Roles('ADMIN')
    async deleteUser(@Param('id', ParseIntPipe) id) {
        return await this.usersService.delete(id);
    }
}  