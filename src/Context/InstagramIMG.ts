import { configureStore } from "@reduxjs/toolkit";
import InstagramReducer from "../Home/data/InstagramSlice";
export const InstagramStore=configureStore({
    reducer:InstagramReducer
})

export type RootInstagramState=ReturnType<typeof InstagramStore.getState>
export type AppDispatchInstagram=typeof InstagramStore.dispatch;