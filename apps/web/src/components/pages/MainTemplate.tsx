import { Outlet } from "react-router-dom"
import { EmployeeHubProvider } from "~providers/ContextProvider";
import Navbar from "~common/Navbar";

const MainTemplate = () => {
    return (
        <div className="relative w-screen h-screen m-0 p-0 overflow-hidden bg-gray-50">
            <EmployeeHubProvider>
                <Navbar/>
                <Outlet/>
            </EmployeeHubProvider>
        </div>
    )
}

export default MainTemplate