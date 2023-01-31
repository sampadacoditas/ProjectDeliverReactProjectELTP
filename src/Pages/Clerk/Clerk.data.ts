import { PlaceOrder } from "./PlaceOrder/PlaceOrder"
import {OrderStatus} from "./OrderStatus/OrderStatus"
export const routes:{[key:string]:()=>JSX.Element}=
{
    // @ts-ignore
    PlaceOrder: "PlaceOrder",
      // @ts-ignore
    OrderStatus:"OrderStatus"
}