import type { User } from '~types/types.user';

export type IEmployeeHubContextType = {
    users:User[],
    setUsers:(data:User[]) => void
}