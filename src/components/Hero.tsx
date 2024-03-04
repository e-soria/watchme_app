"use client"

import { useEffect, useState } from 'react'

import { Button } from './ui/button'
import Link from 'next/link'

import getSerie from '@/app/api/getSerie'

const Hero = () => {

    const [featuredHeroContent, setFeaturedHeroContent] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {

        const fetchFeaturedHeroContent = async () => {

          try {

            const featuredContent = await getSerie('obiwan'); 
            setFeaturedHeroContent(featuredContent); 
            setIsLoading(false); 

          } catch (error) {

            console.error('Error al obtener la película destacada:', error);
            setIsLoading(false);
          }

        };
    
        fetchFeaturedHeroContent(); 
        
    }, []);

    
    const { backdrop_path, name, overview, vote_average } = featuredHeroContent && featuredHeroContent[0] || {};

    return (

        <>

            {isLoading ? (
                <p>Menu de usuario aqui</p>
            ) : (
           
           <section id="home-hero" className="home-hero relative z-10 bg-no-repeat bg-cover bg-center min-h-screen flex flex-col justify-center" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`}}>
                <div className="hero-container container m-auto flex flex-col gap-6">

                    <div className="hero-title flex flex-col gap-2">
                        <p className="title-head">Movie</p>
                        <h1 className="uppercase">{name}</h1>
                        <p>{overview}</p>
                    </div>
                    
                    <div className="hero-ctas">
                        <Link href="#">
                            <Button>Watch Now</Button>
                        </Link>    

                        <p>{vote_average}</p>
                    </div>

                </div>
            </section>

            )}

        </>

    )
}

export default Hero