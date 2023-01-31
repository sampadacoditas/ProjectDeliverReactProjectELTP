
import styles from '../Table/Table.module.scss'
import { TableHeadItem } from "./TableHeadItem/TableHeadItem"
import { TableRow } from './TableRow/TableRow'
const Table = ({ data, column,buttonText1,buttonText2,JSXElement1,url,JSXElement2 }:any) => {
  console.log(data)
  
    return (
      <>
      {
        data && ( 
          <table className={styles.table}>
            <thead>
              <tr>
                {
                column.map((item:any, index:any) =>
                <>
                 <TableHeadItem item={item} />
                </>
                )
                }
              </tr>
            </thead>
            <tbody>            
              {data.map((item:any, index:any) => 
              <TableRow item={item} 
              column={column} 
              buttonText1={buttonText1} 
              buttonText2={buttonText2} 
              JSXElement1={JSXElement1}
              JSXElement2={JSXElement2}
              url={url}
              />)}
            </tbody>
          </table>
        )
      }
      </>
    )
  }
 
  export default Table