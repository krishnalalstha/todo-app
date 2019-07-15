const fs = require('fs')

const getNotes = () => {
    return "Here is my Notes"
}

const addNote =  (title, body) =>{
    const notes = loadNotes()
    var duplicateNotes = notes.find((note) = note.title === title)
    debugger
    if (!duplicateNotes) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    } else {
        console.log("Notes Already taken")
    }


}

const listNote = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    var note = notes.find((note) = note.title === title)
    if (note === undefined) {
        console.log("No Note found")
    } else {
        console.log(`${note.title} ${note.body}`)
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('note.json', dataJson)
    console.log("Note successfuly taken")
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('note.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (error) {
        return []
    }
}

module.exports = {
    getNote: getNotes,
    addNote: addNote,
    listNote: listNote,
    readNote: readNote
}; 