"use client"

import { useEffect, useState } from 'react'

import { getTopRatedMovies } from '../api/movies/getTopRated'
import { getNewMovies } from '../api/movies/getNewMovies'

import Hero from '@/components/Hero'
import MovieCardList from '@/components/MovieCardList'
import { getTrendingMovies } from '../api/movies/getTrendingMovies'
import { getMoviesByGenre } from '../api/movies/getMoviesByGenre'
import MovieCardListSimple from '@/components/MovieCardListSimple'
import Link from 'next/link'
import Separator from '@/components/Separator'


const page = () => {

  const [movies, setMovies] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
    useEffect(() => {

      const fetchData = async () => {

        try {

          const requests = [
            getTopRatedMovies(),
            getNewMovies(),
            getTrendingMovies(),
            getMoviesByGenre('28'),
            getMoviesByGenre('14'),
            getMoviesByGenre('27'),
            getMoviesByGenre('53'),
            getMoviesByGenre('10749'),

          ];
  
          const [topRatedMovies, newMovies, trendingMovies, actionMovies, fantasyMovies, horrorMovies, thrillerMovies, romanceMovies] = await Promise.all(requests);
  
          setMovies({
            topRatedMovies: topRatedMovies,
            newMovies: newMovies,
            trendingMovies: trendingMovies,
            actionMovies: actionMovies,
            fantasyMovies: fantasyMovies,
            horrorMovies: horrorMovies,
            thrillerMovies: thrillerMovies,
            romanceMovies: romanceMovies
          });

          setIsLoading(false);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();

    }, []);


    console.log(movies);


  return (

    <div className="flex flex-col gap-8">

      {isLoading ? (

        <p>Cargando</p>

      ) : (

        <>
          <Hero />

          <section id="top-rated-section" className='slider-overflow p-6'>
            <div className="section-title mb-4 flex gap-4 items-center">
              <h2 className='text-whiteColor'>Top rated</h2>
              <Link href="#" className="text-primary underline">
                View All
              </Link>
            </div>
            <MovieCardList contentType="movie" movieList={movies.topRatedMovies}/>
          </section>

          <Separator />

          <section id="news-section" className='slider-overflow p-6'>
            <div className="section-title mb-4 flex gap-4 items-center">
              <h2 className='text-whiteColor'>New Movies</h2>
                <Link href="#" className="text-primary underline">
                  View All
                </Link>
            </div>
            <MovieCardList contentType="movie" movieList={movies.newMovies}/>
          </section>

          <Separator />

          <section id="trending-section" className='slider-overflow '>
            <div className="section-title mb-4 flex gap-4 items-center">
              <h2 className='text-whiteColor'>Trending Movies</h2>
              <Link href="#" className="text-primary underline">
                View All
              </Link>
            </div>
            <MovieCardList contentType="movie" movieList={movies.trendingMovies}/>
          </section>

          <Separator />

          <section id="action-section" className='slider-overflow genre-slider'>
            <div className="section-title mb-4 flex gap-4 items-center">
              <h2 className='text-whiteColor'>Action Movies</h2>
                <Link href="#" className="text-primary underline">
                  View All
                </Link>
            </div>
            <MovieCardListSimple contentType="movie" movieList={movies.actionMovies}/>
          </section>

          <Separator />

          <section id="fantasy-section" className='slider-overflow genre-slider'>
            <div className="section-title mb-4 flex gap-4 items-center">
              <h2 className='text-whiteColor'>Fantasy Movies</h2>
                <Link href="#" className="text-primary underline">
                  View All
                </Link>
            </div>
            <MovieCardListSimple contentType="movie" movieList={movies.fantasyMovies}/>
          </section>

          <Separator />

          <section id="horror-section" className='slider-overflow genre-slider'>
            <div className="section-title mb-4 flex gap-4 items-center">
                <h2 className='text-whiteColor'>Horror Movies</h2>
                <Link href="#" className="text-primary underline">
                  View All
                </Link>
            </div>
            <MovieCardListSimple contentType="movie" movieList={movies.horrorMovies}/>
          </section>

          <Separator />

          <section id="thriller-section" className='slider-overflow genre-slider'>
            <div className="section-title mb-4 flex gap-4 items-center">
                <h2 className='text-whiteColor'>Thriller Movies</h2>
                <Link href="#" className="text-primary underline">
                  View All
                </Link>
            </div>
            <MovieCardListSimple contentType="movie" movieList={movies.thrillerMovies}/>
          </section>

          <Separator />

          <section id="romance-section" className='slider-overflow genre-slider'>
            <div className="section-title mb-4 flex gap-4 items-center">
              <h2 className='text-whiteColor'>Romance Movies</h2>
                <Link href="#" className="text-primary underline">
                  View All
                </Link>
            </div>
            <MovieCardListSimple contentType="movie" movieList={movies.romanceMovies}/>
          </section>
          
        </>
        
      )}

    </div>
  );
}    

export default page