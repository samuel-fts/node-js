const express=require('express')
const rotas=require('./rotas')
const porta=process.env.PORT || 3000

const app=express()

app.use('/',rotas)

app.get('*',(req,res)=>{
    res.send('cfb curso')
})
app.listen(porta,()=>{console.log('rodando')})