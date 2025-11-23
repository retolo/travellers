'use client'
import { userAuthStore } from "@/app/lib/stores"
import Link from "next/link";
import css from './AuthNav.module.css'
function AuthNav(){
    const {isAuthenticated} = userAuthStore();
    return(
        <>
            {isAuthenticated 
                ? <div className={css.wrapper}>
                    <Link href={'/profile'}><button  type="button" className={css.profileButton}>Мій Профіль</button></Link>
                    <Link href={'/make-story'}><button type="button" className={css.makeStoryButton}>Опублікувати історію</button></Link>

                    {/* {Інформація про авторизованого користувача - аватар та імʼя.} */}

                    <button type="button" className={css.logOutButton}>Вихід</button>
                </div>

                : <div className={css.wrapper}>
                    <Link href={'/auth/login'}><button className={css.loginButton} type="button">Вхід</button></Link>
                    <Link href={'/auth/register'}><button type="button" className={css.registerButton}>Реєстрація</button></Link>
                </div>
            
            }
        
        </>
    )
}



export default AuthNav;