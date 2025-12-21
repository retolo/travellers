import Image from "next/image";
import css from './StorieClientDetails.module.css'
import { type travelersStoriesType } from "@/app/types";
function StorieClientDetails(){

    const popularStories: travelersStoriesType[] = [];


    return(
        <div className={css.container}>
            <div className={css.mainWrapper}>
                <h2 className={css.mainHeader}>Венеція без туристів: маршрути для справжніх мандрівників</h2>
                <div className={css.infoWrapper}>
                    <p className={css.info}>Автор статті <span className={css.span}>{"name"}</span></p>
                    <p className={css.info}>Опубліковано <span className={css.span}>{"date"}</span></p>
                    <p className={css.region}>{"region"}</p>
                </div>
                <Image className={css.mainImage} src={"image src"} width={1312} height={874} alt="image of place"/>

                <div className={css.aboutWrapper}>
                    <p className={css.about}>{"about"}</p>
                    <div className={css.saveWrapper}>
                        <h2 className={css.secondHeader}>Збережіть собі історію</h2>
                        <p className={css.saveAbout}>Вона буде доступна у вашому профілі у розділі збережене</p>
                        <button className={css.saveButton} type="button">Зберегти</button>
                    </div>

                </div>




                <div className={css.popularStoriesWrapper}>
                    <h2 className={css.popularStoriesHeader}>Популярні історії</h2>
                    <ul>
                        {popularStories.map((popularStorie, index) =>(
                        <li className={css.storiesBlock} key={index}>
                            <Image className={css.mainImage} src={popularStorie.mainImg} alt='main image place' width={421} height={280}/>
                            <div className={css.wrapperInfo}>
                                <p className={css.country}>{popularStorie.country}</p>
                                <h3 className={css.headingCard}>{popularStorie.heading}</h3>
                                <p className={css.about}>{popularStorie.about}</p>
                                <div className={css.wrapperUser}>
                                    <Image className={css.avatar} src={popularStorie.avatar} alt='avatar user' width={48} height={48}/>
                                    <div className={css.wrapperUserInfo}>
                                        <p className={css.name}>{popularStorie.name}</p>
                                        <p className={css.data}>{popularStorie.data}</p>
                                    </div>
                                </div>

                                <div className={css.wrapperButtons}>
                                    <button className={css.seaMoreButton} type='button'>Переглянути статтю</button>
                                    <button className={css.saveButtonCard} type='button'><Image src={'/icons/save.svg'} alt='save icon' width={24} height={24}/></button>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    )
}



export default StorieClientDetails;