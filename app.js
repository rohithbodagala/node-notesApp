const notes=require('./notes.js')
const chalk=require('chalk')
const yargs=require('yargs')
const { listNotes } = require('./notes.js')
 
//Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type : 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }

})

//Create remove commands
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }

})

//Create list command
yargs.command({
    command:'list',
    describe:'List notes',
    handler(){
        notes.listNotes()
    }

})

//Create read command
yargs.command({
    command:'read',
    describe:'Reading a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }

})

yargs.parse()