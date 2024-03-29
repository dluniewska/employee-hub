import { Controller, Get, Param, Post, Body, Put, Delete, Query,ParseIntPipe, UseFilters, UseGuards } from "@nestjs/common";
import bigintStringify from "./../helpers/jsonHelper";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { PrismaClientExceptionFilter } from "./../database/prisma-client-exception.filter";
import { AuthGuard } from "../auth/guards/auth.guard";
import { SkillsService } from "./skill.services";
import { SkillEntity } from "./entities/skill.entity";
import { Skill } from "@prisma/client";
import { CreateSkillDto } from "./dto/create-skill.dto";
import { UpdateSkillDto } from "./dto/update-skill.dto";

@Controller("skills")
@ApiTags("skills")
@UseFilters(PrismaClientExceptionFilter)
export class SkillsController {
    constructor(private readonly skillsService: SkillsService) { }

    @Get()
    @UseGuards(AuthGuard)
    @ApiCreatedResponse({ type: SkillEntity, isArray: true })
    async getSkills(@Query('skip', ParseIntPipe) skip?: number, @Query('take', ParseIntPipe) take?: number): Promise<Partial<Skill>[]> {
        return bigintStringify(await this.skillsService.skills({ skip, take }));
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    @ApiCreatedResponse({ type: SkillEntity })
    async getSkill(@Param('id', ParseIntPipe) id: number): Promise<Partial<Skill>> {
        return bigintStringify(await this.skillsService.skill({ id }));
    }

    @Post()
    @UseGuards(AuthGuard)
    @ApiCreatedResponse({ type: SkillEntity })
    async createSkill(@Body() createSkillDto: CreateSkillDto): Promise<Partial<Skill>> {
        return bigintStringify(await this.skillsService.createSkill(createSkillDto));
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    async updateSkill(@Param('id', ParseIntPipe) id: number, @Body() updateSkillDto: UpdateSkillDto) {
        return bigintStringify(await this.skillsService.updateSkill({ id }, updateSkillDto));
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteSkill(@Param('id', ParseIntPipe) id) {
        return await this.skillsService.deleteSkill({ id: id });
    }
}  