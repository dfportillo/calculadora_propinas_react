import { useMemo } from "react";
import { OrderProps } from "../types";
import { formatCuerrency } from "../helpers";


export default function OrderTotals ({order}:OrderProps) {

    const subTotalAmunt = useMemo(() => order.reduce((total,item) => total+(item.price*item.quantity),0),[order]);
    const propina = subTotalAmunt*0.1;
    const total = subTotalAmunt + propina;

    return(
        <>
            <div className=" space-y-2">
                <h2 className=" font-black text-2xl">totales y propina: </h2>
                <p>sub total a pagar:
                    <span className=" font-bold"> {formatCuerrency(subTotalAmunt)}</span>
                </p>

                <p>propina:
                    <span className=" font-bold"> {formatCuerrency(propina)}</span>
                </p>

                <p>total a pagar:
                    <span className=" font-bold"> {formatCuerrency(total)}</span>
                </p>
            </div>
            <button>

            </button>
        </>
    )
}