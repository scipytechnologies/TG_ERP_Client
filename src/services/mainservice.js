import apicall from "./interceptor";

////////////////////////////////////////////{User Api}////////////////////////////////////////////////////
async function Login(data) {
    // console.log(data);
    const response = await apicall.apicall("post", 5000, "signin", data);
    return response;
}
async function SignUp(data) {
    // console.log(data);
    const response = await apicall.apicall("post", 5000, "signup", data);
    return response;
}
async function Auth(data) {
    // console.log(data);
    const response = await apicall.apicall("post", 5000, "auth", data);
    return response;
}
async function Index(data) {
    const response = await apicall.apicall("post", 5000, "index/createIndex", data)
    return response;
}

async function AddIndex(id, data) {
    const response = await apicall.apicall("put", 5000, `companyRoute/editCompany/${id}`, data)
    return response
}

async function GetIndexbyId(id) {
    const response = await apicall.apicall("get", 5000, `index/getindexbyid/${id}`)
    return response
}

async function GetUserById(id) {
    const response = await apicall.apicall("get", 5000, `getuser/${id}`)
    return response
}


///////////////////////////////////////////////{Company Api}/////////////////////////////////////////////

async function RegisterCompany(data) {
    const response = await apicall.apicall("post", 5000, "companyRoute/addCompany", data)
    return response
}
async function InitializeCompany(id, data) {
    const response = await apicall.apicall("put", 5000, `initializeCompany/${id}`, data)
    return response;
}
async function GetCompanyById(id) {
    const response = await apicall.apicall("get", 5000, `companyRoute/getidCompany/${id}`)
    return response
}

//////////////////////////////////////{CRM-Account}////////////////////////////////////

async function createAccountCollection(data) {
    const response = await apicall.apicall("post", 5001, "crm/accountRoute/createAccountCollection", data)
    return response
}

async function createAccount(data, id) {
    const response = await apicall.apicall("post", 5001, `crm/accountRoute/createAccount/${id}`, data)
    return response

}
async function accountDetails(id) {
    const response = await apicall.apicall("get", 5001, `crm/accountRoute/getEmployee/${id}`)
    return response

}
/////////////////////////////////////////{CRM-Appointment}//////////////////////////////

async function createAppointmentCollection(data) {
    const response = await apicall.apicall("post",5001,"crm/appointmentRoute/createAppointmentCollection",data)
    const response = await apicall.apicall("post", 5001, "appointmentRoute/createAppointmentCollection", data)
    return response
}

