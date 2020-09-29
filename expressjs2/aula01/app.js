const express = require('express')
const app = express();
const port = 3000;


app.get('/aula', (req, resp) => {
    resp.send("Primeiro Endpoint, aula 01 ")
})

app.post('/post', (req, resp) => {
    resp.send("Post Endpoint")
})

app.put('/put', (req, resp) => {
    resp.send("PUT")
})

app.delete('/delete', (req, resp) => {
    resp.send("Delete")
})



app.listen(port, () => { console.log('Aplicação com express porta ' + port) })