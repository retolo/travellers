import Image from "next/image";
import css from './ProfileTravellerPublic.module.css'
import { type travelersStoriesType } from "@/app/types";
function ProfileTravellerPublic(){

    const travelers: travelersStoriesType[] = [];

    return(
        <div className={css.container}>
            <div className={css.mainWrapper}>
                <div className={css.mainInfoProfile}>
                    <Image className={css.avatar} src={"user avatar"} alt="user avatar" width={199} height={199}/>

                    <div className={css.wrapperForAboutInfoUser}>
                        <h3 className={css.userName}>{"user name"}</h3>
                        <p className={css.userAboutText}>{"user about text"}</p>
                    </div>
                </div>
            </div>

            <h2 className={css.headerStorie}>Історії Мандрівника</h2>

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
            <button type="button" className={css.loadMoreButton}>Показати ще</button>
        </div>
    )

}



export default ProfileTravellerPublic;