import { useState } from "react";
import { MenuItems } from "../types";

type OrderItem = MenuItems &{
    quantity:number;
}


export default function useOrders (){
    const[order,setOrder] = useState<OrderItem[]>([]);

    return{

    }
}