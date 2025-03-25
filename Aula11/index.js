const http=require('http');
const eventos= require('events')//fez uma requisicao do objeto global events
const EventoEmissor = new eventos.EventEmitter();//instanciou um novo objeto pegando o metodo eventEmitter

const final = ()=>{console.log('fim do processo')};//criou uma funcao que sera usada depois

EventoEmissor.on('msg',()=>{console.log('curso de node')});//.on atribui uma chave para ser chamada depois e executar oque espera do segundo parametro
EventoEmissor.on('fim',final);


const porta=process.env.PORT || 3000;
const retorno=()=>{console.log('servidor rodando')};

const servidor=http.createServer((req,res)=>{
    EventoEmissor.emit('msg');//.emit, chama a emissao de evento criada anteriormente, usando a chave atribuida em seu parametro
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write('CFBcurso');
    EventoEmissor.emit('fim');
    res.end();
})
servidor.listen(porta,retorno);