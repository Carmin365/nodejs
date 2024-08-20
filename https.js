const http = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('privatekey.pem'),
    cert: fs.readFileSync('certificate.pem')
};

http.createServer(options, (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Olá, HTTPS Mundo!\n');
})  .listen(3000, () => {
    console.log('Servidor HTTPS rodando na porta 3000');
});


