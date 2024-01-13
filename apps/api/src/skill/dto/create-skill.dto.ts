import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSkillDto {
    
    @ApiProperty({ required: true, nullable: false })
    @IsString()
    @IsNotEmpty()
    name: string;
}