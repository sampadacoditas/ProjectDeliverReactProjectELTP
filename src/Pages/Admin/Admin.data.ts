import { Customers } from "./Customers/Customers";
import { Furnace } from "./Furnace/Furnace";
import { HsnCode } from "./HsnCode/HsnCode";
import { Material } from "./Material/Material";
import { PurchaseRequest } from "./PurchaseRequest/PurchaseRequest";
import { Storages } from "./Storages/Storages";
import {Users} from "./Users/Users";
// import { Users } from "./Users/Users";

export const routes:{[key:string]:()=>JSX.Element}={
    "Customers":Customers,
    "HsnCode":HsnCode,
    "Furnace":Furnace,
    "Material":Material,
    "Storages":Storages,
    "PurchaseRequest":PurchaseRequest,
    // "Users":Users  
}
 