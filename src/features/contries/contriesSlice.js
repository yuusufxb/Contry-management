import { asyncThunkCreator, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { Await , async } from 'react-router-dom';
import countries from '../../data/contries.json'

const initialState = {
  list:countries ,  
  error: null,
}
const contriesSlice = createSlice({
    name:"contries",
    initialState ,
    reducers:{
      setcontries:(state,action)=>{
        state.list = action.payload
      }

    }

})
export const{setcontries}=contriesSlice.actions
export default contriesSlice.reducer