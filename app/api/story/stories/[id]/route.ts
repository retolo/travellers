import { api, ApiError } from "@/app/api/api";
import { NextRequest, NextResponse } from "next/server";

type Props = {
    params: Promise<{id: string}>
}

export async function GET(request:Request, {params}: Props) {

    try {

        const {id} = await params;


        const response = await api.get(`/story/stories/${id}`);


        return NextResponse.json(response.data);
        
    } catch (error) {
        const err = error as ApiError;

        return NextResponse.json(
            {
                error: err.response?.data.error ?? err.message 
            },
            {
                status: err.status
            }
        )
    }
    
}