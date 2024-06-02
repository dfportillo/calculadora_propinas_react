import { tipOptions } from "../data/tipOptions";

type TipPercentageForm = {
    setTip : React.Dispatch<React.SetStateAction<number>>;
}

export default function TipPercentageForm({setTip}:TipPercentageForm) {
    return (
        <>
            <h3 className=" text-2xl font-black">porcentaje propina:</h3>
            <form className=" mt-2">
                {tipOptions.map(tip =>( 
                    <div className=" flex gap-1 align-middle" key={tip.id}>
                        <label htmlFor={tip.id} >{tip.label}</label>
                        <input 
                            type="radio" 
                            name="tip" 
                            id={tip.id} 
                            value={tip.value}
                            onChange={(e) => setTip(+e.target.value)} />
                    </div>
                ))}
            </form>
        </>
    );
};
