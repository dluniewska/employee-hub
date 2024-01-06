import React, { PropsWithChildren, createContext } from 'react';
import type { User } from '~types/types.user';
import { IEmployeeHubContextType } from '~types/providers/types.employeeHubContext';


export const EmployeeHubContext = createContext<IEmployeeHubContextType>({
    users: [],
    setUsers: () => {}
});


export const EmployeeHubProvider = ({ children }: PropsWithChildren<{}>) => {
    const [users, setUsers] = React.useState<User[]>([])

    return(
        <EmployeeHubContext.Provider value={{ users, setUsers }}>
            {children}
        </EmployeeHubContext.Provider>
    )
}

