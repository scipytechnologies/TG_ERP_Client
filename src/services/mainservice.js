import { data } from "jquery";
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
    const response = await apicall.apicall("post", 5001, "crm/appointmentRoute/createAppointmentCollection", data)

    return response
}

async function createAppointment(data, id) {
    const response = await apicall.apicall("post", 5001, `crm/appointmentRoute/appointment/${id}`, data)

    return response

}
async function appointmentDetails(id) {
    const response = await apicall.apicall("get", 5001, `crm/appointmentRoute/getAppointment/${id}`)
    return response

}
////////////////////////////////{CRM-Customer}////////////////////////////////////

async function createCustomerCollection(data) {
    const response = await apicall.apicall("post", 5001, "crm/customer/addCustomerCollection", data)

    return response
}

async function createCustomer(data, id) {
    const response = await apicall.apicall("post", 5001, `crm/customer/customer/${id}`, data)
    return response

}
async function customerList(id) {
    const response = await apicall.apicall("get", 5001, `crm/customer/getCustomer/${id}`)
    return response
}
async function updateCustomer(companyID,id,data) {
    const response = await apicall.apicall("put", 5001, `crm/customer/updateCustomer/${companyID}/${id}`,data)
    return response
}


async function deletecustomer(companyID,id) {
    const response = await apicall.apicall("delete", 5001, `crm/customer/deleteCustomer/${companyID}/${id}`)
    return response
}

async function customerById(companyID,id) {
    const response = await apicall.apicall("get", 5001, `crm/customer/getCoustomerbyid/${companyID}/${id}`)
    return response
}
//////////////////////////////////////{CRM-Opportunity}////////////////////////////////////////

async function createOpportunityCollection(data) {
    const response = await apicall.apicall("post", 5001, "crm/opportunity/createOpportunityCollection", data)

    return response
}

async function createOpportunity(data, id) {
    const response = await apicall.apicall("post", 5001, `crm/opportunity/createOpportunity/${id}`, data)
    return response

}
async function opportunityDetails(id) {
    const response = await apicall.apicall("get", 5001, `crm/opportunity/getOpportunity/${id}`)
    return response
}
async function deleteopportunity(companyID,id) {
    const response = await apicall.apicall("delete", 5001, `crm/opportunity/deleteOpportunity/${companyID}/${id}`)
    return response
}
async function followup(companyID,id,data) {
    const response = await apicall.apicall("put", 5001, `crm/opportunity/followup/${companyID}/${id}`,data)
    return response
}

//////////////////////////////////////{Employee}/////////////////////////////////////////////

async function createEmployeeCollection(data) {
    const response = await apicall.apicall("post", 5002, "hrm/employee/createEmployeeCollection", data)

    return response
}

async function addEmployee(data, id) {
    const response = await apicall.apicall("post", 5002, `hrm/employee/addEmployee/${id}`, data)

    return response

}
async function employeeDetails(id) {
    const response = await apicall.apicall("get", 5002, `hrm/employee/getEmployee/${id}`)

    return response

}
async function deleteEmployee(companyID,id) {
    const response = await apicall.apicall("delete", 5002, `hrm/employee/deleteEmployee/${companyID}/${id}`)
    return response
}
async function getEmployee(companyID,id) {
    const response = await apicall.apicall("get", 5002, `hrm/employee/getEmployeeById/${companyID}/${id}`)
    return response
}
async function editEmployee(companyID,id,data) {
    const response = await apicall.apicall("put", 5002, `hrm/employee/editEmployee/${companyID}/${id}`,data)
    return response
}
////////////////////////////////////////{Inventory management}//////////////////////////////////

async function createInventorymanagementCollection(data) {
    const response = await apicall.apicall("post", 5003, "inventory/inventorymanagementRoute/createInventorymanagementCollection", data)
    return response
}

async function addInventorymanagementDetails(data, id) {
    const response = await apicall.apicall("post", 5003, `inventory/inventorymanagementRoute/addInventorymanagementDetails/${id}`, data)
    return response

}
async function getInventorymanagementDetails(id) {
    const response = await apicall.apicall("get", 5003, `inventory/inventorymanagementRoute/getidInventorymanagementDetails/${id}`)
    return response

}
async function deleteInventorymanagementDetails(companyID,id) {
    const response = await apicall.apicall("delete", 5003, `inventory/inventorymanagementRoute/deleteInventorymanagementDetails/${companyID}/${id}`)
    return response
}
async function getidInventorymanagementDetails(companyID,id) {
    const response = await apicall.apicall("get", 5003, `inventory/inventorymanagementRoute/getInventorymanagementDetailsById/${companyID}/${id}`)
    return response
}
async function editInventorymanagementDetails(companyID,id,data) {
    const response = await apicall.apicall("put", 5003, `inventory/inventorymanagementRoute/editInventorymanagementDetails/${companyID}/${id}`,data)
    return response
}
//////////////////////////////////////////{PRJ management}///////////////////////////////////////

