import { HydrationBoundary, dehydrate, QueryClient} from "@tanstack/react-query";
import StorieClientDetails from "./StorieClientDetails";
import { getStorieById } from "@/app/lib/apis";



type Props = {
    params: Promise<{id: string}>
}



async function Storie({params}: Props){
    const {id} = await params;


    const queryClient = new QueryClient();


    await queryClient.prefetchQuery({
        queryKey: ['storie', id],
        queryFn: () => getStorieById(id)
    })


    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <StorieClientDetails/>
        </HydrationBoundary>
    )

}


export default Storie;