const dns = require('node:dns');

const searchedUrl = 'nodejs.org'

async function bootstrap(){
    const addresses = await dns.promises.resolve4(searchedUrl)
   console.log()
}

bootstrap()