async function createPrjmanagerCollection(data) {
    const response = await apicall.apicall("post", 5004, "project/prjmanagerRoute/createPrjmanagerCollection", data)
    return response
}

async function addPrjmanagerDetails(data, id) {
    const response = await apicall.apicall("post", 5004, `project/prjmanagerRoute/addPrjmanagerDetails/${id}`, data)
    return response

}
async function getPrjmanagerDetails(id) {
    const response = await apicall.apicall("get", 5004, `project/prjmanagerRoute/getidPrjmanagerDetails/${id}`)
    return response

}
async function deletePrjmanagerDetails(companyID,id) {
    const response = await apicall.apicall("delete", 5004, `project/prjmanagerRoute/deletePrjmanagerDetails/${companyID}/${id}`)
    return response
}
async function getPrjmanagerDetailsById(companyID,id) {
    const response = await apicall.apicall("get", 5004, `project/prjmanagerRoute/getidPrjmanagerDetailsById/${companyID}/${id}`)
    return response
}
async function editPrjmanagerDetails(companyID,id,data) {
    const response = await apicall.apicall("put", 5004, `project/prjmanagerRoute/editPrjmanagerDetails/${companyID}/${id}`,data)
    return response
}
//////////////////////////////////{Product}//////////////////////////////////////////

async function createProductCollection(data) {
    const response = await apicall.apicall("post", 5005, "product/productRoute/createProductCollection", data)
    return response
}

async function addProductDetails(data, id) {
    const response = await apicall.apicall("post", 5005, `product/productRoute/addProductDetails/${id}`, data)
    return response

}
async function getProductDetails(id) {
    const response = await apicall.apicall("get", 5005, `product/productRoute/getidProductDetails/${id}`)
    return response

}
async function deleteProductDetails(companyID,id) {
    const response = await apicall.apicall("delete", 5005, `product/productRoute/deleteProductDetails/${companyID}/${id}`)
    return response
}
//////////////////////////////////////{Purchase Module}////////////////////////////////////////////

async function createPurchaseCollection(data) {
    const response = await apicall.apicall("post", 5006, "purchase/purchaseRoute/createPurchaseCollection", data)
    return response
}

