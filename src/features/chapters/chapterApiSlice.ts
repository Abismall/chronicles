import { apiSlice } from "../api/apiSlice"
import chapterSlice  from "../chapters/chapterSlice"

interface Chapter {
    id: string;
    title: string;
}



export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getChapters: builder.query<Chapter[], string>({
            query: () => `/chapters`,
            onQueryStarted: (_arg, { dispatch, queryFulfilled }) => {
                queryFulfilled.then(response => dispatch(chapterSlice.actions.chaptersReceived(response.data)))
            }
        })
    })
})

export const {
    useGetChaptersQuery
} = extendedApiSlice