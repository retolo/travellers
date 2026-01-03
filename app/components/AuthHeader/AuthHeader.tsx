import Link from "next/link"
import Image from "next/image"
import css from './AuthHeader.module.css'
function AuthHeader(){
    return(
        <header className="header">
          <Link href={'/'}><div className="wrapperHeader">
            <Image src={'/icons/plant.svg'} alt='logo' width={23} height={23}/>
            <p className={css.text}>Подорожники</p>
          </div></Link>  
        </header>
    )
}


export default AuthHeader;