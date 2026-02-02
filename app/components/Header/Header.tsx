'use client'
import Link from "next/link";
import css from './Header.module.css'
import AuthNav from "../AuthNav/AuthNav";
import Image from "next/image";
import { usePathname } from "next/navigation";
function Header(){

    const pathname = usePathname();
    const isStories = pathname.startsWith('/stories') || pathname.startsWith('/travelers');
    console.log(isStories)
    return(
        <header className={isStories  ? css.headerStories : css.header}>
            <div className={css.container}>


                <div className={css.blockIcon}>
                    <Image src={'/icons/plant.svg'} alt='logo' width={23} height={23}/>
                    <p className={isStories ?  css.headerTextStories : css.headerText}>Подорожники</p>
                </div>
                <nav className={css.navigation}>
                    <Link href={'/'} className={isStories ? css.headerLinksStories : css.headerLinks}>Головна</Link>
                    <Link href={'/stories'} className={isStories ? css.headerLinksStories : css.headerLinks}>Історії</Link>
                    <Link href={'/travelers'} className={isStories ? css.headerLinksStories : css.headerLinks}>Мандрівники</Link>
                    <AuthNav/>
                </nav>
            </div> 


            
        </header>
    )
}


export default Header;