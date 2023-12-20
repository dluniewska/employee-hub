import { Outlet } from "react-router-dom"
import { EmployeeHubProvider } from "../../providers/ContextProvider";
import Navbar from "../ui/Navbar";

const MainTemplate = () => {

    return (
        <div className="w-screen h-screen m-0 p-0 overflow-hidden bg-pastel-bg">
            <Navbar />
            <EmployeeHubProvider>
                <Outlet />
            </EmployeeHubProvider>
        </div>
    )
}

export default MainTemplate