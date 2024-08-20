const fetch = require('node-fetch');

const appUrl = 'https://google.com.br';

fetch (appUrl)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not pleasant');
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('There was a problem with your search operation:', error); 
});





