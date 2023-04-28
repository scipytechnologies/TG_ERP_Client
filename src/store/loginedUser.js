import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    id:' ',
    isConnected : false,
    role:'owner',
    
  }

  export const LoginedUserSlice = createSlice({
    name:'loginedUser',
    initialState,
    reducers: {
       loggeduser : (state,action ) => {
           state.id = action.payload  
        
       },
       isConnected : (state) => {
            state.isConnected = true
       },
       setRole : (state,action) => {
        state.role = action.payload
       }    
  }
  })
  
  // Action creators are generated for each case reducer function
  export const {loggeduser,isConnected,setRole} = LoginedUserSlice.actions
  
  export default  LoginedUserSlice.reducer