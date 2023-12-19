import React, { PropsWithChildren, createContext } from 'react';
import { IUser } from '../types/types.user';
import { IEmployeeHubContextType } from '../types/types.employeeHubContext';


export const EmployeeHubContext = createContext<IEmployeeHubContextType>({
    users: [],
    setUsers: () => {}
});


export const EmployeeHubProvider = ({ children }: PropsWithChildren<{}>) => {
    const [users, setUsers] = React.useState<IUser[]>([])

    return(
        <EmployeeHubContext.Provider value={{ users, setUsers }}>
            {children}
        </EmployeeHubContext.Provider>
    )
}

