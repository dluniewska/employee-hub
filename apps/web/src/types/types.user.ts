import type { Experience } from "@models/types.experience";
import type { Position } from "@models/types.position";
import type { Skill } from "@models/types.skill";
import type { Unit } from "@models/types.unit";

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