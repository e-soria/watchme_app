import Image from "next/image"
import Link from 'next/link';
import { Button } from "./ui/button";

interface HeaderProps {
    isLoggedIn : boolean
}

const Header: React.FC<HeaderProps> = ({isLoggedIn}) => {
  
    return (

        <header id="default-header" className="absolute min-w-full z-[999] py-5">
            <div className="header-container container flex flex-row justify-between m-auto">

                <div className="header-logo">
                    
                    <Link href="/">

                        <Image 
                            src="/images/watchme_logo.webp"
                            width={100}
                            height={100}
                            alt="Logo de la aplicación Watchme App"
                        />

                    </Link>
                    
                </div>

                <ul className="header-menu">
                    
                    {isLoggedIn ? (
                        <p>Menu de usuario aqui</p>
                    ) : (
                    <Link href="/sign-in">
                        <Button>Log in</Button>
                    </Link>
                    )}

                </ul>
                
            </div>
        </header>

    )
}

export default Header