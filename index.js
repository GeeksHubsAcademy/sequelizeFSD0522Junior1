
const express = require('express');
const app = express();
const port = 3000;
const { user } = require('./models/index');

const db = require('./db');




//a partir de ahora podemos codificar y por lo tanto usar formato JSON
app.use(express.json());

app.get('/', async (req, res) => {
        let resultado = await usuarioModel.findAll();

        res.json({resultado});
})


db.then(()=>{
    app.listen(port, ()=> {
        console.log("Servidor levantado y funcionando en el puerto ", port);
    })
})
.catch((err)=> console.log(err.message)); 

