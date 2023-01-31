import { createContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { Header } from "../../Components/Headers/Header";
import styles from "./Admin.module.scss";
import {RoutesData} from "../Routes/Routes"
import { Modal } from "../../Components/Modal/Modal";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import http from "../../Services/Services";
import { MainRouters } from "../MainRouters/MainRouters";
import { AdminProfile } from "./AdminProfile/AdminProfile";
import { FaUsers } from "react-icons/fa";
import {GoGraph} from "react-icons/go"
import {SiMaterialdesignicons} from "react-icons/si"
import {GiFurnace} from "react-icons/gi"
import {TiCloudStorage} from "react-icons/ti"
export const AdminContext=createContext<any>({})
export const Admin = () => {
  const [data,setData]=useState();
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState();
  const [id,setId]=useState();
  const [url,setUrl]=useState();
  function toggleModal(buttonText: any, id?: any) {
    setModal(!modal);
    setPage(buttonText);
  }
  
  useEffect(() => {
    async function getData()
    {
      try {
        let response = await http.get("users");
        console.log(response)
        setData(response)
      } catch (e) {
        console.log("error", e);
      }
    }
    getData()
  }, []);

  return (
    <AdminContext.Provider value={{modal,setModal,page,setPage,id,setId,setUrl}}>
      <div className={styles.admin}>   
      <Header />
      <div className={styles.searchBar}>
        <SearchBar placeholder="Search" data={data}/>
        </div>
      <div className={styles.headerButton}>
        <span>Admin Dashboard </span>
        <Button buttonText="Logout" />
        <Button buttonText={"Profile"} onClick={()=>toggleModal(<AdminProfile/>)}/>
        {modal && <Modal modal={modal} setModal={toggleModal} Page={page} />}
      </div>
      <div className={styles.sideBarButtons}>
        <ul className={styles.unorderedList}>
          <div className={styles.Link}>
            <li><Link to="/admin/customers"><FaUsers/>Customers</Link></li>
            <li><Link to="/admin/reports"><GoGraph/>Reports</Link></li>
            <li><Link to="/admin/users"><FaUsers/>Users</Link></li>
            <li><Link to="/admin/material"><SiMaterialdesignicons/>Material</Link></li>
            <li><Link to="/admin/furnace"><GiFurnace/>Furnace</Link></li>
            <li><Link to="/admin/storages"><TiCloudStorage/>Storage</Link></li>
            <li><Link to="/admin/purchaseRequest">PurchaseRequest</Link></li>
            </div>
        </ul>
      </div>
      <main className={styles.main}>
        <Outlet/>
      </main>
    </div>
    </AdminContext.Provider>
   

   
    
  );
};
