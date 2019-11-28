const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
var contents = fs.readFileSync("./db/db.json");
var jsonContent = JSON.parse(contents);
const router = express.Router();


router.get('/api/notes',(req, res) => {
    res.send(jsonContent);
    
});


router.post('/api/notes', (req, res) => {
    
    let newNote = req.body;
    newNote.id = Date.now();
    jsonContent.push(newNote);
    console.log( `[post]`, jsonContent );
    fs.writeFileSync("./db/db.json",JSON.stringify(jsonContent));

    res.send(jsonContent);
    
});

router.delete('/api/notes/:id', (req,res) => {
    // splice teh line of the note to delete out
    jsonContent = jsonContent.filter( row=> row.id != req.params.id );
    fs.writeFileSync("./db/db.json",JSON.stringify(jsonContent));
    console.log( `[delete] id=${req.params.id} reminaing content:`, jsonContent );

    res.send(jsonContent);
});


module.exports = router;