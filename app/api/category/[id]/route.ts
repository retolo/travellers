import { api, ApiError } from "../../api";
import { NextResponse } from "next/server";


type Props = {
    params: Promise<{id: string}>
}


export async function GET(request: Request, {params}: Props){
    try {

        const {id} = await params;
        const response = await api.get(`/category/${id}`)

        
        return NextResponse.json(response.data)

        
    } catch (error) {
        const err = error as ApiError;


        return NextResponse.json(
            {
                error: err.response?.data ?? err.message
            },
            {
                status: err.status
            }
        )
    }
}