// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { routes } from "../Admin/Admin.data";

// export const MainRouters = ({ array }: any) => {
//   return (
//     <Routes>
//       {array.map((route: any) => {
//         const path = route.path;
//         const Element = route.component;
//         return (
//           <Route path={path} element={<Element />}>
//             {route.children
//               ? route.children.map((e: any) => {
//                   const path = e.path;
//                   const Element = e.component;
//                   return (
//                     <Route path={path} element={<Element />}>
//                       {e.children
//                         ? e.children.map((e: any) => {
//                             const path = e.path;
//                             const Element = e.component;
//                             return (
//                               <Route path={path} element={<Element />}></Route>
//                             );
//                           })
//                         : null}
//                     </Route>
//                   );
//                 })
//               : null}
//           </Route>
//         );
//       })}
//     </Routes>
//   );
// };



import { Route, Routes } from "react-router-dom";
 export const MainRouters  = ({ array }: any) => {
  const recursiveRoutes = (routes: any) => {
    return (
      <>
        {routes.map((route: any) => {
          const path = route.path;
          const Element = route.component;
          return (
            <Route  path={path} element={<Element />}>
              {route.children ? recursiveRoutes(route.children) : <></>}
            </Route>
          );
        })}
      </>
    );
  };
  
  return (
    <>
    <Routes>
        {array.map((route: any) => {
          const path = route.path;
          const Element = route.component;
          return (
            <Route path={path} element={<Element />}>
              {route.children
                ? recursiveRoutes(route.children) : <></>}
            </Route>
          );
        })}
      </Routes>
    </>
  );
};
