import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../Components/Button/Button';
import { Header } from '../../Components/Headers/Header'
import { routes } from './Clerk.data';
import styles from "./Clerk.module.scss"
import { ClerkSideBar } from './ClerkSideBar/ClerkSideBar';
export const Clerk = () => {

  const [page,setPage]=useState("PlaceOrder");
  const onNavigate=(page:string)=>
  {
    setPage(page);
    console.log(page)
  }
  const Page=routes[page]
  return (
        <>
        <div className={styles.clerk}>
            <Header/>
            <ClerkSideBar/>
        </div>
        <main>
          <Page/>
        </main>
           
        </>
   
  )
}
