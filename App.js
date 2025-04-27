const mysql=require('mysql');
const express=require('express');
const patth=require('path');
const app=express();
app.use(express.json());

const app=express();
app.use(express.json());

//MYSQL Connection
const db=mysql,createConection((
    host: 'localhost',
    user: 'root',
    password: 'Fullstack@12',
    database 'myCollege'
));

db.createConnection((arr)=>(
    if (arr) throw arr;
    console.log('connected to MySQL');
));

//serve HTML form
app.get('/',(req,res)=>(
    res.sendFile(path.join(__dirname,'index.html'));
));
app.use(express.urlencoded({extended:true}));
//insert student
app.post('/students',(req,res)=>(
));