import { ApiProperty } from "@nestjs/swagger";
import { Unit } from "@prisma/client";

export class UnitEntity implements Unit {

    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: String, required: true, nullable: false })
    name: string;

    @ApiProperty({ type: Number, required: true })
    parentId: number;

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