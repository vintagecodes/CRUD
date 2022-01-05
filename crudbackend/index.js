const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app=express();




// Conneting to mongodb

mongoose.connect("mongodb://localhost:27017/pms",{useUnifiedTopology:true, useNewUrlParser:true},()=>{
    console.log("Connected to mongodb");
})

// Schema for products collection

let productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    color:String,
    desc:String,
    category:String,
    rating:Number
});

// To connect Schema in the mongodb we have to use Model

let productModel=new mongoose.model('products',productSchema);



// use of middleware to convert unreadable data to readable data
app.use(express.json());
app.use(cors());


app.get('/getdata',(req,res)=>{
    res.send({
        "name":"ritik",
        "id":12000
    })
})

app.get('/products', async (req,res)=>{
    let products = await productModel.find();
    res.send(products);
})

app.post("/products",(req,res)=>{
    let product = req.body;
    let proObj = new productModel(product);
    proObj.save();
    console.log(proObj);
    res.send({message:"Product Created",product:proObj});
})

//localhost:3000

app.delete("/products/:id", async (req,res)=>{
    await productModel.deleteOne({"_id":req.params.id});
    res.send({message:"Product Deleted"});
});

// update the products

app.put("/products/:id", async (req,res)=>{
    const id = req.params.id;
    const data = req.body;

    await productModel.updateOne({"_id":id},{$set:data});
    res.send("product updated");

})











// creating a server

app.listen(9000,()=>{
    console.log("server started");
});