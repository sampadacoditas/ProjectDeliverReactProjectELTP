// import React, { useEffect, useState } from 'react'
// import http from '../../../../Services/Services';
// import { Users } from '../Users';
// import {Card} from "./Card"
// import { SearchArray } from "./SearchArray"

// export const PaginationUser = () => {
//     const [pageNumber,changePageNumber]=useState(1);
//     const [perPage, setPerPage] = useState(3);
//     const [pageCards, setPageCards] = useState(SearchArray.slice(0, perPage))
//     // const [getData,setData]=useState([])
//     useEffect(() => {
//         async function handleFetch()  {
//           try{
//           let data = await http.get(`user/?page=${pageNumber}&limit=${perPage}`);
//           console.log(data.data.user)
//           console.log(data.data.user.slice(0,perPage))
//         //   setData(data.data.user.slice(0,perPage))
//           }
//           catch(err:any)
//           {
//            console.log(err)
//           }
//         }
//         handleFetch()
//       }, [pageNumber,perPage]);
//       console.log(getData)
//     const handleNextPage = () => {
//         const shownCards = perPage*pageNumber
//          if(shownCards <= getData.length-1) {
//             setPageCards(getData.slice(shownCards, Math.min(getData.length, perPage+shownCards)))
//             changePageNumber(pageNumber+1)
//         }
//     }
//     const handlePrevPage = () => {
//         if(pageNumber === 1) {
//             return;
//         }
//         const shownCards = perPage*(pageNumber-2)
//         if(shownCards <= getData.length-1) {
//             setPageCards(getData.slice(shownCards, Math.min(getData.length, perPage+shownCards)))
//         }
//         changePageNumber(pageNumber-1)
//     }

//     const handlePerPageChange = (val: string) => {
//         const inputVal = Number(val)
//         setPerPage(inputVal)
//         changePageNumber(1)

//         const shownCards = 0
//         setPageCards(getData.slice(shownCards, Math.min(getData.length, inputVal)))
//     }

//   return (
//     <>
//     {
//         // getData?<Users getData={getData}/>:null
//     }
    
//     <div className='cardDiv'>
//     {
//     // pageCards.map((element, index)=>
//             // <Card
//             // key={index}
//             // // id={element.id}
//             // // name={element.name} 
//             // // adress={element.adress}
//             //  />  
//     // )
   
//     }
//     <input value={perPage} type="number" onChange={(e) => {
//         handlePerPageChange(e.target.value)
//     }}/>
//     <button className='displayPageNumber'>{pageNumber}</button>
//     <button className='previous-button' onClick={handlePrevPage}>{"previous-button"}</button>
//     <button className='next-button' onClick={handleNextPage}>{"next-button"}</button>
//     </div>
//     </>
//   )
// }


import React from 'react'

export const PaginationUser = () => {
  return (
    <div>PaginationUser</div>
  )
}
