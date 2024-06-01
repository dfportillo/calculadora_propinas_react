import { OrderItem } from "../types";

type OrderContentsProps = {
    order:OrderItem[];
};

export default function OrderContents({order}:OrderContentsProps) {
    return (
        <>
            <h1 className=" font-black text-4xl">consumo</h1>
            <div className=" mt-4 space-y-3">
                { order.length === 0 ? 
                    <p className=" text-center text-sm"> la orden esta vacia </p>                
                :(
                    order.map(item =>(
                        <div key={item.id}>
                            {item.name}
                        </div>
                    ))
                )}
            </div>
        </>
    )
}
