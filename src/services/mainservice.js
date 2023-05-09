import apicall from "./interceptor";




////////////////////////////////////////////{User Api}////////////////////////////////////////////////////
async function Login(data) {
    // console.log(data);
    const response = await apicall.apicall("post",5000,"signin",data);
    return response;
}
async function SignUp(data) {
    // console.log(data);
    const response = await apicall.apicall("post",5000,"signup",data);
    return response;
}
async function Auth(data) {
    // console.log(data);
    const response = await apicall.apicall("post",5000,"auth",data);
    return response;
}



///////////////////////////////////////////////{Company Api}/////////////////////////////////////////////

async function RegisterCompany(data){
    const response = await apicall.apicall("post",5000,"companyRoute/addCompany",data)
    return response
}
async function InitializeCompany(id,data) {
    const response = await apicall.apicall("put",5000,`initializeCompany/${id}`,data)
    return response;
}

//////////////////////////////////////{CRM-Account}////////////////////////////////////

async function createAccount(data){
    const response = await apicall.apicall("post",5001,"accountRoute/createAccount",data)
    return response

}
async function accountDetails(data){
    const response = await apicall.apicall("get",5001,"accountRoute/getAccount",data)
    return response

}
/////////////////////////////////////////{CRM-Appointment}//////////////////////////////

async function createAppointment(data){
    const response = await apicall.apicall("post",5001,"appointmentRoute/appointment",data)
    return response

}
async function appointmentDetails(data){
    const response = await apicall.apicall("get",5001,"appointmentRoute/appointmentdetails",data)
    return response

}
////////////////////////////////{CRM-Customer}////////////////////////////////////

async function createCustomer(data){
    const response = await apicall.apicall("post",5001,"customerRoute/customer",data)
    return response

}
async function customerDetails(data){
    const response = await apicall.apicall("get",5001,"customerRoute/customerdetails",data)
    return response

}
//////////////////////////////////////{CRM-Opportunity}////////////////////////////////////////

async function createOpportunity(data){
    const response = await apicall.apicall("post",5001,"opportunityRoute/createOpportunity",data)
    return response

}
async function opportunityDetails(data){
    const response = await apicall.apicall("get",5001,"opportunityRoute/opportunityDetails",data)
    return response

}
//////////////////////////////////////{Employee}/////////////////////////////////////////////

async function AddEmployee(data){
    const response = await apicall.apicall("post",5002,"employeeRoute/addEmployee",data)
    return response

}
////////////////////////////////////////{Inventory management}//////////////////////////////////

async function addInventorymanagementDetails(data){
    const response = await apicall.apicall("post",5003,"inventorymanagementRoute/addInventorymanagementDetails",data)
    return response

}
//////////////////////////////////////////{PRJ management}///////////////////////////////////////

async function addPrjmanagerDetails(data){
    const response = await apicall.apicall("post",5004,"prjmanagerRoute/addPrjmanagerDetails",data)
    return response

}
//////////////////////////////////{Product}//////////////////////////////////////

async function addProductDetails(data){
    const response = await apicall.apicall("post",5005,"productRoute/addProductDetails",data)
    return response

}
//////////////////////////////////////{Purchase Module}////////////////////////////////////////////

async function purchase(data){
    const response = await apicall.apicall("post",5006,"purchaseRoute/purchase",data)
    return response

}
/////////////////////////////////////{RFQ-purchaseitem}////////////////////////////////////////////////

async function purchaseitem(data){
    const response = await apicall.apicall("post",5007,"purchaseitemRoute/purchaseitem",data)
    return response

}
//////////////////////////////////{RFQ-purchaseorder}////////////////////////////////////

async function purchaseorder(data){
    const response = await apicall.apicall("post",5007,"purchaseorderRoute/purchaseorder",data)
    return response

}
/////////////////////////////////{RFQ}//////////////////////////////////////

async function rfq(data){
    const response = await apicall.apicall("post",5007,"rfqRoute/rfq",data)
    return response

}
/////////////////////////////////{Sales-invoice}//////////////////////////////////

async function invoice(data){
    const response = await apicall.apicall("post",5008,"invoiceRoute/invoice",data)
    return response

}
///////////////////////////////{Sales-sales}/////////////////////////////////////

async function sales(data){
    const response = await apicall.apicall("post",5008,"salesRoute/sales",data)
    return response

}



async function CategoriesInHome() {
    const response = await apicall.apicall("get", "CategoriesInHome","");
    return response;
}
async function MainProductsInHome() {
    const response = await apicall.apicall("get", "MainProductsInHome","");
    return response;
}
async function LatestProductsInHome() {
    const response = await apicall.apicall("get", "LatestProductsInHome","");
    return response;
}
async function RandomProductsInHome() {
    const response = await apicall.apicall("get", "RandomProductsInHome","");
    return response;
}
async function CategoriesWithProductsForHome() {
    const response = await apicall.apicall("get", "CategoriesWithProductsForHome","");
    return response;
}
async function TopSellingProductsInHome() {
    const response = await apicall.apicall("get", "TopSellingProductsInHome","");
    return response;
}
async function OffersInHome() {
    const response = await apicall.apicall("get", "OffersInHome","");
    return response;
}

    export default {Auth,SignUp,Login,RegisterCompany,InitializeCompany,MainProductsInHome,CategoriesInHome,LatestProductsInHome,RandomProductsInHome,CategoriesWithProductsForHome,TopSellingProductsInHome,OffersInHome,
    createAccount,createAppointment,createCustomer,createOpportunity,AddEmployee,addInventorymanagementDetails,addPrjmanagerDetails,addProductDetails,purchase,purchaseitem,purchaseorder,rfq,invoice,sales,
    accountDetails,appointmentDetails,customerDetails,opportunityDetails,};
    