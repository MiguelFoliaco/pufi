import { createSlice } from "@reduxjs/toolkit";

export interface IUser{username:string}
const user:IUser={username:''};

export const UserSicle=createSlice({
    initialState:{
        user:{username:user.username}
    },
    name:"users",
    reducers:{
        //? en caso tal de que se piense ampliar el proyecto se podrian almacenar nuevas imagenes o post desde la api de instagram
        setUser(state,action){
            return {user:{username:action.payload}};
        },
        resetUser(){
            return {user:{username:''}};
        }
    }
})
export const {resetUser, setUser}=UserSicle.actions;
export default UserSicle.reducer