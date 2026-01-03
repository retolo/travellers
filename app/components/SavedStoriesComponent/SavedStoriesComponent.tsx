'use client'

import css from './SavedStoriesComponent.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { type travelersStoriesType } from "@/app/types";
import { usePathname } from 'next/navigation';
function SavedStoriesComponent(){

    const travelers: travelersStoriesType[] = [];

    const pathname = usePathname();

    const isPathname = pathname.endsWith('saved-stories')

    return(
        <div className={css.container}>
            <div className={css.mainWrapper}>
                <div className={css.mainInfoProfile}>
                    <Image src={"/user-avatar"} alt='user avatar' width={199} height={199} className={css.avatar}/>

                    <div className={css.wrapperForAboutInfoUser}>
                        <h3 className={css.userName}>{"user name"}</h3>
                        <p className={css.userTextAbout}>{"user text about"}</p>
                    </div>


                    <div className={css.wrapperForButtons}>
                        <Link href={'/auth/saved-stories'}><button type='button' className={isPathname ? css.checkedButton : css.noneCheckedButton}>Збережені історії</button></Link>
                        <Link className={css.link} href={'/auth/my-stories'}><button type='button' className={isPathname ? css.noneCheckedButton : css.checkedButton}>Мої історії</button></Link>

                    </div>
                    {travelers.length > 0
                        ?<ul className={css.storiesList}>
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
                    :<div className={isPathname ?  css.wrapperNoSavedStories : css.wrapperNoUserStories}>
                        <p className={css.textNoStories}>{isPathname ? `У вас ще немає збережених історій, мершій збережіть вашу першу історію!` : 'Ви ще нічого не публікували, поділіться своєю першою історією!'} </p>
                        <Link href={'/auth/user-stories'}><button className={isPathname ?  css.buttonUserSavedStories : css.buttonUserNoStories} type='button'>{isPathname ? 'До історій' : 'Опублікувати історію'} </button></Link>
                    </div>
                    
                    
                    }
                    
                    <button className={css.loadMoreButton} type='button'>Показати ще</button>
                </div>
            </div>

        </div>
    )
}


export default SavedStoriesComponent;