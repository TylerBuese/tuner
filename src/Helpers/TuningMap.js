import { isCompositeComponent } from "react-dom/test-utils";


function GetTuningMap(numberOfStrings) {
    const notes = GetNotes();
    switch (numberOfStrings) {
        case 4: return [
            "E",
            "A",
            "D",
            "G"
        ]
        case 6: return [
            "E",
            "A",
            "D",
            "G",
            "B",
            "E"
        ]

        case 7: return [
            "B",
            "E",
            "A",
            "D",
            "G",
            "B",
            "E"
        ]

        default: return [
            "E",
            "A",
            "D",
            "G",
            "B",
            "E"
        ]
    }
}

function GetNotes() {
    return ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
}

function GoUpAStep(currentTuning) {
    GoUpOrDownAStep(1, currentTuning);
}

function GoDownAStep(currentTuning) {
    GoUpOrDownAStep(-1, currentTuning);
}

function GetNextNote(currentNote, direction) {
    var noteIndex = GetNotes().findIndex(e => e == currentNote)
    var newNote = noteIndex + (direction * 1);
    if (newNote == 12) {
        return 0
    } else if (newNote == -1) {
        return 11
    } else {
        return newNote
    }
}

function SetStringUpOrDown(currentTuning, direction, indexOfString) {
    let newTuning = []
    let currentString = currentTuning[indexOfString]
    let nextNote = GetNextNote(currentString, direction)

}
//Takes -1 or 1 as parameter
function GoUpOrDownAStep(direction, currentTuning) {
    let notesArray = []
    currentTuning.forEach(tuning => {
        notesArray.push(GetNextNote(tuning, direction))
    });
    console.log(notesArray)

    let descriptiveNotesArray = []
    notesArray.forEach(note => {
        descriptiveNotesArray.push(GetNotes()[note])
    });

    return descriptiveNotesArray
}

function SetTuningByIndex(currentTuning, direction, index) {
    let notesArray = []
    for (let i = 0; i < currentTuning.length; i++) {
        if (i == index) {
            notesArray.push(GetNextNote(currentTuning[i], direction))
        } else {
            notesArray.push(GetNextNote(currentTuning[i], 0))
        }
    }

    console.log(notesArray)

    let descriptiveNotesArray = []
    notesArray.forEach(note => {
        descriptiveNotesArray.push(GetNotes()[note])
    });

    return descriptiveNotesArray
}

export default {GetTuningMap, GetNotes, GoUpOrDownAStep, GetNextNote, SetTuningByIndex}