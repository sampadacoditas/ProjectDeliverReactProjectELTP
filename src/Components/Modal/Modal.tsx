
import {AddCustomers} from "../../Pages/Admin/Customers/AddCustomers";
import { AdminProfile } from "../../Pages/Admin/AdminProfile/AdminProfile";
import styles from "./Modal.module.scss";
import { IModal } from "./Modal.types";
import { Outlet } from "react-router/dist/lib/components";
export const Modal = ({modal,setModal,Page,id,url}:IModal) => {
    function toggleModal()
    {
      console.log(modal)
      setModal(!modal)
    }
    console.log(Page,id)
  return (
    <>
    {
      modal &&
      <div className={styles.modalBackground}>
      <div className={styles.overlay}>
        <div className={styles["modal-content"]}>
          {
            Page
          }
          <button className={styles["close-btn"]} onClick={toggleModal}>X</button>
        </div>
      </div>
    </div>
    }
    
    </>
  );
};
