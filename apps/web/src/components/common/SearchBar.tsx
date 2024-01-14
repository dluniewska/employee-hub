import SearchIcon from '~assets/search-icon.svg?react'


const SearchBar = ({ setSearchString }: { setSearchString: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <div className='p-3 relative w-full flex justify-center bg-pastel-beige-color/50'>
                <div className="relative flex w-11/12 items-stretch m-0">
                    <input
                        type="search"
                        className="relative m-0 block flex-auto rounded border border-solid border-gray-500 bg-gray-100 bg-clip-padding px-3 py-[0.25rem] leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-amber-950 focus:shadow-md focus:outline-none"
                        placeholder="Szukaj po imieniu lub nazwisku"
                        aria-label="Search"
                        aria-describedby="button-search"
                        onChange={(e) => setSearchString(e.target.value)} />
                    <span
                        className="absolute right-0 input-group-text flex items-center whitespace-nowrap rounded px-3 ml-5 py-1.5 text-center hover:scale-110 duration-150"
                        id="button-search">
                        <SearchIcon className='fill-current' />
                    </span>
                </div>
        </div>
    )
}

export default SearchBar