const scenes = [
  {
    "label": "Home",
    "link": "/dashboard/home",
    "icon": "ri-building-4-line"
  },
  {
    "label": "Customer",
    "link": "/dashboard/crm",
    "icon": "ri-team-fill",
    "submenu": [
      {
        "label": "Contact",
        "link": "/dashboard/crm/customer"
      },
      {
        "label": "Appoinments",
        "link": "/dashboard/crm/appoinment"
      },
      {
        "label": "Opportunites",
        "link": "/dashboard/crm/opportunity"
      }
    ]

  },
  {
    "label": "HRM",

    "icon": "ri-user-star-fill",
    "submenu": [
      {
        "label": "HRM",
        "link": "/dashboard/hrm",
      },
      {
        "label": "HR Management",
        "link": "/dashboard/hrm/hrManagement"
      },
    ]
  },
  {
    "label": "Employee",
    "icon": "ri-user-2-fill",
    "submenu": [
      {
        "label": "Employee",
        "link": "dashboard/employee"
      },
      {
        "label": "Manage Employee",
        "link": "dashboard/employee/EmployeeManagement"
      }
    ]
  },
  {
    "label": "Inventory",
    "icon": "ri-shopping-cart-2-fill",
    "submenu": [
      {
        "label": "Products",
        "link": "/dashboard/inventory",

      },
      {
        "label": "Product List",
        "link": "/dashboard/inventory/ProductList",

      }
    ]
  },
  {
    "label": "Invoice",
    "icon": "ri-money-dollar-circle-line",
    "submenu": [
      {
        "label": "Home",
        "link": "/dashboard/invoice"
      },
      {
        "label": "Invoice List",
        "link": "/dashboard/invoice/InvoiceList"
      }
    ]
  },
  {
    "label": "RFQ",
    "icon": "ri-water-flash-line",
    "submenu": [
      {
        "label": 'Home',
        "link": "/dashboard/rfq",
      },
      {
        "label": "RFQ List",
        "link": "/dashboard/rfq/rfqList",
      },
      {
        "label": "RFQ Purchase List",
        "link": "/dashboard/rfq/rfqPurchaseList",
      },
      {
        "label": "RFQ Order List",
        "link": "/dashboard/rfq/rfqPurchaseOrder",
      },
      {
        "label": "Vendor List",
        "link": "/dashboard/vendor/vendorList",
      },
    ]
  },
  {
    "label": "Project",
    "icon": "ri-water-flash-line",
    "submenu": [
      {
        "label": 'Home',
        "link": "/dashboard/project",
      },
      {
        "label": "Project List",
        "link": "/dashboard/project/projectList",

      },
    ]
  },
  {
    "label": "Purchase",
    "icon": "ri-water-flash-line",
    "submenu": [
      {
        "label": 'Home',
        "link": "/dashboard/purchase",
      },
      {
        "label": "Purchase List",
        "link": "/dashboard/purchase/PurchaseList",
      },
    ]
  },
  {
    "label": "Sales",
    
    "icon": "ri-water-flash-line",
    "submenu": [
      {
        "label": 'Home',
        "link": "/dashboard/sales",
      },
      {
        "label": "Sales List",
        "link": "/dashboard/sales/salesList",

      },
    ]
  },

  {
    "label": "POS",
    
    "icon": "ri-water-flash-line",
    "submenu": [
      {
        "label": 'Home',
        "link": "/dashboard/POS",
      }
    ]
  },
  {
    "label": "Attendence",
    "link": "/dashboard/attendence",
    "icon": "ri-water-flash-line"
  },
];


const dashboardMenu = [
  {
    "label": "Finance Monitoring",
    "link": "/dashboard/finance",
    "icon": "ri-pie-chart-2-line"
  },
  {
    "label": "Events Management",
    "link": "/dashboard/events",
    "icon": "ri-calendar-todo-line"
  },
  {
    "label": "Sales Monitoring",
    "link": "/dashboard/salesq",
    "icon": "ri-shopping-bag-3-line"
  },
  {
    "label": "Website Analytics",
    "link": "/dashboard/analytics",
    "icon": "ri-bar-chart-2-line"
  },
  {
    "label": "Cryptocurrency",
    "link": "/dashboard/crypto",
    "icon": "ri-coin-line"
  },
  {
    "label": "Helpdesk Service",
    "link": "/dashboard/helpdesk",
    "icon": "ri-service-line"
  },
  {
    "label": "Storage Management",
    "link": "/dashboard/storage",
    "icon": "ri-hard-drive-2-line"
  },
  {
    "label": "Product Management",
    "link": "/dashboard/product",
    "icon": "ri-suitcase-2-line"
  }
];

