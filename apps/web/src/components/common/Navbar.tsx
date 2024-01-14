import { useNavigate } from 'react-router-dom';
import { useAuth } from '~hooks/useAuth';
import { Button } from "~ui/Button";
import { Roles } from "shared-types";

const Navbar = () => {

    const navigate = useNavigate();
    const { token, user } = useAuth();
    const { logout } = useAuth();

    const handleLogoClick = () => {
        navigate("/");
    }

    const handleLogoutClick = async () => {
        await logout()
            .then(() => {
                navigate("/login")
            })
    }

    const handleUnitsClick = async () => {
        navigate("/units")
    }

    return (
        <div className="shadow-sm backdrop-blur-sm bg-pastel-brown-color/25 text-pastel-dark-brown-color">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex flex-wrap h-16 items-center align-middle">

                    <Button onClick={() => handleLogoClick()} variant="hidden" className='text-xl font-sans font-bold subpixel-antialiased'>EmployeesHub</Button>

                    {
                        token &&
                        <>
                            <div className="w-full flex-1 flex flex-row justify-end items-center">

                                {
                                    user?.role === Roles.ADMIN && <Button className='mx-1' variant="secondary">Zarządzaj</Button>
                                }

                                <Button className='mx-1' onClick={() => handleUnitsClick()} variant="secondary">Zespoły</Button>

                                <div className='text-end pl-4 m-0'>Hi, {user?.username}</div>

                                <div className="text-end">
                                    <Button className='m-0' onClick={() => handleLogoutClick()} variant="hidden">Wyloguj</Button>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar