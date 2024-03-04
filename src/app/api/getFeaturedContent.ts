import axios from "axios";

interface MovieResult {
    popularity: number;
}

interface ApiData {
    results: MovieResult[];
}

export const getFeaturedContent = async (): Promise<ApiData | undefined> => {
    
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_READ_KEY;
    const apiURL = 'https://api.themoviedb.org/3/trending/all/day?language=en-US&sort_by=popularity.desc';

    try {

        const headers = {
            'accept': 'application/json',
            'Authorization': `bearer ${apiKey}`,
        }
        
        const response = await axios.get<ApiData>(apiURL, {
            headers: headers
        })

        if (response.status === 200) {
            
            const data = response.data;
            const sortedResults = data.results.sort((a, b) => b.popularity - a.popularity);
            return { ...data, results: sortedResults };

        } else {
            console.error('Error al obtener la serie o película destacada:', response.statusText);
        }
        

    } catch (error) {
        
    }
  
}