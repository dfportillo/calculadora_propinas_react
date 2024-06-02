import { formatCuerrency } from "../helpers";

type OrderTotalProps ={
    subTotalAmount:number;
    propina:number;
    total:number;
    placeOrder:() => void
}


export default function OrderTotals ({subTotalAmount,propina,total,placeOrder}:OrderTotalProps) {


    return(
        <>
            <div className=" space-y-2">
                <h2 className=" font-black text-2xl">totales y propina: </h2>
                <p>sub total a pagar:
                    <span className=" font-bold"> {formatCuerrency(subTotalAmount)}</span>
                </p>

                <p>propina:
                    <span className=" font-bold"> {formatCuerrency(propina)}</span>
                </p>

                <p>total a pagar:
                    <span className=" font-bold"> {formatCuerrency(total)}</span>
                </p>
            </div>
            <button 
            className=" w-full p-5 mt-4 text-white bg-black font-black disabled:bg-gray-400 rounded-md" 
            disabled={total === 0}
            onClick={() => placeOrder()}>
                Guardar Orden
            </button>
        </>
    )
}