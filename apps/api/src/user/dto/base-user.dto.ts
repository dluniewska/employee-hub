import { User } from "@prisma/client";

export class baseUserDto {
    id: number;
    email: string;
    name: string;
    phone: string;
    position: string;
    unit: string;
    description: string;
}