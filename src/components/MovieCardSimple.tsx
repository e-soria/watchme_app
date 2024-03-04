import {
    Card,
    CardContent,
    CardDescription,
    CardTitle
    
  } from "@/components/ui/card";

import Image from 'next/image'
import Icon from "./Icon";

interface Movie {
    name: string;
    title: string;
    backdrop_path: string;
    id: number;
    overview: string;
    vote_average: number;
    genres: []
}
  
interface MovieCardProps {
    movie: Movie;
    contentType: string
}
  
const MovieCardSimple: React.FC<MovieCardProps> = ({contentType, movie}) => {

    const {name, title, backdrop_path, id, genres, vote_average} = movie;

    return (

        <Card className="relative p-0 border-0">
            
            {/* <CardDescription className="absolute bg-primary p-2 text-black font-semibold capitalize rounded-sm top-2 left-2">
                {contentType}
            </CardDescription> */}

            <CardContent className="p-0">
                
                <Image 
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    width={300}
                    height={500}
                    alt={`Image of ${name ? name : title} ${contentType}`}
                    className="rounded-md"
                />

                <div className="pt-4 flex flex-col gap-2">
                    <CardTitle className="text-whiteColor font-medium">{name ? name : title}</CardTitle>
                    <CardDescription className="flex flex-row items-center gap-1 text-base">
                        <Icon/>
                        {vote_average.toFixed(2)}
                    </CardDescription>
                </div>

            </CardContent>

        </Card>

    )
}

export default MovieCardSimple


