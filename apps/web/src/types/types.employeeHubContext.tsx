import { IUser } from "./types.user";

export interface IEmployeeHubContextType {
    users:IUser[],
    setUsers:(data:IUser[]) => void
}