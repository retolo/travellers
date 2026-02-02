'use client'

import css from './StoriesTravelers.module.css'
import Image from 'next/image';
import { getStories, getCategory} from '@/app/lib/apis/clientApis';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { categories } from '@/app/types';
import Link from 'next/link';

function StoriesTravelers(){

        const {data} = useQuery({
            queryKey: ['stories'],
            queryFn: () => getStories()
        })

        // useEffect(() =>{
            
            
        //         data?.stories.data.forEach((story) =>{
        //             getCategory(story.category).then(response =>{
        //                 setCategories(prev => [...prev, response.data])
                        
        //                 console.log(response.data)
        //             })
        //         })
            
            
        // }, [data?.stories.data])
        


        // useEffect(() =>{
        //     console.log(categories)
        // }, [categories])



        // if(categories.length !== 10){
        //     return(
        //         <p>Loading...</p>
        //     )
        // }

    return(
        <div className={css.container}>
            <div className={css.mainWrapper}>
                <h1 className={css.header}>Історії Мандрівників</h1>
                <ul className={css.categoriesList}>
                    <li>
                        <p className={css.itemCountryAll}>Всі історії</p>
                    </li>
                    <li>
                        <p className={css.itemCountry}>{categories['68fb50c80ae91338641121f2']}</p>
                    </li>
                    <li>
                        <p className={css.itemCountry}>{categories['68fb50c80ae91338641121f0']}</p>
                    </li>
                    <li>
                        <p className={css.itemCountry}>{categories['68fb50c80ae91338641121f6']}</p>
                    </li>
                    <li>
                        <p className={css.itemCountry}>{categories['68fb50c80ae91338641121f4']}</p>
                    </li>
                    
                </ul>
                <ul className={css.storiesList}>
                    {data !== undefined && data.stories !== undefined && data?.stories.data.map((traveler, index) =>(
                        <li className={css.storiesBlock} key={index}>
                            <div className={css.card}>
                                <div className={css.cardImage}>
                                    <Image className={css.mainImage} src={traveler.img} alt='main image place' width={421} height={280}/>
                                </div>
                            </div>
                            
                            <div className={css.wrapperInfo}>
                                <p className={css.category}>{categories[traveler.category]}</p>
                                <h3 className={css.title}>{traveler.title}</h3>
                                <p className={css.article}>{traveler.article}</p>
                                {/* <div className={css.wrapperUser}>
                                    <Image className={css.avatar} src={traveler.avatar} alt='avatar user' width={48} height={48}/>
                                    <div className={css.wrapperUserInfo}>
                                        <p className={css.name}>{traveler.name}</p>
                                        <p className={css.data}>{traveler.data}</p>
                                    </div>
                                </div> */}

                                <div className={css.wrapperButtons}>
                                    <Link href={`/stories/${traveler._id}`}><button className={css.seaMoreButton} type='button'>Переглянути статтю</button></Link>
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



export default StoriesTravelers;