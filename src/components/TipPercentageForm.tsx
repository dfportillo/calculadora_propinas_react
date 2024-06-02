import { tipOptions } from "../data/tipOptions";

type TipPercentageForm = {
    setTip : React.Dispatch<React.SetStateAction<number>>;
    tip: number;
}

export default function TipPercentageForm({setTip,tip}:TipPercentageForm) {
    return (
        <>
            <h3 className=" text-2xl font-black">porcentaje propina:</h3>
            <form className=" mt-2">
                {tipOptions.map(tipOption =>( 
                    <div className=" flex gap-1 align-middle" key={tipOption.id}>
                        <label htmlFor={tipOption.id} >{tipOption.label}</label>
                        <input 
                            type="radio" 
                            name="tip" 
                            id={tipOption.id} 
                            value={tipOption.value}
                            onChange={(e) => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                            />
                    </div>
                ))}
            </form>
        </>
    );
};
