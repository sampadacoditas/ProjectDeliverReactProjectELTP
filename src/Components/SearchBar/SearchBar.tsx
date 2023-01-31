import React, { useEffect, useReducer, useState } from "react";
import styles from "./SearchBar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { SearchArray } from "./SearchArray/SearchArray";
import { SearchTable } from "./SearchTable/SearchTable";
import http from "../../Services/Services";
import {
  ACTION_TYPES,
  INITIAL_STATE,
  Reducer,
} from "../../AppReducer/App.reducer";
export const SearchBar = ({ placeholder, data }: any) => {
  const [query, setQuery] = useState("");
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  console.log(state);
  useEffect(() => {
    async function handleFetch() {
      dispatch({ type: ACTION_TYPES.FETCH_START });
      try {
        let data = await http.get("users");
        console.log(data);
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      } catch (err: any) {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      }
    }
    handleFetch();
  }, []);
  const keys = ["first_name", "last_name", "email"];
  const search = (data: any) => {
    return data.filter((item: any) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  
  return (
    <div className={styles.search}>
      <div className={styles.searchInputs}>
        <input
          className={styles.searchBarInputs}
          type="text"
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div>
          <SearchIcon />
        </div>
        {/* <SearchTable data={search(SearchArray)} /> */}
      </div>
    </div>
  );
};
