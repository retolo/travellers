import { api, ApiError } from "@/app/api/api";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest) {
    

    try {
        
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