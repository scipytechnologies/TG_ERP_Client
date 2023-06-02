import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './layouts/Main';
import NotFound from "./pages/NotFound";

import publicRoutes from "./routes/PublicRoutes";
import protectedRoutes from "./routes/ProtectedRoutes";


// import css
import "./assets/css/remixicon.css";

// import scss
import "./scss/style.scss";
import LandingPage from "./pages/LandingPage";
import mainservice from "./services/mainservice";
import { useSelector, useDispatch } from 'react-redux'
import { isConnected, loggeduser, setRole, setUserProfile } from './store/loginedUser';
import Redirect from './routeProtection/ForceRedirect';
import ProtectedRoute from './routeProtection/ProtectedRoute';
import CompanyRegistraton from './scenes/company/CompanyRegistraton';
import Signup2 from "./pages/Signup2";


// set skin on load
window.addEventListener("load", function () {
  let skinMode = localStorage.getItem("skin-mode");
  let HTMLTag = document.querySelector("html");

  if (skinMode) {
    HTMLTag.setAttribute("data-skin", skinMode);
  }
});

export default function App() {
  const dispatch = useDispatch()
  const active = useSelector((state) => state.loginedUser.isConnected)
  const user = useSelector((state) => state.loginedUser)


  async function Auth() {
    if (typeof window !== "undefined") {
      const token = JSON.parse(localStorage.getItem("user-token"));
      if (token) {
        const data = { token: token }
        const res = await mainservice.Auth(data)
        if (res.data != null) {
          console.log(res.data);
          dispatch(loggeduser(res.data._id))
          dispatch(isConnected())
          dispatch(setRole(res.data.role))
          fetchData(res.data._id)
        }
        else {
          console.log("error");
        }


      } else {
        // setIsconnected(false);
        // dispatch(isNotConnected())
      }
    }
  }

  const fetchData = async(id) => {
    console.log("fetch data initiated");
    console.log(user);
      const userData = await mainservice.GetUserById(id)
      if(userData.data != null ){
        console.log(userData.data,"userData");
        const newUser = {
          firstName: userData.data.firstName,
          lastName: userData.data.lastName,
          CompanyID: userData.data.Company
        }
        dispatch(setUserProfile(newUser))
        console.log(user,"state");
      }
      else {
        console.log("user data not found");
      }
  }


  useEffect(() => {
    Auth(active)
    // console.log(id);
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Main />}>
            {protectedRoutes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={<ProtectedRoute user={active}>{route.element}</ProtectedRoute>}
                  key={index}
                />
              )
            })}
          </Route>
          {publicRoutes.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<Redirect user={active}> {route.element} </Redirect>}
                key={index}
              />
            )
          })}
          
          <Route path='/registerCompany' element={ <CompanyRegistraton/>}></Route>
          <Route path='/pages/signup2' element={<Signup2 />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>

  );
}