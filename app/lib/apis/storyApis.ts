'use client'
import { nextServer } from "../api";
import { StoriesResponse, type StoriesResponseData,} from "@/app/types";



type getStoriesProps = {
    page: number,
    perPage: number
}

export const getStories = async ({page, perPage}: getStoriesProps): Promise<StoriesResponseData>=>{
    const response = await nextServer.get<StoriesResponse>(`/story/stories`,
        {params:{
            page: page,
            perPage: perPage
        }}
    );
    return response.data.data;
}



export const getStoryById = async (id: string) =>{
    const response = await nextServer.get(`/story/stories/${id}`);
    return response.data;
}


export const getCategory = async (id: string) =>{
    const response = await nextServer.get(`/category/${id}`);
    return response.data
}