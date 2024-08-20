async function fetchData(){
    try{
        const response = await fetch(appUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

