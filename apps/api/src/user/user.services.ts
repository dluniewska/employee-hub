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

    async getUsersBySkill(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
        skills?: string[]; // Array of skill names to filter by
    }): Promise<Partial<User>[]> {
        const { skip, take, cursor, where, orderBy, skills } = params;
        let args = JSON.parse(skills.toString())
        let users = await this.prisma.user.findMany({
            include: {
                skills: {
                    select: {
                        skill: {
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                },
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
                }
            },
            skip,
            take,
            cursor,
            where: {
                ...where,
                deleted: false,
                skills: {
                    some: {
                        skill: {
                            name: {
                                in: args,
                            },
                        },
                    },
                }
            },
            orderBy,
        });
        const formattedUsers = users.map(user => ({
            ...user,
            skills: user.skills.map(skill => ({
              id: skill.skill.id,
              name: skill.skill.name
            }))
          }));
        return formattedUsers;
    }

    async user(where: Prisma.UserWhereUniqueInput): Promise<Partial<User>> {
        const user = await this.prisma.user.findUnique({
            select: baseUserSelect,
            where: { ...where, deleted: false }
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
            where: { ...where, deleted: false }
        });

        if (!user) {
            throw new NotFoundException(`User with id: ${where.id} was not found`);
        }

        await this.prisma.user.update({
            data: updateUserDto,
            where
        })

    }

    async deleteUser(where: Prisma.UserWhereUniqueInput) {
        const user = await this.prisma.user.findUnique({
            where: { ...where, deleted: false }
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
