
const button = document.getElementById("submit")
button.addEventListener("click", submit_button)

import sqlite3 from ".Warzone KD Tracker/node_modules/sqlite3lib\sqlite3.js";

const db = new sqlite3.Database("tracker.db", sqlite3.OPEN_READWRITE);
const sql = 'INSERT INTO matches(elims,kills,death,placement) VALUES (?,?,?,?)';

function submit_button() {

        
    const elims = document.getElementById("elims").value;
    const kills = document.getElementById("kills").value;
    const deaths = document.getElementById("deaths").value;
    const placement =  document.getElementById("placement").value;
    
    //if statements for data v

    if ((elims == '') || (kills == '') || (deaths == '') || (placement == '')) {

        console.log("Please Fill in the Fields");

    } else if ((elims > 99) || (kills > 99) || (deaths > 99)) {

        console.log("Numbers too big");


    } else { 
        // input data to DB - needs to be
        db.run(sql, 
            [elims, kills, deaths, placement], (err)=>{
            if (err) return console.error(err.message)
        }
        );


        db.close()

        // testing of input functionality
        console.log(elims)
        console.log(kills)
        console.log(deaths)
        console.log(placement)
    
    
    // clear values on click
        document.getElementById('elims').value = ''
        document.getElementById('kills').value = ''
        document.getElementById('deaths').value = ''
        document.getElementById('placement').value = ''


    }            
    }
    

    

