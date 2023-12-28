import { IUser } from "../types.user";

export type IEmployeeHubContextType = {
    users:IUser[],
    setUsers:(data:IUser[]) => void
}