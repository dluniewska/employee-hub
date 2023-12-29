import { Outlet } from "react-router-dom"
import { EmployeeHubProvider } from "../../providers/ContextProvider";
import Navbar from "../ui/Navbar";
import { useState } from "react";

const MainTemplate = () => {
    const [searchString, setSearchString] = useState<string>('');

    return (
        <div className="relative w-screen h-screen m-0 p-0 overflow-hidden bg-gray-50">
            <EmployeeHubProvider>
                <Navbar setSearchString={setSearchString}/>
                <Outlet context={{searchString}}/>
            </EmployeeHubProvider>
        </div>
    )
}

export default MainTemplate