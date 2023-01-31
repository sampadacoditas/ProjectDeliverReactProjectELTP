import React, { useState } from 'react'
import { Modal } from '../../../Components/Modal/Modal';
import http from '../../../Services/Services';
import styles from "./AddStorage.module.scss"
export const AddStorage = ({toggleModal,modal,Page}:any) => {
const [data,setData]=useState({Building:"",shelf:"",rack:""})

    async function submitForm(e:any)
      {
        e.preventDefault();
        try{
          const response=await http.post("storage/",{
            Building:data.Building,
            shelf:data.shelf,
            rack:data.rack,
           
          })
          console.log(response)
        }
        catch(e){
          console.log(e)
        }
      }
      function handleOnChange(e:any)
      {
        const newData={...data};
        // @ts-ignore
        newData[e.target.name]=e.target.value;
        setData(newData)
        console.log(newData)
      }
  return (
    <>
    <Modal modal={modal} setModal={toggleModal} Page={Page}/>
  <h1 className={styles.heading}>Add Storage</h1>
          <form onSubmit={(e)=>submitForm(e)}>
          <div className={styles.AddCustomers}>
            <label htmlFor="Building">Building</label>
            <input type="text"
            name="Building"
            value={data.Building}
            id="Building"
            onChange={(e)=>handleOnChange(e)}
            required/>
             <label htmlFor="shelf">shelf</label>
            <input type="text"
            name="shelf"
            value={data.shelf}
            id="shelf"
            onChange={(e)=>handleOnChange(e)}
            required/>
            <label htmlFor="rack">rack</label>
            <input type="text"
            name="rack"
            value={data.rack}
            id="rack"
            onChange={(e)=>handleOnChange(e)}
            required/>
            <button>Submit</button>
          </div>
         </form>
    </>
  )
}

