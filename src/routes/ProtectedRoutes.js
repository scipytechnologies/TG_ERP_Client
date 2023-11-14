import React from "react";

// Dashboard
import EventManagement from "../dashboard/EventManagement";
import SalesMonitoring from "../dashboard/SalesMonitoring";
import WebsiteAnalytics from "../dashboard/WebsiteAnalytics";
import FinanceMonitoring from "../dashboard/FinanceMonitoring";
import Cryptocurrency from "../dashboard/Cryptocurrency";
import HelpdeskService from "../dashboard/HelpdeskService";
import StorageManagement from "../dashboard/StorageManagement";
import ProductManagements from "../dashboard/ProductManagement";

// Apps
import GalleryMusic from "../apps/GalleryMusic";
import GalleryVideo from "../apps/GalleryVideo";
import Tasks from "../apps/Tasks";
import Contacts from "../apps/Contacts";
import Chat from "../apps/Chat";
import AppCalendar from "../apps/AppCalendar";
import Email from "../apps/Email";
import FileManager from "../apps/FileManager";

// Pages
import Pricing from "../pages/Pricing";
import Faq from "../pages/Faq";
import Profile from "../pages/Profile";
import People from "../pages/People";
import Activity from "../pages/Activity";
import Events from "../pages/Events";
import Settings from "../pages/Settings";

// UI Elements
import LayoutColumns from "../docs/LayoutColumns";
import LayoutGrid from "../docs/LayoutGrid";
import LayoutGutters from "../docs/LayoutGutters";
import Accordions from "../docs/Accordions";
import Alerts from "../docs/Alerts";
import Avatars from "../docs/Avatars";
import Badges from "../docs/Badges";
import Breadcrumbs from "../docs/Breadcrumbs";
import Buttons from "../docs/Buttons";
import Cards from "../docs/Cards";
import Carousels from "../docs/Carousels";
import Dropdowns from "../docs/Dropdowns";
import Images from "../docs/Images";
import Listgroup from "../docs/Listgroup";
import Markers from "../docs/Markers";
import Modals from "../docs/Modals";
import NavTabs from "../docs/NavTabs";
import OffCanvas from "../docs/OffCanvas";
import Paginations from "../docs/Paginations";
import Placeholders from "../docs/Placeholders";
import Popovers from "../docs/Popovers";
import Progress from "../docs/Progress";
import Spinners from "../docs/Spinners";
import Toasts from "../docs/Toasts";
import Tooltips from "../docs/Tooltips";
import Tables from "../docs/Tables";
import FormElements from "../docs/FormElements";
import FormSelects from "../docs/FormSelects";
import FormChecksRadios from "../docs/FormChecksRadios";
import FormRange from "../docs/FormRange";
import FormPickers from "../docs/FormPickers";
import FormLayouts from "../docs/FormLayouts";
import UtilBackground from "../docs/UtilBackground";
import UtilBorder from "../docs/UtilBorder";
import UtilColors from "../docs/UtilColors";
import UtilDivider from "../docs/UtilDivider";
import UtilFlex from "../docs/UtilFlex";
import UtilSizing from "../docs/UtilSizing";
import UtilSpacing from "../docs/UtilSpacing";
import UtilOpacity from "../docs/UtilOpacity";
import UtilPosition from "../docs/UtilPosition";
import UtilTypography from "../docs/UtilTypography";
import UtilShadows from "../docs/UtilShadows";
import UtilExtras from "../docs/UtilExtras";
import ApexCharts from "../docs/ApexCharts";
import ChartJs from "../docs/ChartJs";
import MapLeaflet from "../docs/MapLeaflet";
import MapVector from "../docs/MapVector";
import IconRemix from "../docs/IconRemix";
import IconFeather from "../docs/IconFeather";


