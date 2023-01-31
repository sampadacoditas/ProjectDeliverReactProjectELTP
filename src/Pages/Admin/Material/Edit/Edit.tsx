import React, { useState } from 'react'
import { Modal } from '../../../../Components/Modal/Modal';
import http from '../../../../Services/Services';
import styles from "./Edit.module.scss"
export const Edit = ({toggleModal,modal,id,url}:any) => {

  const [data,setData]=useState({name:""})

    async function submitForm(e:any)
      {
        console.log({
          name:data.name,
        })
        e.preventDefault();
        try{
          const response=await http.put(`material/${id}`,{
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
  return (<>
    <Modal modal={modal} setModal={toggleModal}/>
  <h1 className={styles.heading}>Update Customer</h1>
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
    </>)
}
