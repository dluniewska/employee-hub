import { User } from "../types.user";

export type IEmployeeHubContextType = {
    users:User[],
    setUsers:(data:User[]) => void
}