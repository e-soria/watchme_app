import axios from 'axios';
import { genres } from '../genres';

interface Genre {
    id: number;
    name: string;
}

interface Movie {
    id: number;
    genre_ids: number[];
}

export const getNewMovies = async (): Promise<Movie[]> => {

    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_READ_KEY;
    const apiURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`

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
            const moviesWithGenres: Movie[] = data.results.map((movie: any) => ({
                ...movie,
                genres: movie.genre_ids.map((genreId: number) => {
                    const foundGenre = genres.find(genre => genre.id === genreId);
                    return foundGenre ? foundGenre.name : '';
                }),
            }));

            return moviesWithGenres;

        } else {
            console.error('Error al obtener la serie o película destacada:', response.statusText);
            return [];
        }
        

    } catch (error) {
        return [];
    }

}