(async()=>{
    const Clientes={
        id:1,
        nome:'bruna',
        idade:39
    };
    
    const db = require('./db');
    //console.log('inserindo cliente');
    //await db.inserirClientes(Clientes);


    //await db.alterarClientes(Clientes);
    //console.log('alteracoes feitas');

    await db.deletarClientes(Clientes);
    console.log('cliente deletado');

    console.log('obtendo clientes');
    const clientes=await db.todosClientes();
    console.log(clientes);
})()