async function getData(){
    const url = 'https://movies-api14.p.rapidapi.com/shows';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1b30dae4d5msh32ad68a9187a0cfp1e6ffcjsn266657cb5d0b',
            'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getData();