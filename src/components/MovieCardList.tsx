import MovieCard from './MovieCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

interface Movie {
  id: number;
  name: string;
  title: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  genres: []
}

interface CardListProps {
  contentType: string;
  movieList: Movie[];
}

const MovieCardList: React.FC<CardListProps> = ({ contentType, movieList }) => {

  return (

      <Swiper 
        className="overflow-visible"
        spaceBetween={12}
        slidesPerView={3}
        centeredSlides={false}
        loop={false}
        >

        {

          movieList.map((movie: Movie) => {

            return(
              <SwiperSlide className="movie-item" key={movie.id}>
                <MovieCard
                  contentType={contentType}
                  movie={movie}
                />
              </SwiperSlide>
            )
          })

        }

      </Swiper>
 
  )
}

export default MovieCardList