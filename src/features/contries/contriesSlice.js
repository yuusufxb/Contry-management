import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: ["morocco"],        
  status: 'idle',  
  error: null,
}
const contriesSlice = createSlice({
    name:"contries",
    initialState ,
    reducers:{
      setcontries:(state,action)=>{
        state.list = action.payload
        state.status = 'succes'
      }

    }

})
export const{setcontries}=contriesSlice.actions
export default contriesSlice.reducer