import css from './StoriesTravellers.module.css'
import { type travelersStoriesType } from '@/app/types';
import Image from 'next/image';


function StoriesTravellers(){

    const travelers: travelersStoriesType[] = [];
    const countries: string[] = [];

    return(
        <div className={css.container}>
            <div className={css.mainWrapper}>
                <h1 className={css.header}>Історії Мандрівників</h1>
                <ul className={css.countriesList}>
                    {countries.map((country, index) =>(
                        <li key={index}>
                            <p className={css.itemCountry}>{country}</p>
                        </li>
                    ))}
                </ul>
                <ul className={css.storiesList}>
                    {travelers.map((traveler, index) =>(
                        <li className={css.storiesBlock} key={index}>
                            <Image className={css.mainImage} src={traveler.mainImg} alt='main image place' width={421} height={280}/>
                            <div className={css.wrapperInfo}>
                                <p className={css.country}>{traveler.country}</p>
                                <h3 className={css.headingCard}>{traveler.heading}</h3>
                                <p className={css.about}>{traveler.about}</p>
                                <div className={css.wrapperUser}>
                                    <Image className={css.avatar} src={traveler.avatar} alt='avatar user' width={48} height={48}/>
                                    <div className={css.wrapperUserInfo}>
                                        <p className={css.name}>{traveler.name}</p>
                                        <p className={css.data}>{traveler.data}</p>
                                    </div>
                                </div>

                                <div className={css.wrapperButtons}>
                                    <button className={css.seaMoreButton} type='button'>Переглянути статтю</button>
                                    <button className={css.saveButton} type='button'><Image src={'/icons/save.svg'} alt='save icon' width={24} height={24}/></button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <button className={css.loadMoreButton} type='button'>Показати ще</button>
            </div>
        </div>
    )


}



export default StoriesTravellers;