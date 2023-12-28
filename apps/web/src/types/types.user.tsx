import { Position } from "./types.position";
import { Unit } from "./types.unit";

export type IUser = {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    phone: string;
    room: string;
    positionId: number;
    position: Position;
    unitId: number;
    unit: Unit;
    description: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    deletedAt: Date;
    deletedBy: string;
    deleted: boolean;
}