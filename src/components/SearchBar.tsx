import React, { ChangeEvent, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import EditText from "./design/EditText";

type TSearchBarProps = {
  isFullWidth?: boolean;
};

const SearchBar = ({ isFullWidth = false }: TSearchBarProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedQuery, setSearchedQuery] = useState(
    searchParams.get("q") || ""
  );
  const searchTextFieldRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    listenerRemoveFocus();
    if (location.pathname != "/search" && searchedQuery) {
      // setSearchedQuery("");
      // setSearchParams({});
    } else {
      setSearchedQuery(searchParams.get("q") || "");
    }
    return () => {
      listenerRemoveFocus();
    };
  }, [location.pathname, searchParams]);

  const listenerOnTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length <= 30 && searchTextFieldRef.current) {
      setSearchedQuery(value);
      searchTextFieldRef.current.value = value;
      // value.trim() == ""
      //   ? setSearchParams({})
      //   : setSearchParams({ q: value.trim() });
    }
  };

  const listenerOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTextFieldRef.current) {
      const value = searchTextFieldRef.current.value || "";
      if (value.length <= 30 && value) {
        // setSearchedQuery(value);
        value.trim() === ""
          ? setSearchParams({})
          : setSearchParams({ q: value.trim() });
      }
    }
  };

  const listenerOnFocus = () => {
    if (location.pathname != "/search") {
      navigate("/search");
    }
  };

  const listenerRemoveFocus = () => {
    if (searchTextFieldRef.current) searchTextFieldRef.current?.blur();
  };

  const listenerOnCrossBtnClick = () => {
    setSearchParams({});
    setSearchedQuery("");
  };

  return (
    <EditText
      text={searchedQuery}
      ref={searchTextFieldRef}
      onFocus={listenerOnFocus}
      onTextChange={listenerOnTextChange}
      onKeyDown={listenerOnKeyDown}
      onCrossBtnClick={listenerOnCrossBtnClick}
      hasCrossIcon={searchedQuery ? true : false}
      sx={{ width: isFullWidth ? "100%" : "300px" }}
    />
  );
};

export default SearchBar;
