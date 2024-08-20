const querystring = require('querystring');

const str = 'nome=Jose+Souza&idade=39&cidade=Serra+Talhada';

const parsed = querystring.parse(str);
console.log(parsed);

const obj = {
    name: 'Maria Silva' , country: 'Brasil'
};
const newStr = querystring.stringify(obj);
console.log(newStr);

