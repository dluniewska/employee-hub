import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async users(params: {
        skip?: number;
        take?: number;
      }): Promise<User[]> {
        const { skip, take } = params;
        return this.prisma.user.findMany({
          skip,
          take
        });
    }
}
