import Image from "next/image";
import css from './CreateHeader.module.css'
import Link from "next/link";
function CreateHeader(){
    return(
        <header >
            <div className={css.container}>


                <div className={css.blockIcon}>
                    <Image src={'/icons/plant.svg'} alt='logo' width={23} height={23}/>
                    <p className={css.headerText}>Подорожники</p>
                </div>
                <nav className={css.navigation}>
                    <Link href={'/'} className={css.headerLinks}>Головна</Link>
                    <Link href={'/stories'} className={css.headerLinks}>Історії</Link>
                    <Link href={'/travelers'} className={css.headerLinks}>Мандрівники</Link>
                    <Link href={'/travelers'} className={css.headerLinks}>Мій Профіль</Link>
                    
                </nav>
                <button className={css.publishStorieButton} type="button">Опублікувати історію</button>
                <Image className={css.avatar} src={'/desktop/avatar.png'} alt="avatr user" width={32} height={32}/>
                <p className={css.name}>Імʼя</p>
                <Image src={'/icons/logout.svg'} alt="logout icon" width={24} height={24}/>
            </div> 


            
        </header>
    )
}


export default CreateHeader;