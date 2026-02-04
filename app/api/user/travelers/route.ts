import { api, ApiError } from "../../api";
import { NextResponse, NextRequest} from "next/server";





export async function GET(request:NextRequest) {

    try {
        const page = Number(request.nextUrl.searchParams.get('page') ?? 1);
        const perPage  = Number(request.nextUrl.searchParams.get('perPage') ?? 12);

        const {data} = await api.get('/user/travelers', {params: {
            page: page,
            perPage: perPage
        }})


        return NextResponse.json(data);
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