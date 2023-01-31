import { paginationClasses } from "@mui/material";
import React, { createContext, useReducer } from "react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Customers.module.scss"
import {
  ACTION_TYPES,
  INITIAL_STATE,
  Reducer,
} from "../../../AppReducer/App.reducer";
import { Button } from "../../../Components/Button/Button";
import { Delete } from "../../../Components/Delete/Delete";
import { Modal } from "../../../Components/Modal/Modal";
import Table from "../../../Components/Table/Table";
import http from "../../../Services/Services";
import { Edit } from "./Edit/Edit";
import { Pagination } from "../../../Components/Pagination/Pagination";

export const CustomersContext=createContext<any>({})
export const Customers = () => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState();
  const [id,setId]=useState();
  const [url,setUrl]=useState();
  console.log(state);
  console.log(state.posts.data?.user)
  function toggleModal(buttonText: any, id?: any) {
    setModal(!modal);
    setPage(buttonText);
  }
  console.log(page);
  useEffect(() => {
    async function handleFetch() {
      dispatch({ type: ACTION_TYPES.FETCH_START });
      try {
        let data = await http.get("customer/");
        console.log(data.data.user);
        dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      } catch (err: any) {
        dispatch({ type: ACTION_TYPES.FETCH_ERROR });
      }
    }
    handleFetch();
  }, []);

  const column = [
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "shippingAddress", value: "shippingAddress" },
    { heading: "state", value: "state" },
  ];
  return (
    // <CustomersContext.Provider value={{modal,setModal,page,setPage,id,setId,setUrl}}>
    <>
      <div className={styles.addCustomers}>
      <Button buttonText=<Link to="addcustomers" onClick={()=>toggleModal(<Outlet/>)}>Add
      Customers</Link>/>
      </div>
        {modal && <Modal modal={modal} setModal={toggleModal} Page={page} url={url}/>}
        <div className={styles.table}>
        <Table data={state.posts.data?.user} 
        column={column} 
        buttonText1={"Edit"}
        buttonText2={"Delete"}
        JSXElement1={Delete}
        JSXElement2={Edit}
        url={"customer/"}
        />
        </div>
        <div className={styles.pagination}><Pagination/></div>
        </>
    // {/* </CustomersContext.Provider> */}
  );
};
