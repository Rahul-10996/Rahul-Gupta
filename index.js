// const{
//     sum:add,
//     subtract:sub,
//     multiply:mul
// }=require("./solution.js");
// import{
//     sum as add,
//     subtract as sub,
//     multiply as mul
// }from "./solution.js"
// console.log(add(4,5));
// console.log(sub(4,5));
// console.log(mul(3,5));
import express from "express";
const app=express();
app.get("/",(req,res)=>{
    res.send("hello world rahul");
});
app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
})