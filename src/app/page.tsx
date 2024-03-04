import Link from 'next/link';
import heroBanner from '../../public/images/hero_image.webp'
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

export default function Home() {

  return (

    <>

    <Header isLoggedIn={false}/>
    
      <section id="welcome-hero" 
        className="relative z-10 h-screen bg-body flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center before:content-[''] before:min-h-screen before:w-full before:-z-[1] before:absolute before:bg-black before:opacity-40" 
        style={{backgroundImage: `url(${heroBanner.src})`}}>
        
        <div className="hero-container text-center flex flex-col gap-2">

          <h1 className="font-bold">Your favorite movies and series in one place</h1>
         
          <p className="">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
         
          <Link href="/sign-up" className='mt-6'>
            <Button>Register</Button>
          </Link>

        </div>

      </section>

    </>

  );
}
