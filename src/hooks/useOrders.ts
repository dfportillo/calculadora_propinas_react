import { useState,useMemo} from "react";
import { MenuItems,OrderItem } from "../types";



export default function useOrders (){
    const[order,setOrder] = useState<OrderItem[]>([]);
    const[tip,setTip] = useState(0);

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

    const removeItem = (id:MenuItems['id']) =>{ // lookUp para dar type a id
        setOrder(order.filter(itemRemove => itemRemove.id != id))
    }

    const subTotalAmount = useMemo(() => order.reduce((total,item) => total+(item.price*item.quantity),0),[order]);

    const propina = useMemo(() => subTotalAmount*tip , [tip,order] ) ;

    const total = useMemo(() => subTotalAmount + propina ,[order,tip]) ;

    const placeOrder = () =>{
        setOrder([]);
        setTip(0);
    };


    return{
        order,
        tip,
        addItem,
        removeItem,
        setTip,
        subTotalAmount,
        propina,
        total,
        placeOrder
    };
};