import { configureStore } from "@reduxjs/toolkit";
import contriesreducer from '../features/contries/contriesSlice'

export const store = configureStore({
    reducer:{
        contries:contriesreducer,
    },
})