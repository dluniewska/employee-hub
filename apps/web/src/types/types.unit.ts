import { User } from "./types.user";

export type Unit = {
    id: number;
    name: string;
    parentId: number;
    parent: Unit;
    users: User[];
    units: Unit[];
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    deletedAt: Date;
    deletedBy: string;
    deleted: boolean;
}