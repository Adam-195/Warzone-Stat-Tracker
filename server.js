import express from "express";
import sqlite3 from "sqlite3";

const app = express();
const port = 8383;

const db = new sqlite3.Database("tracker.db", sqlite3.OPEN_READWRITE);
const sql = 'INSERT INTO matches(elims,kills,death,placement) VALUES (?,?,?,?)';

app.use(express.static('www'))
app.use(express.json())


app.get('/', (req, res) => {
    res.status(200)
})

app.post('/', (req, res) => {
    const { elims } = req.body
    res.status(200).send()


})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



