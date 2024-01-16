import express from "express";
const app = express();
const cors = require('cors');
import { emailController } from "./controller/emailController";
import  multer  from 'multer'; 

import dotenv from 'dotenv';
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const port = 8000;

dotenv.config();
app.use(cors());

// const storage = multer.memoryStorage();
// const upload = multer({storage: storage});





app.get('/', (req, res) => {
   
    
    res.send("hello world");
});


app.post('/sendmail',emailController)

app.listen(port, () => {
    return console.log("express server is running on ", port);
    
})