import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MinLength } from "class-validator";

export class CreateUnitDto {
    
    @ApiProperty({ required: true, nullable: false })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ required: true, nullable: false })
    @IsInt()
    @IsNotEmpty()
    parentId: number;
}