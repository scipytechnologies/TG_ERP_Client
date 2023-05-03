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
    return res

}
/////////////////////////////////////////{CRM-Appointment}//////////////////////////////

async function createAppointment(data){
    const response = await apicall.apicall("post",5002,"appointmentRoute/appointment",data)
    return res

}
////////////////////////////////{CRM-Customer}////////////////////////////////////

async function createCustomer(data){
    const response = await apicall.apicall("post",5003,"customerRoute/customer",data)
    return res

}
//////////////////////////////////////{CRM-Opportunity}////////////////////////////////////////

async function createOpportunity(data){
    const response = await apicall.apicall("post",5004,"opportunityRoute/createOpportunity",data)
    return res

}
//////////////////////////////////////{Employee}/////////////////////////////////////////////

async function AddEmployee(data){
    const response = await apicall.apicall("post",5005,"employeeRoute/addEmployee",data)
    return res

}
////////////////////////////////////////{Inventory management}//////////////////////////////////

async function addInventorymanagementDetails(data){
    const response = await apicall.apicall("post",5006,"inventorymanagementRoute/addInventorymanagementDetails",data)
    return res

}
//////////////////////////////////////////{PRJ management}///////////////////////////////////////

async function addPrjmanagerDetails(data){
    const response = await apicall.apicall("post",5007,"prjmanagerRoute/addPrjmanagerDetails",data)
    return res

}
//////////////////////////////////{Product}//////////////////////////////////////

async function addProductDetails(data){
    const response = await apicall.apicall("post",5008,"productRoute/addProductDetails",data)
    return res

}
//////////////////////////////////////{Purchase Module}////////////////////////////////////////////

async function purchase(data){
    const response = await apicall.apicall("post",5009,"purchaseRoute/purchase",data)
    return res

}
/////////////////////////////////////{}////////////////////////////////////////////////








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
    createAccount,createAppointment,createCustomer,createOpportunity,AddEmployee,addInventorymanagementDetails,addPrjmanagerDetails,addProductDetails,purchase,};
    