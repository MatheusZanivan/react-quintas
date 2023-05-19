const express = require('express');
const bodyParser = require('body-parser');
const fs  = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({'extended' : false}));
app.use(bodyParser.json());


app.get('/', (request, response) => {
    response.json({'mensagem:' : 'ola mundo'});
})

app.listen(3001, ()=>{
    console.log("Servidor online na porta 3001")
})

//um que sai e um que recebe
// app.post('/login', (request,response)=>{
//     response.json({'funcionou':'ok'})
// });


// app.post('/login', (request,response)=>{
//     response.json(request.body)

// });



app.post('/login', (request,response)=>{
    const {usuario,senha} = request.body;
    const filePath = path.join(__dirname, "data","login.json");
    

    fs.readFile(filePath, "utf-8", (err, data)=>{
        if(err){
            console.log(`Erro ${err}`);
            return;

        }

        const usuarios = JSON.parse(data);
        const usuarioEncontrado = usuarios.find((user) => user.usuario === usuario);
        if(usuarioEncontrado.senha === senha){
            response.json(usuarioEncontrado);
            return;
        }
        response.json({"Erro" : "usuario nao encontrado"});
    });
});