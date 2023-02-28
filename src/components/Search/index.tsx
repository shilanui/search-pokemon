import { setSearchName } from "@/store/pokemonSlice";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "../../hook/useDebounce";

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 1500);

  const handleSearch = (text: string) => {
    if (text === "") {
      setSearchTerm("ALL");
    } else {
      setSearchTerm(text);
    }
  };

  const getSearchData = useCallback(
    async (text: string) => {
      dispatch(setSearchName(text));
    },
    [dispatch]
  );

  useEffect(() => {
    if (debouncedSearch) {
      getSearchData(debouncedSearch);
    }
  }, [debouncedSearch, getSearchData]);

  return (
    <div className="search">
      <input
        type="text"
        className="input-search"
        placeholder="Search Pokemon Name"
        onChange={(text) => handleSearch(text?.target?.value)}
      />
    </div>
  );
};

export default Search;
