const express=require('express')
const app=express()

const porta=process.env.PORT// se  noa souber qual porta esta utilizando, o programa usa essa como padrão

app.get('/',(req,res)=>{
    res.send('CFB cursos')
})
app.get('/canal',(req,res)=>{
    res.json({canal:'CFB cursos'})
})

app.listen(porta || 3000,()=>{console.log('Servidor rodadando')})