import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  CrmID: '',
  AppointmentID: '',
  OpportunityID: '',
  EmployeeID: '',
  InventoryID: '',
  InvoiceID: '',
  PRJID: '',
  RFQID: '',
  PurchaseitemID: '',
  PurchaseorderID: '',
  PurchaseID: '',
  SalesID: '',
  VendorID: '',
  NotificationID: '',
}

export const IndexSlice = createSlice({
  name: 'index',
  initialState,
  reducers: {
    setindex: (state, action) => {
      const { CrmID, AppointmentID, OpportunityID, EmployeeID, InventoryID, InvoiceID, PRJID, RFQID, PurchaseitemID, PurchaseorderID, PurchaseID, SalesID, VendorID, NotificationID } = action.payload;
      state.CrmID = CrmID;
      state.AppointmentID = AppointmentID;
      state.OpportunityID = OpportunityID;
      state.EmployeeID = EmployeeID;
      state.InventoryID = InventoryID;
      state.InvoiceID = InvoiceID;
      state.PRJID = PRJID;
      state.RFQID = RFQID;
      state.PurchaseitemID = PurchaseitemID;
      state.PurchaseorderID = PurchaseorderID;
      state.PurchaseID = PurchaseID;
      state.SalesID = SalesID;
      state.VendorID = VendorID;
      state.NotificationID = NotificationID;
    }

  }
})

// Action creators are generated for each case reducer function
export const { setindex } = IndexSlice.actions

export default IndexSlice.reducer