import { useOutletContext } from "react-router-dom";

type SearchContextType = { searchString: string };

export const useSearch = () => {
    return useOutletContext<SearchContextType>();
}

