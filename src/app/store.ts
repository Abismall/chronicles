import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from '../features/api/apiSlice';
import chapterSlice from "../features/chapters/chapterSlice"
import groupSlice  from "../features/groups/groupSlice"

export const store = configureStore({
    reducer: {
        chapters: chapterSlice.reducer,
        groups: groupSlice.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch