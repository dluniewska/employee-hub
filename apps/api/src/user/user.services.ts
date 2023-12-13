import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) { }

    baseUser = {
        id: true,
        email: true,
        firstname: true,
        lastname: true,
        phone: true,
        position: {
            select: {
                id: true,
                name: true
            }
        },
        unit: {
            select: {
                id: true,
                name: true,
                parentId: true
            }
        },
        description: true,
        skills: {
            select: {
                skill: true
            }
        },
        experience: true
    }

    async users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<Partial<User>[]> {
        const { skip, take, cursor, where, orderBy } = params;
        let users = await this.prisma.user.findMany({
            select: {
                id: true,
                firstname: true,
                lastname: true,
                position: {
                    select: {
                        name: true
                    }
                },
                unit: {
                    select: {
                        name: true
                    }
                }
            },
            skip,
            take,
            cursor,
            where: { deleted: false },
            orderBy
        });
        return users;
    }

    async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<Partial<User> | null> {
        return this.prisma.user.findUnique({
            select: this.baseUser,
            where: userWhereUniqueInput,
        });
    }

    async createUser(user: CreateUserDto): Promise<Partial<User>> {
        return this.prisma.user.create({
            select: this.baseUser,
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

    async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<Partial<User>> {
        return await this.prisma.user.update({
            select: this.baseUser,
            data: updateUserDto,
            where: { id: id }
        })
    }

    async deletePost(where: Prisma.UserWhereUniqueInput): Promise<Partial<User>> {
        return this.prisma.user.update({
            select: {
                id: true
            },
            data: {
                deleted: true,
                deletedBy: "test",
                deletedAt: new Date()
            },
            where
        });
      }
}
