import { AddCustomers } from "../Admin/Customers/AddCustomers";
import { Customers } from "../Admin/Customers/Customers";
import { Furnace } from "../Admin/Furnace/Furnace";
import { HsnCode } from "../Admin/HsnCode/HsnCode";
import { Material } from "../Admin/Material/Material";
import { PurchaseRequest } from "../Admin/PurchaseRequest/PurchaseRequest";
import { Storages } from "../Admin/Storages/Storages";

import { Accountant } from "../Accountant/Accountant";
import { Admin } from "../Admin/Admin";
import { Clerk } from "../Clerk/Clerk";
import { Login } from "../Login/Login";
import { Reports } from "../Admin/Reports/Reports";
import {Users} from "../Admin/Users/Users";
import { profile } from "console";
import { AdminProfile } from "../Admin/AdminProfile/AdminProfile";
import { ForgotPassword } from "../ForgotPassword/ForgotPassword";
import { Delete } from "../../Components/Delete/Delete";
import { AddMaterial } from "../Admin/Material/AddMaterial/AddMaterial";
import { AddStorage } from "../Admin/Storages/AddStorage";
import { InProduction } from "../Clerk/InProduction/InProduction";
import { PlaceOrder } from "../Clerk/PlaceOrder/PlaceOrder";

export const RoutesData = [
  {
    path: "/",
    component: Login
  },
  {
    path:"/forgotPassword",
    component:ForgotPassword

  },
  {
    path: "/admin",
    component: Admin,
    children: [
      {
        path: "customers",
        component: Customers,
        children: [
          {
            path: "addcustomers",
            component: AddCustomers,
          },
          {
            path:"delete",
            component:Delete
          }
        ]
      },
      {
        path:"profile",
        component:AdminProfile,
      },
      {
        path: "users",
        component: Users,
      },
      {
        path: "storages",
        component: Storages,
        children:[{
          path:"addStorage",
          component: AddStorage,
        }]
      },
      {
        path: "purchaseRequest",
        component: PurchaseRequest,
      },
      {
        path: "furnace",
        component: Furnace,
      },
      {
        path: "material",
        component: Material,
        children: [
          {
            path: "addMaterial",
            component: AddMaterial,
          },]
      },
      {
        path: "hsnCode",
        component: HsnCode,
      },
      {
        path:"reports",
        component:Reports
      }
    ],
  },
  {
    path: "/clerk",
    component: Clerk,
    children:[
      {
        path: "placeOrder",
        component: PlaceOrder,
      }
    ]
  },
  {
    path: "/accountant",
    component: Accountant,
  },
];
