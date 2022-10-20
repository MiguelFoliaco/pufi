import { createSlice } from "@reduxjs/toolkit";

const imgs=['/images/sombrilla2.png','/images/sillon.jpg','/images/pillow-on-bed.jpg','/images/cart.jpg','/images/aloahada.jpg','/images/sombrillas.jpg'];

export const InstagramSicle=createSlice({
    initialState:{
        imgs
    },
    name:"instagram",
    reducers:{
        //? en caso tal de que se piense ampliar el proyecto se podrian almacenar nuevas imagenes o post desde la api de instagram
        setImgs(state,action){
            return state;
        }   
    }
})

export default InstagramSicle.reducer