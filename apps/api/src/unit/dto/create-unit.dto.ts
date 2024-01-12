import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUnitDto {
    
    @ApiProperty({ required: true, nullable: false })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ required: true, nullable: true })
    @IsInt()
    @IsOptional()
    parentId: number;
}