// scenes
import Home from "../dashboard/Home";
import CompanyRegistration from "../scenes/company/CompanyRegistraton"
import CRM from "../scenes/crm/CRM"
import Opportunity from "../scenes/crm/Opportunity"
import Appoinment from "../scenes/crm/Appoinment"
import Customer from "../scenes/crm/Customer"
import AddCrm from "../scenes/crm/AddCrm"
import AddOpportunity from "../scenes/crm/AddOpportunity"
import AddAppoinment from "../scenes/crm/AddAppoinment"
import HRM from "../scenes/hrm/HRM"
import ViewHrm from "../scenes/hrm/HrManagement"
import AddHrm from "../scenes/hrm/AddHrm"
import Employee from "../scenes/employee/Employee"
import EmployeeManagement from "../scenes/employee/EmployeeManagement"
import AddEmployee from "../scenes/employee/AddEmployee"
import EmployeeProfile from "../scenes/employee/EmployeeProfile";

import ProductList from "../scenes/inventory/ProductManagement"
import Inventory from "../scenes/inventory/Inventory"
import AddProduct from "../scenes/inventory/AddProduct"
import ProductManagement from "../scenes/inventory/ProductManagement"
import Invoice from "../scenes/invoice/Invoice"
import AddInvoice from "../scenes/invoice/AddInvoice"
import OpportunityInvoice from "../scenes/invoice/Generate Invoice/Opportunity Invoice/OpportunityInvoice";

import InvoiceList from "../scenes/invoice/InvoiceList"
import RFQ from "../scenes/rfq/RFQ"
import AddRfq from "../scenes/rfq/AddRfq"
import PurchaseOrder from "../scenes/rfq/PurchaseOrder"
import PurchaseItem from "../scenes/rfq/PurchaseItem"
import RfqPurchaseList from "../scenes/rfq/RfqPurchaseList"
import RfqList from "../scenes/rfq/RfqList"
import RfqPurchaseOrder from "../scenes/rfq/RfqPurchaseOrder"
import PurchaseRequisition from "../scenes/rfq/PurchaseRequisition";
import Requisition from "../scenes/rfq/Requisition";

import Vendor from "../scenes/vendor/Vendor"
import AddVendor from "../scenes/vendor/AddVendor"


import Purchase from "../scenes/purchase/Purchase"
import AddPurchase from "../scenes/purchase/AddPurchase"
import PurchaseList from "../scenes/purchase/PurchaseList"

import AddSales from "../scenes/sales/AddSales";
import Sales from "../scenes/sales/Sales";
import SalesList from "../scenes/sales/SalesList";


import ProjectManagement from "../scenes/project managment/ProjectManagment";
import ProjectList from "../scenes/project managment/ProjectList";
import AddProject from "../scenes/project managment/AddProject";

import POS from "../scenes/pos/POS"

import Attendence from "../scenes/attendence/Attendence"
import VendorList from "../scenes/vendor/VendorList";
import Poscategory from "../scenes/pos/Category";
import PosProduct from "../scenes/pos/products";

import CustomForm from "../scenes/custom form/CustomForm";

import Admin from "../scenes/admin/Admin"
import Customers from "../scenes/admin/Customers"
import Gstform from "../scenes/admin/Gstform"
import GstList from "../scenes/admin/GstList"
import GstAuditfiles from "../scenes/GstAuditfile/GstAuditFile";
////////{Ecommerce}///////////////////////
import Ecommerce from "../scenes/Ecommerce/Ecommerces";

