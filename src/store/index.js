import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    CrmID:''
  }

  export const IndexSlice = createSlice({
    name:'index',
    initialState,
    reducers: {  
       setindex :(state,action) =>{
        const {CrmID} = action.payload;
        state.CrmID= CrmID; 
       } 
        
  }
  })
  
  // Action creators are generated for each case reducer function
  export const {setindex} = IndexSlice.actions
  
  export default  IndexSlice.reducer