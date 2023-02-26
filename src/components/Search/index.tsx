import React, { useCallback, useEffect, useState } from "react";
import { useDebounce } from "../../hook/useDebounce";

const Search = () => {
  // const { dataContextAction } = useDataContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [isFullWidth, setIsFullWidth] = useState(false);

  const debouncedSearch = useDebounce(searchTerm, 1500);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  const getSearchData = useCallback(async (text: string) => {
    // dataContextAction.setSearchData(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOutside = () => {
    setIsFullWidth(false);
  };

  // const ref = useOutsideClick(handleClickOutside);

  useEffect(() => {
    if (debouncedSearch) {
      getSearchData(debouncedSearch);
    }
  }, [debouncedSearch, getSearchData]);

  return (
    <div className="search">
      <input
        type="text"
        className={`${isFullWidth ? "input-search-60" : "input-search"}`}
        // ref={ref}
        placeholder="Search Repositories"
        onChange={(text) => handleSearch(text?.target?.value)}
        onFocus={() => setIsFullWidth(true)}
      />
    </div>
  );
};

export default Search;
