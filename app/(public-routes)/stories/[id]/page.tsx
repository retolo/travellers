import { HydrationBoundary, dehydrate, QueryClient} from "@tanstack/react-query";
import StoryClientDetails from "./StoryClientDetails";
import { getStoryById } from "@/app/lib/apis/clientApis";



type Props = {
    params: Promise<{id: string}>
}



async function Story({params}: Props){
    const {id} = await params;


    const queryClient = new QueryClient();


    await queryClient.prefetchQuery({
        queryKey: ['story', id],
        queryFn: () => getStoryById(id)
    })


    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <StoryClientDetails />
        </HydrationBoundary>
    )

}


export default Story;