const protectedRoutes = [
  { path: "dashboard/home", element: <Home /> },
  // { path: "/registerCompany", element: <CompanyRegistration /> },
  //  { path: "dashboard/company-registration", element: <CompanyRegistration /> },
  { path: "dashboard/crm", element: <CRM /> },
  { path: "dashboard/crm/opportunity", element: <Opportunity /> },
  { path: "dashboard/crm/appoinment", element: <Appoinment /> },
  { path: "dashboard/crm/customer", element: <Customer /> },
  { path: "dashboard/crm/AddCrm", element: <AddCrm /> },
  { path: "dashboard/crm/AddAppoinment", element: <AddAppoinment /> },
  { path: "dashboard/crm/AddOpportunity", element: <AddOpportunity /> },
  { path: "dashboard/hrm", element: <HRM /> },
  { path: "dashboard/hrm/hrManagement", element: <ViewHrm /> },
  { path: "dashboard/hrm/AddHrm", element: <AddHrm /> },
  { path: "dashboard/employee", element: <Employee /> },
  { path: "dashboard/employee/employeeManagement", element: <EmployeeManagement /> },
  { path: "dashboard/employee/AddEmployee", element: <AddEmployee /> },
  { path: "dashboard/employee/EmployeeProfile", element: <EmployeeProfile /> },

  { path: "dashboard/inventory", element: <Inventory /> },
  { path: "dashboard/inventory/ProductManagement", element: <ProductManagement /> },
  { path: "dashboard/inventory/AddProduct", element: <AddProduct /> },
  { path: "dashboard/inventory/ProductList", element: <ProductList /> },
  // { path: "dashboard/inventory/:Product-id", element: <Products /> },
  { path: "dashboard/invoice", element: <Invoice /> },
  { path: "dashboard/invoice/InvoiceList", element: <InvoiceList /> },
  { path: "dashboard/invoice/AddInvoice", element: <AddInvoice /> },
  { path: "dashboard/invoice/OpportunityInvoice", element: <OpportunityInvoice /> },


  { path: "dashboard/rfq", element: <RFQ /> },
  { path: "dashboard/rfq/AddRfq", element: <AddRfq /> },
  { path: "dashboard/rfq/purchaseOrder", element: <PurchaseOrder /> },
  { path: "dashboard/rfq/purchaseItem", element: <PurchaseItem /> },
  { path: "dashboard/rfq/rfqList", element: <RfqList /> },
  { path: "dashboard/rfq/rfqPurchaseList", element: <RfqPurchaseList /> },
  { path: "dashboard/rfq/rfqPurchaseOrder", element: <RfqPurchaseOrder /> },
  {path: "dashboard/rfq/PurchaseRequisition", element: <PurchaseRequisition/> },
  {path: "dashboard/rfq/Requisition", element: <Requisition/>},


  { path: "dashboard/vendor/Vendor", element: <Vendor /> },
  { path: "dashboard/vendor/AddVendor", element: <AddVendor /> },
  { path: "dashboard/vendor/vendorList", element: <VendorList/>},


  { path: "dashboard/purchase", element: <Purchase /> },
  { path: "dashboard/purchase/AddPurchase", element: <AddPurchase /> },
  { path: "dashboard/purchase/PurchaseList", element: <PurchaseList /> },


  { path: "dashboard/sales", element: <Sales /> },
  { path: "dashboard/sales/addSales", element: <AddSales /> },
  { path: "dashboard/sales/salesList", element: <SalesList /> },

  { path: "dashboard/project", element: <ProjectManagement /> },
  { path: "dashboard/project/AddProject", element: <AddProject /> },
  { path: "dashboard/project/ProjectManagement", element: <ProjectManagement /> },
  { path: "dashboard/project/ProjectList", element: <ProjectList /> },

  { path: "dashboard/POS", element: <POS /> },
  { path: "dashboard/POS/categories", element: <Poscategory /> },
  { path: "dashboard/POS/products", element: <PosProduct /> },

  { path: "dashboard/attendence", element: <Attendence /> },
  { path: "dashboard/customForm", element: <CustomForm /> },

  { path: "dashboard/admin", element: <Admin />},
  { path: "dashboard/admin/Customers", element: <Customers />},
  { path: "dashboard/admin/GstAuditorform", element: <Gstform/>},
  { path: "dashboard/admin/GstAuditorlist", element: <GstList />},
  { path: "dashboard/GstAudit/GstAuditFile", element: <GstAuditfiles/>},

  {path: "dashboard/Ecommerce", element: <Ecommerce />},
 
  // default components and apps
  { path: "dashboard/finance", element: <FinanceMonitoring /> },
  { path: "dashboard/events", element: <EventManagement /> },
  { path: "dashboard/salesq", element: <SalesMonitoring /> },
  { path: "dashboard/analytics", element: <WebsiteAnalytics /> },
  { path: "dashboard/crypto", element: <Cryptocurrency /> },
  { path: "dashboard/helpdesk", element: <HelpdeskService /> },
  { path: "dashboard/storage", element: <StorageManagement /> },
  { path: "dashboard/product", element: <ProductManagements /> },
  { path: "apps/gallery-music", element: <GalleryMusic /> },
  { path: "apps/gallery-video", element: <GalleryVideo /> },
  { path: "apps/tasks", element: <Tasks /> },
  { path: "apps/contacts", element: <Contacts /> },
  { path: "apps/chat", element: <Chat /> },
  { path: "apps/calendar", element: <AppCalendar /> },
  { path: "apps/email", element: <Email /> },
  { path: "apps/file-manager", element: <FileManager /> },
  { path: "pages/pricing", element: <Pricing /> },
  { path: "pages/faq", element: <Faq /> },
  { path: "pages/profile", element: <Profile /> },
  { path: "pages/people", element: <People /> },
  { path: "pages/activity", element: <Activity /> },
  { path: "pages/events", element: <Events /> },
  { path: "pages/settings", element: <Settings /> },
  { path: "docs/layout/grid", element: <LayoutGrid /> },
  { path: "docs/layout/columns", element: <LayoutColumns /> },
  { path: "docs/layout/gutters", element: <LayoutGutters /> },
  { path: "docs/com/accordions", element: <Accordions /> },
  { path: "docs/com/alerts", element: <Alerts /> },
  { path: "docs/com/avatars", element: <Avatars /> },
  { path: "docs/com/badge", element: <Badges /> },
  { path: "docs/com/breadcrumbs", element: <Breadcrumbs /> },
  { path: "docs/com/buttons", element: <Buttons /> },
  { path: "docs/com/cards", element: <Cards /> },
  { path: "docs/com/carousel", element: <Carousels /> },
  { path: "docs/com/dropdown", element: <Dropdowns /> },
  { path: "docs/com/images", element: <Images /> },
  { path: "docs/com/listgroup", element: <Listgroup /> },
  { path: "docs/com/markers", element: <Markers /> },
  { path: "docs/com/modal", element: <Modals /> },
  { path: "docs/com/navtabs", element: <NavTabs /> },
  { path: "docs/com/offcanvas", element: <OffCanvas /> },
  { path: "docs/com/pagination", element: <Paginations /> },
  { path: "docs/com/placeholders", element: <Placeholders /> },
  { path: "docs/com/popovers", element: <Popovers /> },
  { path: "docs/com/progress", element: <Progress /> },
  { path: "docs/com/spinners", element: <Spinners /> },
  { path: "docs/com/toasts", element: <Toasts /> },
  { path: "docs/com/tooltips", element: <Tooltips /> },
  { path: "docs/com/tables", element: <Tables /> },
  { path: "docs/form/elements", element: <FormElements /> },
  { path: "docs/form/selects", element: <FormSelects /> },
  { path: "docs/form/checksradios", element: <FormChecksRadios /> },
  { path: "docs/form/range", element: <FormRange /> },
  { path: "docs/form/pickers", element: <FormPickers /> },
  { path: "docs/form/layouts", element: <FormLayouts /> },
  { path: "docs/chart/apex", element: <ApexCharts /> },
  { path: "docs/chart/chartjs", element: <ChartJs /> },
  { path: "docs/map/leaflet", element: <MapLeaflet /> },
  { path: "docs/map/vector", element: <MapVector /> },
  { path: "docs/icon/remix", element: <IconRemix /> },
  { path: "docs/icon/feather", element: <IconFeather /> },
  { path: "docs/util/background", element: <UtilBackground /> },
  { path: "docs/util/border", element: <UtilBorder /> },
  { path: "docs/util/colors", element: <UtilColors /> },
  { path: "docs/util/divider", element: <UtilDivider /> },
  { path: "docs/util/flex", element: <UtilFlex /> },
  { path: "docs/util/sizing", element: <UtilSizing /> },
  { path: "docs/util/spacing", element: <UtilSpacing /> },
  { path: "docs/util/opacity", element: <UtilOpacity /> },
  { path: "docs/util/position", element: <UtilPosition /> },
  { path: "docs/util/typography", element: <UtilTypography /> },
  { path: "docs/util/shadows", element: <UtilShadows /> },
  { path: "docs/util/extras", element: <UtilExtras /> },
]

export default protectedRoutes;