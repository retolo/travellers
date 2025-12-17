import css from './TravelersComp.module.css'
import { type travelersType } from '@/app/types';
import Image from 'next/image';
function TravelersComp(){
    const travelers: travelersType[]  = []
    return(
        <div className={css.container}>
            <div className={css.mainWrapper}>
                <h1 className={css.header}>Мандрівники</h1>
                <ul className={css.travelerList}>
                    {travelers.map((traveler, index) =>(
                        <li className={css.travelerBlock} key={index}>
                            <Image className={css.avatar} src={traveler.avatar} alt='avatar user' width={112} height={112}/>
                            <p className={css.name}>{traveler.name}</p>
                            <p className={css.about}>{traveler.about}</p>
                            <button type='button' className={css.profileButton}>Переглянути профіль</button>
                        </li>
                    ))}
                    
                </ul>
                <button type='button' className={css.loadMoreButton}>Показати ще</button>
            </div>
        </div>
    )
}



export default TravelersComp;