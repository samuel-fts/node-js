const conectar = async ()=>{
    if(global.conexao && global.conexao.state !='disconected'){
        console.log('caiu aqui')
        return global.conexao
    }
    const mysql=require('mysql2/promise')
    const con=mysql.createConnection("mysql://root:autocat123@localhost:3306/aulla01");
    console.log("conectou ao banco");
    global.conexao=con
    return con
}

const todosClientes = async ()=>{
    const con = await conectar()
    const [linhas] = await con.query('SELECT *FROM cliente_node')
    return await linhas
}

const inserirClientes = async (cliente)=>{
    const con = await conectar()
    const valores = [cliente.nome,cliente.idade]
    await con.query('INSERT INTO cliente_node (nome,idade) VALUE (?,?)',valores)
}

const alterarClientes = async (cliente)=>{
    const con = await conectar()
    const valores = [ cliente.idade, cliente.id];
    await con.query('UPDATE cliente_node SET idade=? WHERE id=?', valores)
}
const deletarClientes = async(cliente)=>{
    const con = await conectar();
    const valores = cliente.id;
    await con.query('DELETE FROM cliente_node WHERE id=?',valores);
}

module.exports={todosClientes,inserirClientes,alterarClientes,deletarClientes}