const applicationsMenu = [
  {
    "label": "File Manager",
    "link": "/apps/file-manager",
    "icon": "ri-folder-2-line"
  },
  {
    "label": "Email",
    "link": "/apps/email",
    "icon": "ri-mail-send-line"
  },
  {
    "label": "Calendar",
    "link": "/apps/calendar",
    "icon": "ri-calendar-line"
  },
  {
    "label": "Chat",
    "link": "/apps/chat",
    "icon": "ri-question-answer-line"
  },
  {
    "label": "Contacts",
    "link": "/apps/contacts",
    "icon": "ri-contacts-book-line"
  },
  {
    "label": "Task Manager",
    "link": "/apps/tasks",
    "icon": "ri-checkbox-multiple-line"
  },
  {
    "label": "Media Gallery",
    "icon": "ri-gallery-line",
    "submenu": [
      {
        "label": "Music Stream",
        "link": "/apps/gallery-music"
      },
      {
        "label": "Video Stream",
        "link": "/apps/gallery-video"
      }
    ]
  }
];

const pagesMenu = [
  {
    "label": "User Pages",
    "icon": "ri-account-circle-line",
    "submenu": [
      {
        "label": "User Profile",
        "link": "/pages/profile"
      },
      {
        "label": "People & Groups",
        "link": "/pages/people"
      },
      {
        "label": "Activity Log",
        "link": "/pages/activity"
      },
      {
        "label": "Events",
        "link": "/pages/events"
      },
      {
        "label": "Settings",
        "link": "/pages/settings"
      }
    ]
  },
  {
    "id": 27,
    "label": "Authentication",
    "icon": "ri-lock-2-line",
    "submenu": [
      {
        "label": "Sign In Basic",
        "link": "/pages/signin"
      },
      {
        "label": "Sign In Cover",
        "link": "/pages/signin2"
      },
      {
        "label": "Sign Up Basic",
        "link": "/pages/signup"
      },
      {
        "label": "Sign Up Cover",
        "link": "/pages/signup2"
      },
      {
        "label": "Verify Account",
        "link": "/pages/verify"
      },
      {
        "label": "Forgot Password",
        "link": "/pages/forgot"
      },
      {
        "label": "Lock Screen",
        "link": "/pages/lock"
      }
    ]
  },
  {
    "label": "Error Pages",
    "icon": "ri-error-warning-line",
    "submenu": [
      {
        "label": "Page Not Found",
        "link": "/pages/error-404"
      },
      {
        "label": "Internal Server Error",
        "link": "/pages/error-500"
      },
      {
        "label": "Service Unavailable",
        "link": "/pages/error-503"
      },
      {
        "label": "Forbidden",
        "link": "/pages/error-505"
      }
    ]
  },
  {
    "label": "Other Pages",
    "icon": "ri-file-text-line",
    "submenu": [
      {
        "label": "Pricing",
        "link": "/pages/pricing"
      },
      {
        "label": "FAQ",
        "link": "/pages/faq"
      }
    ]
  }
];

