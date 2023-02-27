const express = require('express')
const bodyParser = require('body-parser')
let date = require(__dirname+"/data.js")
const app = express()
let items = ["Buy Food","Cook Food","Fast Food"];
let worklist = ["homework"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
let day = date.getDate()
app.get("/",function(req,res){
    res.render('list',{listitem:day,work: items})
})

app.post("/",function(req,res){
   var item= req.body.newItem;
   if(req.body.list === "worklist"){
    worklist.push(item);
    res.redirect("/work")
   }
   else{
    items.push(item);
    res.redirect("/")
  
   }
   console.log(req.body.list);
})

app.get("/work",function(req,res){
    res.render('list',{listitem:"worklist",work: worklist})
})
app.listen(3000,function(){
    console.log("server is started at 3000")
  })






























// const express =require("express");
// const bodyParser =require("body-parser");
// const date = require(__dirname + "/data.js")
// const app =express();
// var items = ["Buy Food","Cook Food","Fast Food"];
// let worklist=[];
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.static('public'))
// app.get("/",function(req,res){
//     var day = date.getDay();
//     res.render('list', {listitem: day,work:items});

// })
// app.post("/",function(req,res){
//         var item = req.body.newItem;
//         if(req.body.list === "work"){
//             worklist.push(item);
//             console.log(worklist[0])
//             res.redirect("/work")
//         }
//         else{
//             items.push(item);
//             res.redirect("/")
//         }
        
        
// })
// app.get("/work",function(req,res){
//     res.render('list',{listitem:"work list",work:worklist})
// })
// app.get("/about",function(req,res){
//     res.render('about');
// })
// app.listen(3000,function(){
//     console.log("server is running at port 3000");
// });