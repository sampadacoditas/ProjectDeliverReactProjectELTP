// import React, { useState } from 'react'
// import { Modal } from '../../../Components/Modal/Modal'
// import http from '../../../Services/Services'
// // import { http } from '../../../Services/Services';
// import styles from "./AdminProfile.module.scss"
// export const AdminProfile = () => {
//     const [data,setData]=useState({name:"",email:"",address:"",state:""})
//     const [modal, setModal] = useState(false);
//      const [page, setPage] = useState();
//      function toggleModal(buttonText: any, id?: any) {
//       setModal(!modal);
//       setPage(buttonText);
//     }
//     console.log(page);
//     async function submitForm(e:any)
//       {
//         e.preventDefault();
//         try{
//           const response=await http.get("material/")
//           console.log(response)
//         }
//         catch(e){
//           console.log(e)
//         }
//       }
//       function handleOnChange(e:any)
//       {
//         const newData={...data};
//         // @ts-ignore
//         newData[e.target.name]=e.target.value;
//         setData(newData)
//         console.log(newData)
//       }
//   return (
//     <>
//     {/* <Modal modal={modal} setModal={toggleModal} Page={Page}/> */}
//   <h4 className={styles.heading}>Profile</h4>
//           <form onSubmit={(e)=>submitForm(e)}>
//           <div className={styles.AdminProfile}>
//             <label htmlFor="name">Name</label>
//             <input 
//             type="text" 
//             name="name" 
//             value={data.name}
//             id="name"
//             onChange={(e)=>handleOnChange(e)}
//             required />
//             <label htmlFor="email">email</label>
//             <input type="text" 
//             name="email" 
//             value={data.email} 
//             id="email"
//             onChange={(e)=>handleOnChange(e)}
//             required/>
//              <label htmlFor="address">Address</label>
//             <input type="text" 
//             name="address" 
//             value={data.address} 
//             id="address"
//             onChange={(e)=>handleOnChange(e)}
//             required/>
//             <label htmlFor="state">State</label>
//             <input type="text" 
//             name="state" 
//             value={data.state} 
//             id="state"
//             onChange={(e)=>handleOnChange(e)}
//             required/>
//             <button>Submit</button>
//           </div> 
//          </form> 
//     </>
//   )
// }


import React, { useContext, useState } from "react";
// import { Button } from "../Button/Button";
import styles from "./AdminProfile.module.scss"
import { CgProfile } from "react-icons/cg";
import { Button } from "../../../Components/Button/Button";
import { Modal } from "../../../Components/Modal/Modal";
// import { ResetPassword } from "../ResetPassword/ResetPassword";
// import { Modal } from "../Modal/Modal";
// import { AdminContext } from "../../Pages/Admin/Admin";
export const AdminProfile = () => {
  const [data,setData]=useState();
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState();
  function toggleModal(buttonText: any, id?: any) {
    setModal(!modal);
    setPage(buttonText);
  }
  
  return (
    <>
    <div>
      <div className={styles.icon}>
        <CgProfile />
      </div>
      <div className={styles.ProfileDetails}>
        <div className={styles.Profile}>
          Name:sampada Email:Sftfsxf2gmail.com Address:parvati nagar
          contact:123456789
        </div>
      </div>
      <div className={styles.Button}>
        <Button 
        buttonText={"Reset Password"}
        // onClick={()=>toggleModal(<ResetPassword/>)}
        />
        {/* <Button buttonText={"Close"} /> */}
      </div>
      </div>
      <div className={styles.ResetPassword}>
      {modal && <Modal modal={modal} setModal={toggleModal} Page={page}/>}
      </div>
    </>
  );
};
