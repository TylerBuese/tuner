import { useState } from "react";
import TuningMap from "../Helpers/TuningMap"

export default function TuningBlock(props) {
    let tuning = "";
    
    //for (let i = 0; props[0].length;)
    tuning += props[0]
    if (props[1] != null) {
        tuning += props[1]
    }
        
    
    console.log(props[0])

    const [string, setString] = useState({
        stringTuning: tuning
    })

    const setSingleStringUp = () => {
        let notes = TuningMap.GetNotes();
        let nextNote = TuningMap.GetNextNote(tuning, 1);
        console.log(nextNote)
        props.newTuning(nextNote, props.index, 1)
    }

    const setSingleStringDown = (string, index) => {
        
        let nextNote = TuningMap.GetNextNote(tuning, -1);
        console.log(nextNote)
        props.newTuning(nextNote, props.index, -1)
    }    
    
    return (
        <>
        
        <button onClick={setSingleStringUp}>up</button>
            <div className="block p-6 w-24 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <span>{tuning}</span>
            </div>
        <button onClick={setSingleStringDown}>down</button>
        
        </>
    )
}