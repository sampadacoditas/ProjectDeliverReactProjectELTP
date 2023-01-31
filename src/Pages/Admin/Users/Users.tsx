import React, { useReducer } from "react";
import { useEffect, useState } from "react";
import styles from "./Users.module.scss"
import {
  ACTION_TYPES,
  INITIAL_STATE,
  Reducer,
} from "../../../AppReducer/App.reducer" ;
import { Button } from "../../../Components/Button/Button";
import { Modal } from "../../../Components/Modal/Modal";
import Table from "../../../Components/Table/Table";
import http from "../../../Services/Services";
import { Delete } from "./Delete/Delete";
import { Link, Outlet } from "react-router-dom";
import { PaginationUser } from "./PaginationUser/PaginationUser";
export const Users = ({getData}:any) => {
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

  console.log(state);
//   useEffect(() => {
//     async function handleFetch()  {
//       dispatch({ type: ACTION_TYPES.FETCH_START });
//       try{
//       let data = await http.get("user/?page=1&limit=3");
//       console.log(data)
//       dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
//       }
//       catch(err:any)
//       {
//       dispatch({ type: ACTION_TYPES.FETCH_ERROR });
//       }
//     }
//     handleFetch()
//   }, []);
  
  const column = [
    { heading: "name", value: "name" },
    { heading: "email", value: "email" },
    { heading: "contact", value: "contact" },
    // { heading: "role", value: "role" },
    {heading:"role",value:"role"},
    // {heading:"address",value:"address"}
  ];
  return (
    <>
      <div className={styles.addCustomers}>
      <Button buttonText=<Link to="addcustomers" onClick={()=>toggleModal(<Outlet/>)}>Add
      Users</Link>/>
      </div>
        {modal && <Modal modal={modal} setModal={toggleModal} Page={page} url={url}/>}
        <div className={styles.table}>
        <Table 
        data={getData}
        // data={state.posts.data?.user} 
        column={column} 
        buttonText1={"Edit"}
        buttonText2={"Delete"}
        JSXElement1={Delete}
        // JSXElement2={Edit}
        url={"customer/"}
        />
        <div className={styles.Pagination}><PaginationUser/></div>
        </div>
    </>
  );
};


// import React, { useState } from 'react'
// import {Card} from "../../../Components/Pagination/Card"
// import { SearchArray } from '../../../Components/SearchBar/SearchArray/SearchArray';

// export const Users = () => {
//     const [pageNumber,changePageNumber]=useState(1);
//     const [perPage, setPerPage] = useState(10);
//     const [pageCards, setPageCards] = useState(SearchArray.slice(0, perPage))

//     const handleNextPage = () => {
//         const shownCards = perPage*pageNumber
//         if(shownCards <= SearchArray.length-1) {
//             setPageCards(SearchArray.slice(shownCards, Math.min(SearchArray.length, perPage+shownCards)))
//             changePageNumber(pageNumber+1)
//         }
//     }
//     const handlePrevPage = () => {
//         if(pageNumber === 1) {
//             return;
//         }
//         const shownCards = perPage*(pageNumber-2)
//         if(shownCards <= SearchArray.length-1) {
//             setPageCards(SearchArray.slice(shownCards, Math.min(SearchArray.length, perPage+shownCards)))
//         }
//         changePageNumber(pageNumber-1)
//     }

//     const handlePerPageChange = (val: string) => {
//         const inputVal = Number(val)
//         setPerPage(inputVal)
//         changePageNumber(1)

//         const shownCards = 0
//         setPageCards(SearchArray.slice(shownCards, Math.min(SearchArray.length, inputVal)))
//     }

//   return (
//     <div className='cardDiv'>
//     {
//     pageCards.map((element, index)=>
//             <Card
//             key={index}
//             // id={element.id}
//             // name={element.name} 
//             // adress={element.adress}
//              />  
//     )
//     }
//     <input value={perPage} type="number" onChange={(e) => {
//         handlePerPageChange(e.target.value)
//     }}/>
//     <button className='displayPageNumber'>{pageNumber}</button>
//     <button className='previous-button' onClick={handlePrevPage}>{"previous-button"}</button>
//     <button className='next-button' onClick={handleNextPage}>{"next-button"}</button>
//     </div>
//   )
// }


