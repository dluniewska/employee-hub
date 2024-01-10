import type { User } from '~types/types.user';

export interface IEmployeeHubContextType {
    users:User[],
    setUsers:(data:User[]) => void
}