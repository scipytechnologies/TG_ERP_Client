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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


















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

    export default {Auth,SignUp,Login,RegisterCompany,InitializeCompany,MainProductsInHome,CategoriesInHome,LatestProductsInHome,RandomProductsInHome,CategoriesWithProductsForHome,TopSellingProductsInHome,OffersInHome};
    