async function purchase(data, id) {
    const response = await apicall.apicall("post", 5006, `purchase/purchaseRoute/purchase/${id}`, data)
    return response

}
async function purchasedetails(id) {
    const response = await apicall.apicall("get", 5006, `purchase/purchaseRoute/getPurchase/${id}`)
    return response

}
async function deletePurchase(companyID,id) {
    const response = await apicall.apicall("delete", 5006, `purchase/purchaseRoute/deletePurchase/${companyID}/${id}`)
    return response
}
async function getPurchaseById(companyID,id) {
    const response = await apicall.apicall("get", 5006, `purchase/purchaseRoute/getPurchaseById/${companyID}/${id}`)
    return response
}
async function updatePurchase(companyID,id,data) {
    const response = await apicall.apicall("put", 5006, `purchase/purchaseRoute/updatePurchase/${companyID}/${id}`,data)
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
async function deletePurchaseitem(companyID,id) {
    const response = await apicall.apicall("delete", 5007, `purchaseitemRoute/deletePurchaseitem/${companyID}/${id}`)
    return response
}
async function getPurchaseitemById(companyID,id) {
    const response = await apicall.apicall("get", 5007, `purchaseitemRoute/getPurchaseitemById/${companyID}/${id}`)
    return response
}
async function updatePurchaseitem(companyID,id,data) {
    const response = await apicall.apicall("put", 5007, `purchaseitemRoute/updatePurchaseitem/${companyID}/${id}`,data)
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
async function deletePurchaseorder(companyID,id) {
    const response = await apicall.apicall("delete", 5007, `purchaseorderRoute/deletePurchaseorder/${companyID}/${id}`)
    return response
}
async function getPurchaseorderid(companyID,id) {
    const response = await apicall.apicall("get", 5007, `purchaseorderRoute/getPurchaseorderById/${companyID}/${id}`)
    return response
}
async function updatePurchaseorder(companyID,id,data) {
    const response = await apicall.apicall("put", 5007, `purchaseorderRoute/updatePurchaseorder/${companyID}/${id}`,data)
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
async function deleterfq(companyID,id) {
    const response = await apicall.apicall("delete", 5007, `rfqRoute/deleterfq/${companyID}/${id}`)
    return response
}
async function getRFQ(companyID,id) {
    const response = await apicall.apicall("get", 5007, `rfqRoute/getrfqById/${companyID}/${id}`)
    return response
}
async function updaterfq(companyID,id,data) {
    const response = await apicall.apicall("put", 5007, `rfqRoute/updaterfq/${companyID}/${id}`,data)
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
async function deletevendor(companyID,id) {
    const response = await apicall.apicall("delete", 5007, `vendorRoute/deletevendor/${companyID}/${id}`)
    return response
}
async function getvendorById(companyID,id) {
    const response = await apicall.apicall("get", 5007, `vendorRoute/getvendorById/${companyID}/${id}`)
    return response
}
async function updatevendor(companyID,id,data) {
    const response = await apicall.apicall("put", 5007, `vendorRoute/updatevendor/${companyID}/${id}`,data)
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
async function deleteInvoice(companyID,id) {
    const response = await apicall.apicall("delete", 5008, `invoiceRoute/deleteInvoice/${companyID}/${id}`)
    return response
}
async function getInvoiceById(companyID,id) {
    const response = await apicall.apicall("get", 5008, `invoiceRoute/getInvoiceById/${companyID}/${id}`)
    return response
}
async function updateInvoice(companyID,id,data) {
    const response = await apicall.apicall("put", 5008, `invoiceRoute/updateInvoice/${companyID}/${id}`,data)
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
async function deleteSales(companyID,id) {
    const response = await apicall.apicall("delete", 5008, `salesRoute/deleteSales/${companyID}/${id}`)
    return response
}
async function getSalesById(companyID,id) {
    const response = await apicall.apicall("get", 5008, `salesRoute/getSalesById/${companyID}/${id}`)
    return response
}
async function updateSales(companyID,id,data) {
    const response = await apicall.apicall("put", 5008, `salesRoute/updateSales/${companyID}/${id}`,data)
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
    Auth, SignUp, Login, GetUserById, Index, AddIndex, GetIndexbyId,
     RegisterCompany, GetCompanyById, InitializeCompany, MainProductsInHome, CategoriesInHome, LatestProductsInHome, RandomProductsInHome, CategoriesWithProductsForHome, TopSellingProductsInHome, OffersInHome,
    createAccount, createAppointment, createCustomerCollection, createCustomer,customerById ,updateCustomer, createOpportunity, addEmployee, addInventorymanagementDetails, addPrjmanagerDetails, addProductDetails, purchase, purchaseitem, purchaseorder, rfq, invoice, sales,
    accountDetails, appointmentDetails, customerList, opportunityDetails ,followup, employeeDetails, getInventorymanagementDetails, getPrjmanagerDetails, getProductDetails, purchasedetails, purchaseitemdetails, purchaseorderdetails,
    rfqdetails, invoicedetails, salesdetails, createEmployeeCollection, createInventorymanagementCollection, createPrjmanagerCollection, createProductCollection, createPurchaseCollection, createPurchaseitemCollection, createPurchaseorderCollection,
    createRfqCollection, createInvoiceCollection, createSalesCollection, createAccountCollection, createAppointmentCollection, createOpportunityCollection, createVendorCollection, vendor, vendordetails, createNotificationCollection, postNotification, getNotification
    ,deletecustomer,deleteopportunity,deleteEmployee,deleteInventorymanagementDetails,deletePrjmanagerDetails,deleteProductDetails,deletePurchase,deletePurchaseitem,deletePurchaseorder,deleterfq,deletevendor,deleteInvoice,deleteSales,getEmployee,editEmployee,editInventorymanagementDetails,getidInventorymanagementDetails,
    getInvoiceById,updateInvoice,getRFQ,updaterfq,getPurchaseitemById,updatePurchaseitem,getPurchaseorderid,updatePurchaseorder,getvendorById,updatevendor,getPrjmanagerDetailsById,editPrjmanagerDetails,getSalesById,updateSales,getPurchaseById,updatePurchase
};

