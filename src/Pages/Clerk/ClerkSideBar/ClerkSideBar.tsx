import { createContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../../../Components/Button/Button";
import http from "../../../Services/Services";
// import styles from "./AdminSideBar.module.scss";
import { FaUsers } from "react-icons/fa";
import {CgProfile} from "react-icons/cg"
import { Profile } from "../../../Components/Profile/Profile";
import { Modal } from "../../../Components/Modal/Modal";
import styles from "./ClerkSideBar.module.scss"
export const AdminContext = createContext({});
export const ClerkSideBar = () => {
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState();
  function toggleModal(buttonText: any, id?: any) {
    setModal(!modal);
    setPage(buttonText);
  }
  return (
    <AdminContext.Provider value={{modal,toggleModal,page,setPage,setModal}}>
    <div className={styles.admin}>
      <div className={styles.sideBarButtons}>
        <ul className={styles.unorderedList}>
          <div className={styles.Link}>
          <li>
              <div className={styles.icons}>
                  <CgProfile />
                  <span onClick={()=>toggleModal(<Profile/>)}>Profile</span>
              </div>
            </li>
            <li>
              <div className={styles.icons}>
              <Link to="/clerk/placeOrder">
                  <FaUsers />
                  <span>PlaceOrder</span>
                </Link>
              </div>
            </li>
            {/* <li>
              <Link to="/admin/eventsAndPosts">Events and Posts</Link>
            </li>
            <li>
              <Link to="/admin/userDetails">User-Details</Link>
            </li> */}
          </div>
        </ul>
      </div>
      <main className={styles.main}>
        <Outlet />
        {modal && <Modal modal={modal} setModal={toggleModal} Page={page}/>}
      </main>
    </div>
    </AdminContext.Provider>
  );
};
