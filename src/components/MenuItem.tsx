import { MenuItems } from "../types";

type MenuItemsPros = {
    item: MenuItems; 
};

export default function MenuItem({item} : MenuItemsPros) {


    return (
        <>
            <button className=" border-teal-400 border-2 w-full hover:bg-teal-200 p-3 flex flex-row justify-between">
                <p>{item.name}</p>
                <p className=" font-black">${item.price}</p>
            </button>
        </>
    )
}
