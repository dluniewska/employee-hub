import type { Experience } from "~types/types.experience";
import type { Position } from "~types/types.position";
import type { Skill } from "~types/types.skill";
import type { Unit } from "~types/types.unit";

export type User = {
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
    skills: Skill[],
    experience: Experience[],
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    deletedAt: Date;
    deletedBy: string;
    deleted: boolean;
}