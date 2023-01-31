
import React, { useReducer } from "react";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  ACTION_TYPES,
  INITIAL_STATE,
  Reducer,
} from "../../../AppReducer/App.reducer" ;
import { Button } from "../../../Components/Button/Button";
import { Delete } from "../../../Components/Delete/Delete";
import { Modal } from "../../../Components/Modal/Modal";
import { Pagination } from "../../../Components/Pagination/Pagination";
import Table from "../../../Components/Table/Table";
import http from "../../../Services/Services";
import { Edit } from "./Edit/Edit";
import styles from "./Storages.module.scss"
export const Storages = () => {
   const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  console.log(state);
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState();
  const [id,setId]=useState();
  const [url,setUrl]=useState();
  function toggleModal(buttonText: any, id?: any) {
    setModal(!modal);
    setPage(buttonText);
  }

  useEffect(() => {
    async function handleFetch()  {
      dispatch({ type: ACTION_TYPES.FETCH_START });
      try{
      let data = await http.get("storage/");
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
    { heading: "Building", value: "Building" },
    { heading: "shelf", value: "shelf" },
    { heading: "rack", value: "rack" },
  ];
  return (
    <>
    {modal && <Modal modal={modal} setModal={toggleModal} Page={page} url={url}/>}
    <div className={styles.addStorage}>
      <Button buttonText=<Link to="addStorage" onClick={()=>toggleModal(<Outlet/>)}>
      AddStorage</Link>/>
      </div>
      <div className={styles.table}>
        <Table 
        data={state.posts.data} 
        column={column}
        buttonText1={"Edit"}
        buttonText2={"Delete"}
        JSXElement1={Delete}
        JSXElement2={Edit}
        url={"storage/"}
         />
      </div>
      <div className={styles.pagination}>
        <Pagination/>
      </div>
    </>
  );
};
