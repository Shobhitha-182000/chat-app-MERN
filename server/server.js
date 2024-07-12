 const express=require('express');
const app=express();
const socketIo=require('socket.io')
const http=require('http')
const mongoose=require('mongoose');
const { Socket } = require('engine.io');


const server=http.createServer();
const io=socketIo({server})

io.on('connection',(socket)=>{
    console.log('A user connected');
    socket.on('disconnected',()=>{
        console.log('A user disconnected'); 
    })
})

app.use('/',(re,res)=>{
    res.send('<h1>Hii</h1>');
})

app.listen('3000',()=>{
    console.log('server 3000 is runnning....')
})