import { Outlet } from "react-router-dom"
import { EmployeeHubProvider } from "../../providers/ContextProvider";
import Navbar from "../ui/Navbar";

const MainTemplate = () => {

    return (
        <div className="h-screen">
            <Navbar />
            <EmployeeHubProvider>
                <Outlet />
            </EmployeeHubProvider>
        </div>
    )
}

export default MainTemplate