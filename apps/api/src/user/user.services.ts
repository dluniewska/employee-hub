import { Injectable, NotFoundException } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from './../database/prisma.service';
import { baseUserSelect } from './queries/base-user.select';
import { allUserSelect } from './queries/all-users.select';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

    async users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<Partial<User>[]> {
        const { skip, take, cursor, where, orderBy } = params;
        let users = await this.prisma.user.findMany({
            select: allUserSelect,
            skip,
            take,
            cursor,
            where: { deleted: false },
            orderBy
        });
        return users;
    }

    async user(where: Prisma.UserWhereUniqueInput): Promise<Partial<User>> {
        const user = await this.prisma.user.findUnique({
            select: baseUserSelect,
            where: { ...where, deleted: false}
        });

        if (!user) {
            throw new NotFoundException(`User with id: ${where.id} was not found`);
        }

        return user;
    }

    async createUser(user: CreateUserDto): Promise<Partial<User>> {
        return await this.prisma.user.create({
            select: baseUserSelect,
            data: {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                position: {
                    connect: { id: user.positionId }
                },
                unit: {
                    connect: { id: user.unitId }
                },
                createdBy: "test"
            }
        });
    }

    async updateUser(where: Prisma.UserWhereUniqueInput, updateUserDto: UpdateUserDto) {  
        const user = await this.prisma.user.findUnique({
            where: { ...where, deleted: false}
        });

        if (!user) {
            throw new NotFoundException(`User with id: ${where.id} was not found`);
        }
        
        await this.prisma.user.update({
            data: updateUserDto,
            where
        })

    }

    async deletePost(where: Prisma.UserWhereUniqueInput) {
        const user = await this.prisma.user.findUnique({
            where: { ...where, deleted: false}
        });

        if (!user) {
            throw new NotFoundException(`User with id: ${where.id} was not found`);
        }

        await this.prisma.user.update({
            data: {
                deleted: true,
                deletedBy: "test",
                deletedAt: new Date()
            },
            where
        });
      }
}
