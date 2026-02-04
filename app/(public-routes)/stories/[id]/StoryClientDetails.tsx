'use client'
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import css from './StoryClientDetails.module.css'
import { getStoryById } from "@/app/lib/apis/storyApis";
import { getStories } from "@/app/lib/apis/storyApis";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
function StoryClientDetails(){

    const {id} = useParams<{id: string}>();
    const [page] = useState<number>(1);
    const perPage = 3;

    const {data, isLoading} = useQuery({
        queryKey: ['story', id],
        queryFn: () => getStoryById(id),
        refetchOnMount: false
    })


    const {data: popularStories} = useQuery({
        queryKey: ['stories', perPage, page],
        queryFn: () => getStories({page: page, perPage: perPage})
    })

    



    if(isLoading || !data){
        return(
            <p>Loading...</p>
        )
    }





    

    return(
        <div className={css.container}>
            <div className={css.mainWrapper}>
                <h2 className={css.mainHeader}>{data.data.story?.title}</h2>
                <div className={css.infoWrapper}>
                    <div className={css.nameWrapper}>
                        <p className={css.info}>Автор статті <span className={css.span}>{"Анастасія Олійник"}</span></p>
                    </div>

                    <div className={css.dateWrapper}>
                        <p className={css.info}>Опубліковано <span className={css.span}>{data.data.story?.date}</span></p>
                    </div>
                    
                    
                    <p className={css.region}>{data.data.story?.category}</p>
                </div>
                <div className={css.card}>
                    <div className={css.cardImageMain}>
                        <Image className={css.mainImage} src={data.data.story?.img} width={1312} height={874} alt="image of place"/>
                    </div>
                </div>
                

                <div className={css.aboutWrapper}>
                    <p className={css.about}>{data.data.story?.article}</p>
                    <div className={css.saveWrapper}>
                        <h2 className={css.secondHeader}>Збережіть собі історію</h2>
                        <p className={css.saveAbout}>Вона буде доступна у вашому профілі у розділі збережене</p>
                        <button className={css.saveButton} type="button">Зберегти</button>
                    </div>

                </div>




                <div className={css.popularStoriesWrapper}>
                    <h2 className={css.popularStoriesHeader}>Популярні історії</h2>
                    <ul className={css.listPopularStories}>
                        {popularStories !== undefined && popularStories.stories !== undefined && popularStories.stories.data.slice().sort((a, b) => b.favoriteCount - a.favoriteCount).slice(0, 3).map((story) =>(

                            <li className={css.storiesBlock} key={story._id}>
                                <div className={css.card}>
                                    <div className={css.cardImage}>
                                        <Image className={css.popularImage} src={story.img} alt='main image place' width={421} height={280} />
                                    </div>
                                </div>
                                
                                <div className={css.wrapperInfo}>
                                    <p className={css.category}>{story.category}</p>
                                    <h3 className={css.title}>{story.title}</h3>
                                    <p className={css.article}>{story.article}</p>
                                    {/* <div className={css.wrapperUser}>
                                        <Image className={css.avatar} src={popularStorie.avatar} alt='avatar user' width={48} height={48}/>
                                        <div className={css.wrapperUserInfo}>
                                            <p className={css.name}>{popularStorie.name}</p>
                                            <p className={css.data}>{popularStorie.data}</p>
                                        </div>
                                    </div> */}

                                    <div className={css.wrapperButtons}>
                                        <Link href={`stories/${story._id}`}><button className={css.seaMoreButton} type='button'>Переглянути статтю</button></Link>
                                        <button className={css.saveButtonCard} type='button'><Image src={'/icons/save.svg'} alt='save icon' width={24} height={24}/></button>
                                    </div>
                                </div>
                            </li>
                            ))
                            
                        

                        }
                    </ul>

                </div>
            </div>

        </div>
    )
}



export default StoryClientDetails;