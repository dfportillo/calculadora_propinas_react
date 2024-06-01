import { MenuItems } from "../types";

type MenuItemsPros = {
    item: MenuItems;
    addItem:(item:MenuItems) => void; // "?" puedo pasar o no el dato    
};

export default function MenuItem({item,addItem} : MenuItemsPros) {


    return (
        <>
            <button className=" border-teal-400 border-2 w-full hover:bg-teal-200 p-3 flex flex-row justify-between" onClick= {() => addItem(item)}>
                <p>{item.name}</p>
                <p className=" font-black">${item.price}</p>
            </button>
        </>
    )
}
