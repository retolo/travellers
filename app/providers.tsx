'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"



const queryClient = new QueryClient();

type PropsProvider = {
    children: React.ReactNode
}



export default function Provider({children}: PropsProvider){
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}