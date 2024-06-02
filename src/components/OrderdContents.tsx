import { formatCuerrency } from "../helpers";
import { MenuItems,OrderProps } from "../types";

type OrderContentsProps = OrderProps & {
    removeItem:(id:MenuItems['id']) => void;
};

export default function OrderContents({order,removeItem}:OrderContentsProps) {
    return (
        <>
            <h1 className=" font-black text-4xl">Consumo</h1>
            <div className=" mt-4">
                { 
                    order.map(item =>(
                        <div key={item.id}
                            className=" flex flex-row justify-between items-center border-b-2 p-2 hover:bg-teal-200 hover:border-teal-400 hover:rounded-md "
                        >
                            <div>
                                <p className=" text-lg">
                                    {item.name} - {formatCuerrency(item.price)}
                                </p>
                                <p className=" text-lg font-black">
                                    Cantidad: {item.quantity} - {formatCuerrency(item.quantity * item.price)}
                                </p>
                            </div>

                            <button className=" w-6 h-6 bg-red-700 rounded-full text-center text-sm font-black text-white" onClick={() => removeItem(item.id)}>
                                X
                            </button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
