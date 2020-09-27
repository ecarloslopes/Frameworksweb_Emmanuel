const express = require('express')
const app = express();
const port = 3000;


app.get('/fuji', (req, resp) => {
    resp.send("Primeiro Endpoint, aula 01 ")
})

app.post('/spi', (req, resp) => {
    resp.send("Aula SPI, aula 01 - service 2 ")
})

app.listen(port, () => { console.log('Aplicação com express porta ' + port) })



