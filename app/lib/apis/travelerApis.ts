'use client'

import { nextServer } from "../api";
import { TravelerResponse, TravelerResponseData} from "@/app/types";

type getTravelersProps = {
    page: number,
    perPage: number
}


export const getTravelers = async ({page, perPage}: getTravelersProps): Promise<TravelerResponseData> =>{
    const response = await nextServer.get<TravelerResponse>('/user/travelers', {
        params:{
            page: page,
            perPage: perPage
        }
    })


    return response.data.data;
}




export const getTravelerById = async (id: string) =>{
    const response = await nextServer.get(`/user/travelers/${id}`);
    return response.data
}