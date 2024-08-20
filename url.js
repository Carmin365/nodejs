const url = require('url');

const minhaUrl = new URL('https://www.exammple.com/path/to/resource?param1=value1&param2=value2#fragment');

console.log('Protocolo:' , minhaUrl.protocol);
console.log('Host:' , minhaUrl.host);
console.log('Hostname:' , minhaUrl.hostname);
console.log('Port:' , minhaUrl.port);
console.log('Pathname' , minhaUrl.pathname);
console.log('Search:' , minhaUrl.search);
console.log('SearchParams:' , minhaUrl.searchParams);
console.log('Hash:' , minhaUrl.hash);

minhaUrl.searchParams.append('param3' , 'value3');
minhaUrl.hash = '#new-fragment';

console.log('URL modificada:' , minhaUrl.toString());

