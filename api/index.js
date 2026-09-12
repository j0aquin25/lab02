const express = require('express');
const os = require('os');
const app = express();


const MESSAGE = process.env.MESSAGE || "El mensaje no esta configurado";
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        MESSAGE,
        hostname: os.hostname()
    })
})

app.listen(PORT, '0.0.0.0', () =>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})