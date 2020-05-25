const fs=require('fs')
const chalk=require('chalk')
const getNotes = ()=>{
    return 'This is my notes..'
}

const addNote=(title,body)=>{
    const notes=loadNotes()
    //const duplicateNotes=notes.filter((note)=> note.title==title)
    const duplicateNote=notes.find((note)=>note.title==title)
    if(!duplicateNote){

        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('New note is added!')
    }
    else{
        console.log('Note title is already taken!')
    }
   

}

const saveNotes = (notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e)
    {
        return []
    }
    
}

//Removing a note
const removeNote=(title)=>{
    const notes=loadNotes()
    const notesToKeep=notes.filter((note)=>note.title !==title)
    if(notes.length> notesToKeep.length){

        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
        
    }
    else{
        console.log(chalk.red.inverse('No note found!'))
    }
   

}

//Listing notes
const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.bold.underline.green.inverse('Your notes'))
    notes.forEach((note) => {
        console.log(note.title)
        
    });

}

//Reading notes
const readNote=(title)=>{
    const notes=loadNotes()
    const noteToRead=notes.find((note)=>note.title==title)
    if(!noteToRead){
        console.log(chalk.inverse.red('No note found!'))
    }
    else{
        console.log(chalk.bold.inverse.green(noteToRead.title))
        console.log(noteToRead.body)
    }
    
   

}

module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}