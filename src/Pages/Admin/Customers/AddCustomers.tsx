import React, { useState } from 'react'
import { Modal } from '../../../Components/Modal/Modal';
import http from '../../../Services/Services';
import styles from "./AddCustomer.module.scss"
export const AddCustomers = ({toggleModal,modal,Page}:any) => {
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
    <>
    <Modal modal={modal} setModal={toggleModal} Page={Page}/>
  <h1 className={styles.heading}>Add Customer</h1>
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
            <label htmlFor="email">email</label>
            <input type="text"
            name="email"
            value={data.email}
            id="email"
            onChange={(e)=>handleOnChange(e)}
            required/>
             <label htmlFor="shippingAddress">shippingAddress</label>
            <input type="text"
            name="shippingAddress"
            value={data.shippingAddress}
            id="shippingAddress"
            onChange={(e)=>handleOnChange(e)}
            required/>
            <label htmlFor="state">State</label>
            <input type="text"
            name="state"
            value={data.state}
            id="state"
            onChange={(e)=>handleOnChange(e)}
            required/>
            <button>Submit</button>
          </div>
         </form>
    </>
  )
}

// import { useState, useEffect } from "react";
// import { Modal } from "../../../Components/Modal/Modal";
// import http from "../../../Services/Services";
// import styles from "./AddCustomer.module.scss"
// import React, { useState } from 'react'
// import { Modal } from '../../../Components/Modal/Modal';
// import http from '../../../Services/Services';
// import styles from "./AddCustomer.module.scss"
// export const AddCustomers = ({toggleModal,modal,Page}:any) => {
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [shippingAddress, setShippingAddress] = useState("");
//   const [state, setState] = useState("");

//   const addCustomer = async () => {
//     try {
//       const data = {
//         name: customerName,
//         email: customerEmail,
//         shippingAddress: shippingAddress,
//         state: state,
//       };

//       const response = await http.post("customer/", data);
//       console.log(response);
//       console.log(data);
//     } catch (error: any) {
//       console.log("in a catch block");
//     }
//   };
//   return (
//     <>
//       <Modal modal={modal} setModal={toggleModal} Page={Page} />
//       <h1 className={styles.heading}>Add Customer</h1>
//       <form>
//         <div className={styles.AddCustomers}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={customerName}
//             id="name"
//             onChange={(e) => setCustomerName(e.target.value)}
//             required
//           />
//           <label htmlFor="email">email</label>
//           <input
//             type="text"
//             value={customerEmail}
//             id="email"
//             onChange={(e) => {setCustomerEmail(e.target.value);}}
//             required
//           />
//           <label htmlFor="shippingAddress">shippingAddress</label>
//           <input
//             type="text"
//             name="shippingAddress"
//             value={shippingAddress}
//             id="shippingAddress"
//             onChange={(e) => setShippingAddress(e.target.value)}
//             required
//           />
//           <label htmlFor="state">State</label>
//           <input
//             type="text"
//             name="state"
//             value={state}
//             id="state"
//             onChange={(e) => setState(e.target.value)}
//             required
//           />
//           <button onClick={addCustomer} >Add</button>
//         </div>
//       </form>
//     </>
//   );
// };

