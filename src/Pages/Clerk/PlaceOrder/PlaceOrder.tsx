// import React from 'react'
// import styles from "./PlaceOrder.module.scss"
// export const PlaceOrder = () => {
//   return (
//     <div className={styles.placeOrder}>
//       PlaceOrderygtchjvui
//     </div>
//   )
// }

import React, { useState } from 'react'
import { Modal } from '../../../Components/Modal/Modal';
import http from '../../../Services/Services';
// import styles from "./AddCustomer.module.scss"
import styles from "./PlaceOrder.module.scss"
export const PlaceOrder = ({toggleModal,modal,Page}:any) => {
const [data,setData]=useState({name:"",email:"",shippingAddress:"",state:""})

    async function submitForm(e:any)
      {
        e.preventDefault();
        try{
          const response=await http.post("customer/",{
            name:data.name,
            email:data.email,
            shippingAddress:data.shippingAddress,
            state:data.state,
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
    <div className={styles.form}>
    <Modal modal={modal} setModal={toggleModal} Page={Page}/>
    <div className={styles.clerk}>
  <h1 className={styles.heading}>PlaceOrder</h1>
          <form onSubmit={(e)=>submitForm(e)}>
            <table className={styles.table} >
          <div className={styles.AddCustomers}>
            <div className={styles.details}>
              <div className={styles["col-25"]}>
            <label htmlFor="name">Name</label>
            </div>
            <input
            type="text"
            name="name"
            value={data.name}
            id="name"
            onChange={(e)=>handleOnChange(e)}
            required />
            </div>
            
            <div className={styles.details}>
            <div className={styles["col-25"]}>
            <label htmlFor="email">email</label></div>
            <input type="text"
            name="email"
            value={data.email}
            id="email"
            onChange={(e)=>handleOnChange(e)}
            required/></div>
            
            <div className={styles.details}>
            <div className={styles["col-25"]}>
              <label htmlFor="shippingAddress">
                shippingAddress</label> 
            </div>
            <div className={styles["col-75"]}>
            <input type="text"
            name="shippingAddress"
            value={data.shippingAddress}
            id="shippingAddress"
            onChange={(e)=>handleOnChange(e)}
            required/>
            </div>
            </div>
            <div className={styles.details}>
            <div className={styles["col-25"]}>
            <label htmlFor="state">State</label>
            </div>
            <div className={styles["col-75"]}>
            <input type="text"
            name="state"
            value={data.state}
            id="state"
            onChange={(e)=>handleOnChange(e)}
            required/>
          </div>
            </div>
            <button>Submit</button>
          </div>
          </table>
         </form>
         </div>
    </div>
  )
}

