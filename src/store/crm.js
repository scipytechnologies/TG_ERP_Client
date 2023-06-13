import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    customers: '',
    opportunities: '',
    appoinments: ''
}

export const CrmAnalatics = createSlice({
    name: 'crmAnaltics',
    initialState,
    reducers: {
        setCustomerCount: (state, action) => {
            state.customers = action.payload;
        },
        setAppoinmentCount: (state, action) => {
            state.appoinments = action.payload;
        },
        setOpportunitieCount: (state, action) => {
            state.opportunities = action.payload;

        }
    }
})

// Action creators are generated for each case reducer function
export const { setCustomerCount, setAppoinmentCount, setOpportunitieCount } = CrmAnalatics.actions

export default CrmAnalatics.reducer