import { useState } from "react";
import { MenuItems,OrderItem } from "../types";



export default function useOrders (){
    const[order,setOrder] = useState<OrderItem[]>([]);

    const addItem = (item:MenuItems) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id);

        if(itemExist){
            const orderUpdateQuantity = order.map(orderItem => orderItem.id === item.id ?{...orderItem, quantity:orderItem.quantity+1} : orderItem);

            setOrder(orderUpdateQuantity);

        }else{
            const newItem = {...item,quantity:1};
            setOrder([...order,newItem]);
        }

    };

    return{
        order,
        addItem
    };
};