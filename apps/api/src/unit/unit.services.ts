import { Injectable, NotFoundException } from '@nestjs/common';
import { Unit, Prisma } from '@prisma/client';
import { PrismaService } from './../database/prisma.service';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';
import { allUnitsSelect } from './queries/all-units.select';
import { baseUnitsSelect } from './queries/base-unit.select';


@Injectable()
export class UnitsService {

    constructor(private prisma: PrismaService) { }

    async getUnits(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UnitWhereUniqueInput;
        where?: Prisma.UnitWhereInput;
        orderBy?: Prisma.UnitOrderByWithRelationInput;
    }): Promise<Partial<Unit>[]> {
        const { skip, take, cursor, where, orderBy } = params;
        let units = await this.prisma.unit.findMany({
            select: allUnitsSelect,
            skip,
            take,
            cursor,
            where: { deleted: false },
            orderBy
        });
        return units;
    }

    async getUnit(where: Prisma.UnitWhereUniqueInput): Promise<Partial<Unit>> {
        const unit = await this.prisma.unit.findUnique({
            select: baseUnitsSelect,
            where: { ...where, deleted: false}
        });

        if (!unit) {
            throw new NotFoundException(`unit with id: ${where.id} was not found`);
        }

        return unit;
    }

    async createUnit(unit: CreateUnitDto): Promise<Partial<Unit>> {
        return await this.prisma.unit.create({
            data: {
                name: unit.name,
                createdBy: "test"
            }
        });
    }

    async updateUnit(where: Prisma.UnitWhereUniqueInput, updateUnitDto: UpdateUnitDto) {  
        const unit = await this.prisma.unit.findUnique({
            where: { ...where, deleted: false}
        });

        if (!unit) {
            throw new NotFoundException(`unit with id: ${where.id} was not found`);
        }
        
        await this.prisma.unit.update({
            data: updateUnitDto,
            where
        })

    }

    async deleteUnit(where: Prisma.UnitWhereUniqueInput) {
        const unit = await this.prisma.unit.findUnique({
            where: { ...where, deleted: false}
        });

        if (!unit) {
            throw new NotFoundException(`unit with id: ${where.id} was not found`);
        }

        await this.prisma.unit.update({
            data: {
                deleted: true,
                deletedBy: "test",
                deletedAt: new Date()
            },
            where
        });
      }
}
