import React from "react";
import Forbidden from "../pages/Forbidden";
import ForgotPassword from "../pages/ForgotPassword";
import InternalServerError from "../pages/InternalServerError";
import LockScreen from "../pages/LockScreen";
import NotFound from "../pages/NotFound";
import ServiceUnavailable from "../pages/ServiceUnavailable";
import Signin from "../pages/Signin";
import Signin2 from "../pages/Signin2";
import Signup from "../pages/Signup";
// import Signup2 from "../pages/Signup2";
import VerifyAccount from "../pages/VerifyAccount";


const publicRoutes = [

  { path: "pages/signin", element: <Signin /> },
  { path: "pages/signin2", element: <Signin2 /> },
  { path: "pages/signup", element: <Signup /> },
  // { path: "pages/signup2", element: <Signup2 /> },
  { path: "pages/verify", element: <VerifyAccount /> },
  { path: "pages/forgot", element: <ForgotPassword /> },
  { path: "pages/lock", element: <LockScreen /> },
  { path: "pages/error-404", element: <NotFound /> },
  { path: "pages/error-500", element: <InternalServerError /> },
  { path: "pages/error-503", element: <ServiceUnavailable /> },
  { path: "pages/error-505", element: <Forbidden /> }
];

export default publicRoutes;