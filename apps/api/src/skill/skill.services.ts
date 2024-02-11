import { Injectable, NotFoundException } from '@nestjs/common';
import { Skill, Prisma } from '@prisma/client';
import { PrismaService } from './../database/prisma/prisma.service';
import { allSkillsSelect } from './queries/all-skills.select';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Injectable()
export class SkillsService {

    constructor(private prisma: PrismaService) { }

    async skills(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.SkillWhereUniqueInput;
        where?: Prisma.SkillWhereInput;
        orderBy?: Prisma.SkillOrderByWithRelationInput;
    }): Promise<Partial<Skill>[]> {
        const { skip, take, cursor, where, orderBy } = params;
        let Skills = await this.prisma.skill.findMany({
            select: allSkillsSelect,
            skip,
            take,
            cursor,
            where: { deleted: false },
            orderBy
        });
        return Skills;
    }

    async skill(where: Prisma.SkillWhereUniqueInput): Promise<Partial<Skill>> {
        const Skill = await this.prisma.skill.findUnique({
            where: { ...where, deleted: false}
        });

        if (!Skill) {
            throw new NotFoundException(`Skill with id: ${where.id} was not found`);
        }

        return Skill;
    }

    async createSkill(skill: CreateSkillDto): Promise<Partial<Skill>> {
        return await this.prisma.skill.create({
            data: {
                name: skill.name,
                createdBy: "test"
            }
        });
    }

    async updateSkill(where: Prisma.SkillWhereUniqueInput, updateSkillDto: UpdateSkillDto) {  
        const Skill = await this.prisma.skill.findUnique({
            where: { ...where, deleted: false}
        });

        if (!Skill) {
            throw new NotFoundException(`Skill with id: ${where.id} was not found`);
        }
        
        await this.prisma.skill.update({
            data: updateSkillDto,
            where
        })

    }

    async deleteSkill(where: Prisma.SkillWhereUniqueInput) {
        const Skill = await this.prisma.skill.findUnique({
            where: { ...where, deleted: false}
        });

        if (!Skill) {
            throw new NotFoundException(`Skill with id: ${where.id} was not found`);
        }

        await this.prisma.skill.update({
            data: {
                deleted: true,
                deletedBy: "test",
                deletedAt: new Date()
            },
            where
        });
      }
}
