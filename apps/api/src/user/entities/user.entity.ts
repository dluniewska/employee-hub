import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";

export class UserEntity implements User {

    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: String, required: true, nullable: false })
    email: string;

    @ApiProperty({ type: String, required: true, nullable: false, minimum: 3 })
    firstname: string;

    @ApiProperty({ type: String, required: true, nullable: false, minimum: 3 })
    lastname: string;

    @ApiProperty({ type: String, required: false, nullable: true })
    phone: string;

    @ApiProperty({ type: String, required: false, nullable: true })
    room: string;

    @ApiProperty({ type: Number, required: true })
    positionId: number;

    @ApiProperty({ type: Number, required: true })
    unitId: number;

    @ApiProperty({ type: String, required: false, nullable: true })
    description: string;

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