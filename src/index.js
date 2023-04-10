import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import addPractice from "./server/Examination";//а в Examination.js написати export default addPractice();
//import express from "express"

// const app = express()
// app.listen(8800, ()=>{
//     console.log("Connected to backend");
// })

// app.get("/", (req,res)=>{
//     res.json("hello");
// })

// app.get("/Examination", (req,res)=>{//для отримання екзаменів
// let e2=findAllExaminations();
// e2.then(function(result) {
//     console.log(result)
// }).then();
// })

// app.post("/Examination", (req,res)=>{//для створення екзаменів
//addPractice(2, true);
// })

const root = ReactDOM.createRoot(document.getElementById('root'));//цей root знаходться в index.html
root.render(<App />);//вставляємо App в root

