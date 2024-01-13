import { Controller, Get, Param, Post, Body, Put, Delete, Query,ParseIntPipe, UseFilters, UseGuards } from "@nestjs/common";
import { Unit } from "@prisma/client";
import bigintStringify from "./../helpers/jsonHelper";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { PrismaClientExceptionFilter } from "./../database/prisma-client-exception.filter";
import { AuthGuard } from "../auth/guards/auth.guard";
import { UnitEntity } from "./entities/unit.entity";
import { UnitsService } from "./unit.services";
import { UpdateUnitDto } from "./dto/update-unit.dto";
import { CreateUnitDto } from "./dto/create-unit.dto";
import { Roles } from "src/auth/decorators/roles.decorator";

@Controller("units")
@ApiTags("units")
@UseFilters(PrismaClientExceptionFilter)
@UseGuards(AuthGuard)
export class UnitsController {
    constructor(private readonly unitsService: UnitsService) { }

    @Get()
    @ApiCreatedResponse({ type: UnitEntity, isArray: true })
    async getUnits(@Query('skip', ParseIntPipe) skip?: number, @Query('take', ParseIntPipe) take?: number): Promise<Partial<Unit>[]> {
        return await this.unitsService.getUnits({ skip, take });
    }

    @Get(':id')
    @ApiCreatedResponse({ type: UnitEntity })
    async getUnit(@Param('id', ParseIntPipe) id: number): Promise<Partial<Unit>> {
        return bigintStringify(await this.unitsService.getUnit({ id }));
    }

    @Post()
    @Roles('ADMIN')
    @ApiCreatedResponse({ type: UnitEntity })
    async createUnit(@Body() createUnitDto: CreateUnitDto): Promise<Partial<Unit>> {
        return bigintStringify(await this.unitsService.createUnit(createUnitDto));
    }

    @Put(':id')
    @Roles('ADMIN')
    async updateUnit(@Param('id', ParseIntPipe) id: number, @Body() updateUnitDto: UpdateUnitDto) {
        return bigintStringify(await this.unitsService.updateUnit({ id }, updateUnitDto));
    }

    @Delete(':id')
    @Roles('ADMIN')
    async deleteUnit(@Param('id', ParseIntPipe) id) {
        return await this.unitsService.deleteUnit({ id: id });
    }
}  