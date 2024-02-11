import type { User } from '~types/types.user';
import { Unit } from '~types/types.unit';

export interface IEmployeeHubContextType {
    users: User[],
    setUsers: (data: User[]) => void,
    units: Unit[],
    setUnits: (data: Unit[]) => void,
}