const uiElementsMenu = [
  {
    "label": "Getting Started",
    "icon": "ri-pencil-ruler-2-line",
    "submenu": [
      {
        "label": "Grid System",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Columns",
        "link": "/docs/layout/columns"
      },
      {
        "label": "Gutters",
        "link": "/docs/layout/gutters"
      }
    ]
  },
  {
    "label": "Components",
    "icon": "ri-suitcase-line",
    "submenu": [
      {
        "label": "Accordion",
        "link": "/docs/com/accordions"
      },
      {
        "label": "Alerts",
        "link": "/docs/com/alerts"
      },
      {
        "label": "Avatars",
        "link": "/docs/com/avatars"
      },
      {
        "label": "Badge",
        "link": "/docs/com/badge"
      },
      {
        "label": "Breadcrumbs",
        "link": "/docs/com/breadcrumbs"
      },
      {
        "label": "Buttons",
        "link": "/docs/com/buttons"
      },
      {
        "label": "Cards",
        "link": "/docs/com/cards"
      },
      {
        "label": "Carousel",
        "link": "/docs/com/carousel"
      },
      {
        "label": "Dropdown",
        "link": "/docs/com/dropdown"
      },
      {
        "label": "Images",
        "link": "/docs/com/images"
      },
      {
        "label": "List Group",
        "link": "/docs/com/listgroup"
      },
      {
        "label": "Markers",
        "link": "/docs/com/markers"
      },
      {
        "label": "Modal",
        "link": "/docs/com/modal"
      },
      {
        "label": "Nav & Tabs",
        "link": "/docs/com/navtabs"
      },
      {
        "label": "Offcanvas",
        "link": "/docs/com/offcanvas"
      },
      {
        "label": "Pagination",
        "link": "/docs/com/pagination"
      },
      {
        "label": "Placeholders",
        "link": "/docs/com/placeholders"
      },
      {
        "label": "Popovers",
        "link": "/docs/com/popovers"
      },
      {
        "label": "Progress",
        "link": "/docs/com/progress"
      },
      {
        "label": "Spinners",
        "link": "/docs/com/spinners"
      },
      {
        "label": "Toast",
        "link": "/docs/com/toasts"
      },
      {
        "label": "Tooltips",
        "link": "/docs/com/tooltips"
      },
      {
        "label": "Tables",
        "link": "/docs/com/tables"
      }
    ]
  },
  {
    "label": "Forms",
    "icon": "ri-list-check-2",
    "submenu": [
      {
        "label": "Text Elements",
        "link": "/docs/form/elements"
      },
      {
        "label": "Selects",
        "link": "/docs/form/selects"
      },
      {
        "label": "Checks & Radios",
        "link": "/docs/form/checksradios"
      },
      {
        "label": "Range",
        "link": "/docs/form/range"
      },
      {
        "label": "Pickers",
        "link": "/docs/form/pickers"
      },
      {
        "label": "Layouts",
        "link": "/docs/form/layouts"
      }
    ]
  },
  {
    "label": "Charts & Graphs",
    "icon": "ri-bar-chart-2-line",
    "submenu": [
      {
        "label": "ApexCharts",
        "link": "/docs/chart/apex"
      },
      {
        "label": "Chartjs",
        "link": "/docs/chart/chartjs"
      }
    ]
  },
  {
    "label": "Maps & Icons",
    "icon": "ri-stack-line",
    "submenu": [
      {
        "label": "Leaflet Maps",
        "link": "/docs/map/leaflet"
      },
      {
        "label": "Vector Maps",
        "link": "/docs/map/vector"
      },
      {
        "label": "Remixicon",
        "link": "/docs/icon/remix"
      },
      {
        "label": "Feathericons",
        "link": "/docs/icon/feather"
      }
    ]
  },
  {
    "label": "Utilities",
    "icon": "ri-briefcase-4-line",
    "submenu": [
      {
        "label": "Background",
        "link": "/docs/util/background"
      },
      {
        "label": "Border",
        "link": "/docs/util/border"
      },
      {
        "label": "Colors",
        "link": "/docs/util/colors"
      },
      {
        "label": "Divider",
        "link": "/docs/util/divider"
      },
      {
        "label": "Flex",
        "link": "/docs/util/flex"
      },
      {
        "label": "Sizing",
        "link": "/docs/util/sizing"
      },
      {
        "label": "Spacing",
        "link": "/docs/util/spacing"
      },
      {
        "label": "Opacity",
        "link": "/docs/util/opacity"
      },
      {
        "label": "Position",
        "link": "/docs/util/position"
      },
      {
        "label": "Typography",
        "link": "/docs/util/typography"
      },
      {
        "label": "Shadows",
        "link": "/docs/util/shadows"
      },
      {
        "label": "Extras",
        "link": "/docs/util/extras"
      }
    ]
  }
];

export { dashboardMenu, applicationsMenu, pagesMenu, uiElementsMenu, scenes };