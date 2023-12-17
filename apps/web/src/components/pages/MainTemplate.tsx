import { Outlet } from "react-router-dom"
import { EmployeeHubProvider } from "../../providers/ContextProvider";

const MainTemplate = () => {

    return (
        <div>
            <p>MainTemplate</p>
            <EmployeeHubProvider>
                <Outlet />
            </EmployeeHubProvider>
        </div>
    )
}

export default MainTemplate