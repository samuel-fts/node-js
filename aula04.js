const http=require('http');
const porta=process.env.PORT// se  noa souber qual porta esta utilizando, o programa usa essa como padrão

const servidor = http.createServer((req,res)=>{
    res.statusCode=200
    res.writeHead(200,{'Content-Type':'text-plain'})
    res.end("cfb cursos");
    
})

servidor.listen(porta || 3000,()=>{console.log('Servidor rodadando')})