async function createAppointment(data,id) {
    const response = await apicall.apicall("post", 5001, `crm/appointmentRoute/appointment/${id}`, data)
async function createAppointment(data, id) {
    const response = await apicall.apicall("post", 5001, `appointmentRoute/appointment/${id}`, data)
    return response

}
async function appointmentDetails(id) {
    const response = await apicall.apicall("get", 5001, `crm/appointmentRoute/getAppointment/${id}`)
    return response

}
////////////////////////////////{CRM-Customer}////////////////////////////////////

async function createCustomerCollection(data) {
    const response = await apicall.apicall("post",5001,"crm/customer/addCustomerCollection",data)
    const response = await apicall.apicall("post", 5001, "customer/addCustomerCollection", data)
    return response
}

async function createCustomer(data,id) {
    const response = await apicall.apicall("post", 5001, `crm/customer/customer/${id}`, data)
async function createCustomer(data, id) {
    const response = await apicall.apicall("post", 5001, `customer/customer/${id}`, data)
    return response

}
async function customerList(id) {
    const response = await apicall.apicall("get", 5001, `crm/customer/getCustomer/${id}`)
    return response
}


//////////////////////////////////////{CRM-Opportunity}////////////////////////////////////////

async function createOpportunityCollection(data) {
    const response = await apicall.apicall("post",5001,"crm/opportunity/createOpportunityCollection",data)
    const response = await apicall.apicall("post", 5001, "opportunityRoute/createOpportunityCollection", data)
    return response
}

async function createOpportunity(data,id) {
    const response = await apicall.apicall("post", 5001, `crm/opportunity/createOpportunity/${id}`, data)
async function createOpportunity(data, id) {
    const response = await apicall.apicall("post", 5001, `opportunityRoute/createOpportunity/${id}`, data)
    return response

}
async function opportunityDetails(id) {
    const response = await apicall.apicall("get", 5001, `crm/opportunity/getOpportunity/${id}`)
    return response

}
//////////////////////////////////////{Employee}/////////////////////////////////////////////

async function createEmployeeCollection(data) {
    const response = await apicall.apicall("post",5002,"hrm/employee/createEmployeeCollection",data)
    const response = await apicall.apicall("post", 5002, "employeeRoute/createEmployeeCollection", data)
    return response
}

async function addEmployee(data,id) {
    const response = await apicall.apicall("post", 5002, `hrm/employee/addEmployee/${id}`, data)
async function addEmployee(data, id) {
    const response = await apicall.apicall("post", 5002, `employeeRoute/addEmployee/${id}`, data)
    return response

}
async function employeeDetails(id){
    const response = await apicall.apicall("get",5002,`hrm/employee/getEmployee/${id}`)
async function employeeDetails(id) {
    const response = await apicall.apicall("get", 5002, `employeeRoute/getEmployee/${id}`)
    return response

}
////////////////////////////////////////{Inventory management}//////////////////////////////////

async function createInventorymanagementCollection(data) {
    const response = await apicall.apicall("post", 5003, "inventorymanagementRoute/createInventorymanagementCollection", data)
    return response
}

async function addInventorymanagementDetails(data, id) {
    const response = await apicall.apicall("post", 5003, `inventorymanagementRoute/addInventorymanagementDetails/${id}`, data)
    return response

}
async function getInventorymanagementDetails(id) {
    const response = await apicall.apicall("get", 5003, `inventorymanagementRoute/getidInventorymanagementDetails/${id}`)
    return response

}
//////////////////////////////////////////{PRJ management}///////////////////////////////////////

async function createPrjmanagerCollection(data) {
    const response = await apicall.apicall("post", 5004, "prjmanagerRoute/createPrjmanagerCollection", data)
    return response
}

async function addPrjmanagerDetails(data, id) {
    const response = await apicall.apicall("post", 5004, `prjmanagerRoute/addPrjmanagerDetails/${id}`, data)
    return response

}
async function getPrjmanagerDetails(id) {
    const response = await apicall.apicall("get", 5004, `prjmanagerRoute/getidPrjmanagerDetails/${id}`)
    return response

}
//////////////////////////////////{Product}//////////////////////////////////////////

async function createProductCollection(data) {
    const response = await apicall.apicall("post", 5005, "productRoute/createProductCollection", data)
    return response
}

async function addProductDetails(data, id) {
    const response = await apicall.apicall("post", 5005, `productRoute/addProductDetails/${id}`, data)
    return response

}
async function getProductDetails(id) {
    const response = await apicall.apicall("get", 5005, `productRoute/getidProductDetails/${id}`)
    return response

}
//////////////////////////////////////{Purchase Module}////////////////////////////////////////////

async function createPurchaseCollection(data) {
    const response = await apicall.apicall("post", 5006, "purchaseRoute/createPurchaseCollection", data)
    return response
}

async function purchase(data, id) {
    const response = await apicall.apicall("post", 5006, `purchaseRoute/purchase/${id}`, data)
    return response

}
async function purchasedetails(id) {
    const response = await apicall.apicall("get", 5006, `purchaseRoute/getPurchase/${id}`)
    return response

}
/////////////////////////////////////{RFQ-purchaseitem}////////////////////////////////////////////////

async function createPurchaseitemCollection(data) {
    const response = await apicall.apicall("post", 5007, "purchaseitemRoute/createPurchaseitemCollection", data)
    return response
}

async function purchaseitem(data, id) {
    const response = await apicall.apicall("post", 5007, `purchaseitemRoute/purchaseitem/${id}`, data)
    return response

}
async function purchaseitemdetails(id) {
    const response = await apicall.apicall("get", 5007, `purchaseitemRoute/getPurchaseitem/${id}`)
    return response

}
//////////////////////////////////{RFQ-purchaseorder}////////////////////////////////////

async function createPurchaseorderCollection(data) {
    const response = await apicall.apicall("post", 5007, "purchaseorderRoute/createPurchaseorderCollection", data)
    return response
}

async function purchaseorder(data, id) {
    const response = await apicall.apicall("post", 5007, `purchaseorderRoute/purchaseorder/${id}`, data)
    return response

}
async function purchaseorderdetails(id) {
    const response = await apicall.apicall("get", 5007, `purchaseorderRoute/getPurchaseorder/${id}`)
    return response

}
/////////////////////////////////{RFQ}//////////////////////////////////////

async function createRfqCollection(data) {
    const response = await apicall.apicall("post", 5007, "rfqRoute/createRfqCollection", data)
    return response
}
async function rfq(data, id) {
    const response = await apicall.apicall("post", 5007, `rfqRoute/rfq/${id}`, data)
    return response

}
async function rfqdetails(id) {
    const response = await apicall.apicall("get", 5007, `rfqRoute/getrfq/${id}`)
    return response

}
/////////////////////////////////////{RFQ-Vendor}/////////////////////////////////////////

async function createVendorCollection(data) {
    const response = await apicall.apicall("post", 5007, "vendorRoute/createVendorCollection", data)
    return response
}
async function vendor(data, id) {
    const response = await apicall.apicall("post", 5007, `vendorRoute/vendor/${id}`, data)
    return response

}
async function vendordetails(id) {
    const response = await apicall.apicall("get", 5007, `vendorRoute/getvendor/${id}`)
    return response

}
/////////////////////////////////{Sales-invoice}//////////////////////////////////

async function createInvoiceCollection(data) {
    const response = await apicall.apicall("post", 5008, "invoiceRoute/createInvoiceCollection", data)
    return response
}

async function invoice(data, id) {
    const response = await apicall.apicall("post", 5008, `invoiceRoute/invoice/${id}`, data)
    return response

}
async function invoicedetails(id) {
    const response = await apicall.apicall("get", 5008, `invoiceRoute/getInvoice/${id}`)
    return response

}
///////////////////////////////{Sales-sales}/////////////////////////////////////

async function createSalesCollection(data) {
    const response = await apicall.apicall("post", 5008, "salesRoute/createSalesCollection", data)
    return response
}

async function sales(data, id) {
    const response = await apicall.apicall("post", 5008, `salesRoute/sales/${id}`, data)
    return response

}
async function salesdetails(id) {
    const response = await apicall.apicall("get", 5008, `salesRoute/getSales/${id}`)
    return response

}

///////////////////////////////{Notification}/////////////////////////////////////
async function createNotificationCollection(data) {
    const response = await apicall.apicall("post", 5009, "notification/addNotificationCollection", data)
    return response
}

async function postNotification(data, id) {
    const response = await apicall.apicall("post", 5009, `notification/postNotification/${id}`, data)
    return response

}
async function getNotification(id) {
    const response = await apicall.apicall("get", 5009, `notification/getNotification/${id}`)
    return response

}


async function CategoriesInHome() {
    const response = await apicall.apicall("get", "CategoriesInHome", "");
    return response;
}
async function MainProductsInHome() {
    const response = await apicall.apicall("get", "MainProductsInHome", "");
    return response;
}
async function LatestProductsInHome() {
    const response = await apicall.apicall("get", "LatestProductsInHome", "");
    return response;
}
async function RandomProductsInHome() {
    const response = await apicall.apicall("get", "RandomProductsInHome", "");
    return response;
}
async function CategoriesWithProductsForHome() {
    const response = await apicall.apicall("get", "CategoriesWithProductsForHome", "");
    return response;
}
async function TopSellingProductsInHome() {
    const response = await apicall.apicall("get", "TopSellingProductsInHome", "");
    return response;
}
async function OffersInHome() {
    const response = await apicall.apicall("get", "OffersInHome", "");
    return response;
}

export default {
    Auth, SignUp, Login, GetUserById, Index, AddIndex, GetIndexbyId, RegisterCompany, GetCompanyById, InitializeCompany, MainProductsInHome, CategoriesInHome, LatestProductsInHome, RandomProductsInHome, CategoriesWithProductsForHome, TopSellingProductsInHome, OffersInHome,
    createAccount, createAppointment, createCustomerCollection, createCustomer, createOpportunity, addEmployee, addInventorymanagementDetails, addPrjmanagerDetails, addProductDetails, purchase, purchaseitem, purchaseorder, rfq, invoice, sales,
    accountDetails, appointmentDetails, customerList, opportunityDetails, employeeDetails, getInventorymanagementDetails, getPrjmanagerDetails, getProductDetails, purchasedetails, purchaseitemdetails, purchaseorderdetails,
    rfqdetails, invoicedetails, salesdetails, createEmployeeCollection, createInventorymanagementCollection, createPrjmanagerCollection, createProductCollection, createPurchaseCollection, createPurchaseitemCollection, createPurchaseorderCollection,
    createRfqCollection, createInvoiceCollection, createSalesCollection, createAccountCollection, createAppointmentCollection, createOpportunityCollection, createVendorCollection, vendor, vendordetails, createNotificationCollection, postNotification, getNotification
};

