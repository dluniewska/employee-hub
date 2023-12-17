export interface IUser {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    phone: string;
    room: string;
    positionId: number;
    unitId: number;
    description: string;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
    deletedAt: Date;
    deletedBy: string;
    deleted: boolean;
}