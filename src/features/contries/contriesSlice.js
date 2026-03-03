import { asyncThunkCreator, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { Await , async } from 'react-router-dom';
import countries from '../../data/contries.json'
export const fetchContriesData = createAsyncThunk(
    'contries/fetchContries' ,
      async () =>{
        const res = await fetch("https://restcountries.com/v4/all?fields=name,population,capital,region,flag,language");
        const data = await res.json();
        return data ;
    }
)
export const fetcheContriesByName = createAsyncThunk(
  'contries/fetchByName',
  async(name)=>{
    const res = await fetch("https://restcountries.com/v4/name/"+name);
    //https://restcountries.com/v4/name/
    const data = await res.json();
    return data[0] ;
  }
)

const initialState = {
  list:countries ,  
  error: null,
  fetchedContries: [],
  fetchedByName:null
}
const contriesSlice = createSlice({
    name:"contries",
    initialState ,
    reducers:{
      setcontries:(state,action)=>{
        state.list = action.payload
      }

    },
    extraReducers:(builder)=>{
      builder
      .addCase(fetchContriesData.fulfilled,(state,action)=>{
          state.fetchedContries = action.payload ;
      })
      .addCase(fetcheContriesByName.fulfilled,(state,action)=>{
          state.fetchedByName = action.payload ;
      })

    }

})
export const{setcontries}=contriesSlice.actions
export default contriesSlice.reducer