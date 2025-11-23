import Link from "next/link";
import css from './Header.module.css'
import AuthNav from "../AuthNav/AuthNav";
import Hero from "../Hero/Hero";
import Image from "next/image";
function Header(){
    return(
        <header className={css.header}>
            <div className={css.container}>


                <div className={css.blockIcon}>
                    <Image src={'/icons/plant.svg'} alt='logo' width={23} height={23}/>
                    <p className={css.headerText}>Подорожники</p>
                </div>
                <nav className={css.navigation}>
                    <Link href={'/'} className={css.headerLinks}>Головна</Link>
                    <Link href={'/stories'} className={css.headerLinks}>Історії</Link>
                    <Link href={'/travelers'} className={css.headerLinks}>Мандрівники</Link>
                    <AuthNav/>
                </nav>
            </div> 

            <Hero/> 

            
        </header>
    )
}


export default Header;