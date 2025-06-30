import { createContext, useState, useContext } from "react"

const SearchContext = createContext();


// eslint-disable-next-line react/prop-types
export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState({ term: '', type: 'Images' });

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = () => useContext(SearchContext);
