import css from './Footer.module.css'
import Image from 'next/image';
function Footer(){
    return(
        
            <footer className={css.footer}>
                <div className={css.container}>
                    <div className={css.wrapper}>
                        <div className={css.blockIcon}>
                            <Image src={'/icons/plant.svg'} alt='logo' width={23} height={23}/>
                            <p className={css.mainText}>Подорожники</p>
                        </div>
                        
                        
                        <ul className={css.listIcons}>
                            <li>
                                <Image src={'/icons/Facebook.svg'} alt='facebook' width={24} height={24}/>
                            </li>

                            <li>
                                <Image src={'/icons/Instagram.svg'} alt='instagram' width={24} height={24}/>
                            </li>

                            <li>
                                <Image src={'/icons/X.svg'} alt='x' width={24} height={24}/>
                            </li>

                            <li>
                                <Image src={'/icons/Youtube.svg'} alt='youtube' width={24} height={24}/>
                            </li>
                        </ul>


                        <ul className={css.footerList}>
                            <li>
                                <p className={css.footerText}>Головна</p>
                            </li>
                            <li>
                                <p className={css.footerText}>Історії</p>
                            </li>
                            <li>
                                <p className={css.footerText}>Мандрівники</p>
                            </li>
                        </ul>
                    </div>
                    <p className={css.copyRightText}>© 2025 Подорожники. Усі права захищені.</p>
                </div>
            </footer>
            
        
    )
}


export default Footer;