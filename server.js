const express = require('express') ;
const inputCheck = require('./utils/inputCheck');
const db = require('./db/database');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();





// Express middleware

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// user api routes
app.use('/api', apiRoutes);

app.get("/",(req,res)=> {res.json({message:"hello world!"});})



app.use((req, res) => {
   res.status(404).end();
 });


db.on("open",()=> {

app.listen(PORT,() => {console.log(`server running on port ${PORT}`);})

})

