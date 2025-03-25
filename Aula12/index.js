const http = require('http');
const porta = process.env.PORT || 3000;
const formidavel = require('formidable');
const fs = require('fs');

const servidor = http.createServer((req,res)=>{
    if(req.url == '/envioDeArquivo'){//se a url do objeto da req for esse
        const form = new formidavel.IncomingForm();//instanciar um objeto da propriedade incomingfomr

        form.parse(req,(erro, campos, arquivos)=>{//esse vagabunbdo do parse e do proprio objeto de formidavel, nao e de de algum objeto global!!!!!!
            //ele pega a requisicao e retorna um call back com o arquivo manipulavel, podendo pegar suas informacoes
            const urlantiga = arquivos.filetoupload[0].filepath//aqui ele pega de dentro do filetoupload o caminho original
            const urlnova = 'C:Users/test/'+arquivos.filetoupload[0].originalFilename//aqui voce escreve o caminho que quer e depois adiciona o nome original do arquivo que esta dentro do callback desse pilantra
            fs.rename(urlantiga,urlnova,(erro)=>{//esse cara aqui que tem a funcao de mover os arquivos e nao o outro!!! talvez tenha, mas nao nesse codigo
                //ele troca a url antiga pela nova
                if(erro) throw erro
                res.write('arquivo movido')
                res.end()
            })
        })
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="envioDeArquivo" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit" value="enviar">');
        res.write('</form>');
        res.end();
    }
    
})
servidor.listen(porta,()=>{console.log("servidor rodando")});