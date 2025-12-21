import css from './SavedStories.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { type travelersStoriesType } from "@/app/types";
import { usePathname } from 'next/navigation';
function SavedStoriesComponent(){

    const travelers: travelersStoriesType[] = [];

    const pathname = usePathname();

    const isPathname = pathname.startsWith('saved-stories')

    return(
        <div className={css.container}>
            <div className={css.mainWrapper}>
                <div className={css.mainInfoProfile}>
                    <Image src={"user avatar"} alt='user avatar' width={199} height={199} className={css.avatar}/>

                    <div className={css.wrapperForAboutInfoUser}>
                        <h3 className={css.userName}>{"user name"}</h3>
                        <p className={css.userTextAbout}>{"user text about"}</p>
                    </div>


                    <div className={css.wrapperForButtons}>
                        <Link href={'/saved-stories'}><button type='button' className={isPathname ? css.checkedButton : css.noneCheckedButton}>Збережені історії</button></Link>
                        <Link href={'/my-stories'}><button type='button' className={isPathname ? css.checkedButton : css.noneCheckedButton}>Мої історії</button></Link>

                    </div>
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

        </div>
    )
}


export default SavedStoriesComponent;