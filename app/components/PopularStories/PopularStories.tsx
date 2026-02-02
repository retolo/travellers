'use client'

import css from './PopularStories.module.css'
import { getStories, getCategory} from '@/app/lib/apis/clientApis';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { categories } from '@/app/types';
import Link from 'next/link';
 function PopularStories(){

    // const [category, setCategory] = useState<string>('');


    const {data} = useQuery({
        queryKey: ['stories'],
        queryFn: () => getStories()
    })
    
    

    return(
        <div className={css.container}>
            <h2>Популярні історії</h2>
            {data !== undefined && data.stories !== undefined &&
            <ul className={css.mainStories}>
                        <li className={css.storiesBlock} >
                            <div className={css.card}>
                                <div className={css.cardImage}>
                                    <Image className={css.mainImage} src={data.stories.data[0].img} alt='main image place' width={421} height={280}/>
                                </div>
                            </div>
                            
                            <div className={css.wrapperInfo}>
                                <p className={css.country}>{categories[data.stories.data[0].category]}</p>
                                <h3 className={css.title}>{data.stories.data[0].title}</h3>
                                <p className={css.article}>{data.stories.data[0].article}</p>
                                {/* <div className={css.wrapperUser}>
                                    <Image className={css.avatar} src={traveler.avatar} alt='avatar user' width={48} height={48}/>
                                    <div className={css.wrapperUserInfo}>
                                        <p className={css.name}>{traveler.name}</p>
                                        <p className={css.data}>{traveler.data}</p>
                                    </div>
                                </div> */}

                                <div className={css.wrapperButtons}>
                                    <Link href={`stories/${data.stories.data[0]._id}`}><button className={css.seaMoreButton} type='button'>Переглянути статтю</button></Link>
                                    <button className={css.saveButton} type='button'><Image src={'/icons/save.svg'} alt='save icon' width={24} height={24}/></button>
                                </div>
                            </div>
                        </li>

                            <li className={css.storiesBlock} >
                                <div className={css.card}>
                                    <div className={css.cardImage}>
                                        <Image className={css.mainImage} src={data.stories.data[1].img} alt='main image place' width={421} height={280}/>
                                    </div>
                                </div>
                                
                                <div className={css.wrapperInfo}>
                                    <p className={css.country}>{categories[data.stories.data[1].category]}</p>
                                    <h3 className={css.title}>{data.stories.data[1].title}</h3>
                                    <p className={css.article}>{data.stories.data[1].article}</p>
                                    {/* <div className={css.wrapperUser}>
                                        <Image className={css.avatar} src={traveler.avatar} alt='avatar user' width={48} height={48}/>
                                        <div className={css.wrapperUserInfo}>
                                            <p className={css.name}>{traveler.name}</p>
                                            <p className={css.data}>{traveler.data}</p>
                                        </div>
                                    </div> */}

                                    <div className={css.wrapperButtons}>
                                        <Link href={`stories/${data.stories.data[1]._id}`}><button className={css.seaMoreButton} type='button'>Переглянути статтю</button></Link>
                                        <button className={css.saveButton} type='button'><Image src={'/icons/save.svg'} alt='save icon' width={24} height={24}/></button>
                                    </div>
                                </div>
                            </li>

                            <li className={css.storiesBlock} >
                                <div className={css.card}>
                                    <div className={css.cardImage}>
                                        <Image className={css.mainImage} src={data.stories.data[2].img} alt='main image place' width={421} height={280}/>
                                    </div>
                                </div>
                                
                                <div className={css.wrapperInfo}>
                                    <p className={css.country}>{categories[data.stories.data[2].category]}</p>
                                    <h3 className={css.title}>{data.stories.data[2].title}</h3>
                                    <p className={css.article}>{data.stories.data[2].article}</p>
                                    {/* <div className={css.wrapperUser}>
                                        <Image className={css.avatar} src={traveler.avatar} alt='avatar user' width={48} height={48}/>
                                        <div className={css.wrapperUserInfo}>
                                            <p className={css.name}>{traveler.name}</p>
                                            <p className={css.data}>{traveler.data}</p>
                                        </div>
                                    </div> */}

                                    <div className={css.wrapperButtons}>
                                        <Link href={`stories/${data.stories.data[2]._id}`}><button className={css.seaMoreButton} type='button'>Переглянути статтю</button></Link>
                                        <button className={css.saveButton} type='button'><Image src={'/icons/save.svg'} alt='save icon' width={24} height={24}/></button>
                                    </div>
                                </div>
                            </li>
                        


            </ul>
                }
            <Link href={'/stories'}><button type='button' className={css.moreStories}>Переглянути всі</button></Link>

        </div>
    )
}


export default PopularStories;