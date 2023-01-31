import { useContext } from "react";
import { AdminContext } from "../../../Pages/Admin/Admin";
import {
  Customers,
  CustomersContext,
} from "../../../Pages/Admin/Customers/Customers";
import { Delete } from "../../../Pages/Admin/Users/Delete/Delete";
import { Button } from "../../Button/Button";
import styles from "./TableRow.module.scss";
export const TableRow = ({
  item,
  column,
  buttonText1,
  buttonText2,
  JSXElement1,
  JSXElement2,
  url
}: any) => {
  let { modal, setModal, page, setPage, setId,setUrl} = useContext(AdminContext);

  function setOnclick(modal: any, JSXElement1?: any, id?: any,url?:any) {
    setModal(!modal);
    console.log(JSXElement1)
    setPage(<JSXElement1 id={id} url={url}/>)
    setId(id);
    setUrl(url)
  }
  console.log(modal);
  console.log(item._id);
  return (
    <>
      <tr>
        {column.map((columnItem: any, index: any) => {
          if (columnItem.value.includes(".")) {
            const itemSplit = columnItem.value.split(".");
            return (
              <>
                <td>{item[itemSplit[0]][itemSplit[1]]}</td>
              </>
            );
          } else {
            return (
              <>
                <td>{item[`${columnItem.value}`]}</td>
              </>
            );
          }
        })}
        <td>
          <Button 
          id={item._id}
          buttonText={buttonText1}
          onClick={() => setOnclick(modal,JSXElement2,item._id,url)} 
          />
          <Button
            id={item._id}
            onClick={() => setOnclick(modal,JSXElement1,item._id,url)}
            buttonText={buttonText2}
          />
        </td>
      </tr>
    </>
  );
};
