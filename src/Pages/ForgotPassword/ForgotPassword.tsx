import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { http } from "../../Services/Services";
import http from "../../Services/Services";
import styles from "./ForgotPassword.module.scss";
export const ForgotPassword = () => {
  const [email, setEmail] = useState<any>();
  async function submitForm(e: any) {
    e.preventDefault();
    try {
      let storeEntry = { email: email };
      console.log(storeEntry)
      const response = await http.post("auth/forgot-password", storeEntry);
      console.log(response)
    } catch (e) {
      console.log(e);
    }
  }
  // function handleOnChange(e: any) {
  //   const newData = { ...data };
  //   // @ts-ignore
  //   newData[e.target.name] = e.target.value;
  //   setData(newData);
  //   console.log(newData);
  // }
  return (
    // <div className={styles.forgotPassword}>
    //   <div className={styles.form}>
    //     <form onSubmit={(e) => submitForm(e)}>
    //       <div className={styles.AddCustomers}>
    //         <label htmlFor="email">email</label>
    //         <input 
    //           type="text"
    //           name="email"
    //           value={data.email}
    //           id="email"
    //           onChange={(e) => handleOnChange(e)}
    //           className={styles.input}
    //           required

    //         />
    //         <button className={styles.button}>Submit</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className={styles.loginContainer}>
      <div className={styles.center}>
      <h1>Enter Your Email</h1>
        <form className={styles.loginForm} onSubmit={submitForm}>
          <div className={styles["text-field"]}>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span></span>
          <label htmlFor="email">Email</label>
          </div>
         
         <input type="submit" value="submit"/>
        </form>
      </div>
     </div>
  );
};


