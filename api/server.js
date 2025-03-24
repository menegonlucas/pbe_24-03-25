// filepath: c:\Users\Lucas Menegon\Desktop\3º SEMESTRE\Prog. BackEnd\Aula 5\VPS\api\server.js
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(4000, () => {
    console.log('SERVIDOR RODANDO NA PORTA 4000');
});