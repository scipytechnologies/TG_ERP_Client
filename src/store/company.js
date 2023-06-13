import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    CompanyName:'',
    Email : '',
    PhoneNo : '',
    TagLine : '',
    CompanyDescription : '',
    Address : '',
    NoOFEmployee : '',
    Industry :'',
    EntityType : ''
  }

  export const CompanySlice = createSlice({
    name:'company',
    initialState,
    reducers: {  
       setCompanyProfile :(state,action) =>{
        const {CompanyName,
        Email ,
        PhoneNo ,
        TagLine,
        CompanyDescription,
        Address ,
        NoOFEmployee ,
        Industry ,
        EntityType } = action.payload;

        state.CompanyName = CompanyName;
        state.Email = Email;
        state.PhoneNo = PhoneNo;
        state.TagLine = TagLine;
        state.CompanyDescription = CompanyDescription;
        state.Address = Address;
        state.Industry = Industry;
        state.NoOFEmployee = NoOFEmployee;
        state.EntityType = EntityType;
       }    
  }
  })
  
  // Action creators are generated for each case reducer function
  export const {setCompanyProfile} = CompanySlice.actions
  
  export default  CompanySlice.reducer