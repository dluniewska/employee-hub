import { ApiProperty } from "@nestjs/swagger";
import { Skill } from "@prisma/client";

export class SkillEntity implements Skill {

    @ApiProperty({ type: BigInt })
    id: bigint;

    @ApiProperty({ type: String, required: true, nullable: false, minimum: 3 })
    name: string;

    @ApiProperty({ type: Date, readOnly: true })
    createdAt: Date;

    @ApiProperty({ type: String, readOnly: true })
    createdBy: string;

    @ApiProperty({ type: Date, readOnly: true })
    updatedAt: Date;

    @ApiProperty({ type: String, readOnly: true })
    updatedBy: string;

    @ApiProperty({ type: Date, readOnly: true })
    deletedAt: Date;

    @ApiProperty({ type: String, readOnly: true })
    deletedBy: string;

    @ApiProperty({ type: Boolean, readOnly: true })
    deleted: boolean;
}