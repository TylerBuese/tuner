import TuningMap from "../Helpers/TuningMap"
import { useEffect, useState } from "react";
import TuningBlock from "./TuningBlock";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

export default function Tuner(props) {
    const [tuning, setTuning] = useState(TuningMap.GetTuningMap(6))
    
    const adjustTuning = (event) => {
        console.log(event.target.value)
        setTuning(TuningMap.GetTuningMap(parseInt(event.target.value)))
    }

    const stepDown = () => {
        setTuning(TuningMap.GoUpOrDownAStep(-1, tuning))
    }

    const stepUp = () => {
        setTuning(TuningMap.GoUpOrDownAStep(1, tuning))
    }

    const setNewTuning = (newString, indexOfString, direction) => {
        console.log("next tuning " + newString + "index " + indexOfString)
        setTuning(TuningMap.SetTuningByIndex(tuning, direction, indexOfString));
    }

    return(
        <>

        <div className="p-5">
            <button onClick={stepUp}>
                Whole step up
            </button>
            <div className={"container flex grid-cols-" + tuning.length + " gap-5 content-start"}>
                {
                    tuning.map((t, j) => <TuningBlock {...t} index={j} newTuning={setNewTuning}/>)
                }
            </div>
            <button onClick={stepDown}>
                Whole step down
            </button>
        </div>
        <form>
            <label>Input number of strings</label>
            <input type="number" onChange={adjustTuning}/>
        </form>
        </>
    )
}