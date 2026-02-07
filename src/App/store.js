import { configureStore } from "@reduxjs/toolkit";
import contriesreducer from '../features/contries/contriesSlice'

const store = configureStore({
    reducer:{
        contries:contriesreducer,
    },
})