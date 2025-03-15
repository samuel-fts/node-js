 const http = require('http');
 const porta = 3000;
 const host = '127.0.0.1';

 const servidor = http.creatServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url=='/'){
        res.write('<h1>seja em vindo</h1>')
    }else if(req.url=='/curso'){
        res.write('<h1>curso de node</h1>')
    }
    res.end();
 })

 servidor.listen(porta,host,()=>{console.log('servidor rolando')})//ele escrve no console que o servidor esta rodando