'use client'
import { userAuthStore } from "@/app/lib/stores";
import Link from "next/link";
import css from './Join.module.css'

function Join(){
    const {isAuthenticated} = userAuthStore();



    return(
        <div className={css.container}>
            <div className={css.background}>
                <div className={css.wrapper}>
                    <h2 className={css.headerJoin}>Приєднуйтесь до нашої спільноти</h2>
                    <p className={css.headerText}>Долучайтеся до мандрівників, які діляться своїми історіями та надихають на нові пригоди.</p>
                    <Link href={isAuthenticated ? '/auth/profile' : 'auth/register'}><button type="button" className={css.buttonJoin}>{isAuthenticated ? 'Збережені' : 'Зареєструватися'}</button></Link>
                </div>
            </div>
        </div>
    )

}



export default Join;