import React, { PropsWithChildren, createContext } from 'react';
import type { User } from '~types/types.user';
import { IEmployeeHubContextType } from '~types/providers/types.employeeHubContext';
import { Unit } from '~/types/types.unit';


export const EmployeeHubContext = createContext<IEmployeeHubContextType>({
    users: [],
    setUsers: () => {},
    units: [],
    setUnits: () => {}
});


export const EmployeeHubProvider = ({ children }: PropsWithChildren<{}>) => {
    const [users, setUsers] = React.useState<User[]>([])
    const [units, setUnits] = React.useState<Unit[]>([])

    return(
        <EmployeeHubContext.Provider value={{ users, setUsers, units, setUnits }}>
            {children}
        </EmployeeHubContext.Provider>
    )
}

