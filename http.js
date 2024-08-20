const http = require('http')

http.createServer((request, response) => {
    const{ method, statusCode, url } = request

    if (url === '/') {
        return response.write('Olá desde Brasil')
    }
});
