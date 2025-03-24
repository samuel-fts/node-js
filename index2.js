(async()=>{
    const addClientes={
        nome:'bruna',
        idade:25
    };
    const db = require('./db');
    console.log('inserindo cliente');
    await db.inserirClientes(addClientes);
    
    console.log('obtendo clientes');
    const clientes=await db.todosClientes();
    console.log(clientes);
})()