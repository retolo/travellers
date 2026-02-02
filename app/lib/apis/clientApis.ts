'use client'
import { nextServer } from "../api";
import { type StoriesResponseData } from "@/app/types";
import { StoriesResponse } from "@/app/types";


export const getStories = async (): Promise<StoriesResponseData>=>{
    const response = await nextServer.get<StoriesResponse>('/story/stories');
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