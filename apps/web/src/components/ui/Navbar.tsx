import Chicken from '../../assets/chicken.svg?react'
import SearchIcon from '../../assets/search-icon.svg?react'

const Navbar = () => {

    return (
        <div className='bg-red-300/50'>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between align-middle">
                    
                    <Chicken className='h-20 w-20' />

                    <div className="xl:w-96">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <input
                                type="search"
                                className="relative m-0 block flex-auto rounded border border-solid border-gray-100 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-slate-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-gray-50 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-gray-100 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-search" />

                            <span
                                className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                                id="button-search">
                                <SearchIcon />
                            </span>
                        </div>
                    </div>

                    <div className='text-gray-100'>
                        Zaloguj
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar