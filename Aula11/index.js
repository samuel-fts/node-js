const http=require('http');
const eventos= require('events');
const EventoEmissor = new eventos.EventEmitter();

const final = ()=>{console.log('fim do processo')};

EventoEmissor.on('msg',()=>{console.log('curso de node')});
EventoEmissor.on('fim',final);


const porta=process.env.PORT || 3000;
const retorno=()=>{console.log('servidor rodando')};

const servidor=http.createServer((req,res)=>{
    EventoEmissor.emit('msg');
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write('CFBcurso');
    EventoEmissor.emit('fim');
    res.end();
})
servidor.listen(porta,retorno);