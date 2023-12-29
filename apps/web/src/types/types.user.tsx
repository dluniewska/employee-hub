import { Experience } from "./types.experience";
import { Position } from "./types.position";
import { Skill } from "./types.skill";
import { Unit } from "./types.unit";

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