'use client'
import css from './TravelersComp.module.css'
import { type travelerType } from '@/app/types';
import { getTravelers } from '@/app/lib/apis/travelerApis';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
function TravelersComp(){

    const perPage = 12;
    const [page, setPage] = useState<number>(1);
    const [travelers, setTravelers] = useState<travelerType[]>([]); 
    const {data} = useQuery({
        queryKey: ['travelers', page, perPage],
        queryFn: () => getTravelers({page: page, perPage: perPage})
    })


    useEffect(() =>{
        const fetchAll = () =>{
            if(data?.travelers.data)
            setTravelers([...travelers, ...data?.travelers.data])
        }

        fetchAll();
    }, [data])
    
    return(
        <div className={css.container}>
            <div className={css.mainWrapper}>
                <h1 className={css.header}>Мандрівники</h1>
                <ul className={css.travelerList}>
                    {travelers.map((traveler, index) =>(
                        <li className={css.travelerBlock} key={index}>
                            <Image className={css.avatar} src={traveler.avatarUrl} alt='avatar user' width={112} height={112}/>
                            <p className={css.name}>{traveler.name}</p>
                            <p className={css.about}>{traveler.description}</p>
                            <button type='button' className={css.profileButton}>Переглянути профіль</button>
                        </li>
                    ))}
                    
                </ul>
                <button onClick={() => setPage(page + 1)} type='button' className={css.loadMoreButton}>Показати ще</button>
            </div>
        </div>
    )
}



export default TravelersComp;