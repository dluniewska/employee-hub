import { useNavigate } from 'react-router-dom';
import SearchIcon from '@assets/search-icon.svg?react'
import { Button } from "@ui/button"

const Navbar = ({ setSearchString }: { setSearchString: React.Dispatch<React.SetStateAction<string>> }) => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate(`/login`);
    }

    const handleLogoClick = () => {
        navigate(`/`);
    }

    return (
        <div className="shadow-sm backdrop-blur-sm bg-pastel-brown-color/25 text-pastel-dark-brown-color">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex flex-wrap h-16 items-center justify-between align-middle">

                    <div className="flex-1">
                        <Button onClick={() => handleLogoClick()} variant="hidden" className='text-xl font-sans font-bold subpixel-antialiased'>EmployeesHub</Button>
                    </div>

                    <div className="xl:w-96 flex-1 flex-row min-w-fit">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                className="relative m-0 block flex-auto rounded border border-solid border-gray-500 bg-gray-100 bg-clip-padding px-3 py-[0.25rem] leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-amber-950 focus:shadow-md focus:outline-none"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-search"
                                onChange={(e) => setSearchString(e.target.value)} />
                            <span
                                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center hover:scale-110 duration-150"
                                id="button-search">
                                <SearchIcon className='fill-current' />
                            </span>
                        </div>
                    </div>

                    <div className="w-full flex-1 text-end">
                        <Button onClick={() => handleLoginClick()} variant="outline">Zaloguj</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar