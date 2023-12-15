import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    
    @ApiProperty({ required: true, nullable: false })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ required: true, nullable: false })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    firstname: string;

    @ApiProperty({ required: true, nullable: false })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    lastname: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsPhoneNumber()
    phone: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    room: string;

    @ApiProperty({ required: true, nullable: false })
    @IsInt()
    @IsNotEmpty()
    positionId: number;

    @ApiProperty({ required: true, nullable: false })
    @IsInt()
    @IsNotEmpty()
    unitId: number;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description: string;
}