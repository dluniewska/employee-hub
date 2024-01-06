import type { User } from '@models/types.user';

export type IEmployeeHubContextType = {
    users:User[],
    setUsers:(data:User[]) => void
}