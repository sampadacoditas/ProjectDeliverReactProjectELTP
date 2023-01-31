
import { Button, Pagination } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  ACTION_TYPES,
  INITIAL_STATE,
  Reducer,
} from "../../../AppReducer/App.reducer" ;
import { Delete } from "../../../Components/Delete/Delete";
import { Modal } from "../../../Components/Modal/Modal";
import Table from "../../../Components/Table/Table";
import http from "../../../Services/Services";

import { Edit } from "./Edit/Edit";
import styles from "./Material.module.scss"


export const Material = () => {
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
      let data = await http.get("material/");
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
    { heading: "name", value: "name" },
    { heading: "_id", value: "_id" },
    // { heading: "isDeleted", value: "isDeleted" },
    // { heading: "createdAt", value: "createdAt" },
    // { heading: "Action", value: "" },
  ];
  return (
    <>
    <div className={styles.addMaterial}>
    <Link to="addMaterial" onClick={()=>toggleModal(<Outlet/>)}>AddMaterial</Link>

      </div>
      <div>
      {modal && <Modal modal={modal} setModal={toggleModal} Page={page} url={url}/>}
        <Table 
        data={state.posts.data} 
        column={column} 
        buttonText1={"Edit"} 
        buttonText2={"Delete"}
        JSXElement1={Delete}
        JSXElement2={Edit}
        url={"material/"}
        />
      </div>
      <div className={styles.pagination}>
        <Pagination/>
      </div>
      
    </>
  );
};
