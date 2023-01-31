import React, { useState } from 'react'
import { Modal } from '../../../../Components/Modal/Modal';
import http from '../../../../Services/Services';
import styles from "./AddMaterial.module.scss"
export const AddMaterial = ({toggleModal,modal,Page}:any) => {
const [data,setData]=useState({name:""})
    async function submitForm(e:any)
      {
        e.preventDefault();
        try{
          const response=await http.post("material/",{
            name:data.name,
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
  <h1 className={styles.heading}>Add Material</h1>
          <form onSubmit={(e)=>submitForm(e)}>
          <div className={styles.AddCustomers}>
            <label htmlFor="name">Name</label>
            <input
            type="text"
            name="name"
            value={data.name}
            id="name"
            onChange={(e)=>handleOnChange(e)}
            required />
             <button>Submit</button>
          </div>
         </form>
    </>
  )
}

