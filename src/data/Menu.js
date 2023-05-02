const scenes = [
  {
    "label": "Company Registration",
    "link": "/dashboard/company-registration",
    "icon": "ri-building-4-line"
  },
  {
    "label": "CRM",
    "link": "/dashboard/crm",
    "icon": "ri-team-fill"
  },
  {
    "label": "HRM",
    "link": "/dashboard/hrm",
    "icon": "ri-user-star-fill"
  },
  {
    "label": "Employee",
    "link": "dashboard/employee",
    "icon": "ri-user-2-fill"
  },
  {
    "label": "Inventory",
    "link": "/dashboard/inventory",
    "icon": "ri-shopping-cart-2-fill"
  },
  {
    "label": "Invoice",
    "link": "/dashboard/invoice",
    "icon": "ri-money-dollar-circle-line"
  },
  {
    "label": "RFQ",
    "link": "/dashboard/rfq",
    "icon": "ri-water-flash-line"
  },
  {
    "label": "Project",
    "link": "/dashboard/projectManagement",
    "icon": "ri-water-flash-line"
  },
  {
    "label": "Purchase",
    "link": "/dashboard/purchase",
    "icon": "ri-water-flash-line"
  },
  {
    "label": "Sales",
    "link": "/dashboard/sales",
    "icon": "ri-water-flash-line"
  }
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
    "link": "/dashboard/sales",
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