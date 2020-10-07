const express = require('express') ;
const PORT = process.env.PORT || 3001;
const app = express();
const sqlite3 = require("sqlite3").verbose();


const db = new sqlite3.Database("./db/election.db",err => {  

    if(err) return console.error(err);

    console.log("Connected to the election database");
})


app.use(express.urlencoded({extended:false}));
app.use(express.json());

db.all("SELECT * FROM candidates",(err,rows)=>{

    console.log(rows);
}


)
app.use((req, res) => {
    res.status(404).end();
  });




app.get("/",(req,res)=> {res.json({message:"hello world!"});})


db.on("open",()=> {

app.listen(PORT,() => {console.log(`server running on port ${PORT}`);})

})
