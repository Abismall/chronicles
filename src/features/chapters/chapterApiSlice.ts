import { apiSlice } from "../api/apiSlice"
import chapterSlice  from "../chapters/chapterSlice"



export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getChapters: builder.query<State.Chapter[], string>({
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