import axios from 'axios';

const getSerie = async (serieName: string) => {

    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_READ_KEY;
    const apiURL = `https://api.themoviedb.org/3/search/tv?query=${serieName}&include_adult=false&language=en-US&page=1`;

    try {

        const headers = {
            'accept': 'application/json',
            'Authorization': `bearer ${apiKey}`,
        }
        
        const response = await axios(apiURL, {
            headers: headers
        })

        if (response.status === 200) {
            const data = response.data;
            return data.results;

        } else {
            console.error('Error al obtener la serie o película destacada:', response.statusText);
        }
        

    } catch (error) {
        
    }

}

export default getSerie