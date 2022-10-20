import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Home/data/UserSlice";
export const UserStore=configureStore({
    reducer:UserSlice
})

export type RootUserState=ReturnType<typeof UserStore.getState>
export type AppDispatchUser=typeof UserStore.dispatch;