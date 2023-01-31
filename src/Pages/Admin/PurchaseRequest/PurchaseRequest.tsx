


import React, { useReducer } from "react";
import { useEffect, useState } from "react";
import {
  ACTION_TYPES,
  INITIAL_STATE,
  Reducer,
} from "../../../AppReducer/App.reducer" ;
import Table from "../../../Components/Table/Table";
import http from "../../../Services/Services";
// import { http } from "../../../Services/Services";
export const PurchaseRequest = () => {
   const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  console.log(state);
  useEffect(() => {
    async function handleFetch()  {
      dispatch({ type: ACTION_TYPES.FETCH_START });
      try{
      // const response = await fetch("https://jsonplaceholder.typicode.com/users")
      // const data =await response.json()
      let data = await http.get("order/pending-order/");
      console.log(data)
      dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      }
      catch(err:any)
      {
      dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      }
    }
    handleFetch()
  }, []);
  
  const column = [
    { heading: "_id", value: "_id" },
    // { heading: "Building", value: "Building" },
    // { heading: "shelf", value: "shelf" },
    // { heading: "rack", value: "rack" },
    // { heading: "updatedAt", value: "updatedAt" },
  ];
  return (
    <>
      <div>
        <Table data={state.posts.data} column={column} />
      </div>
    </>
  );
};
