import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const ForceRedirect = ({ user, children }) => {
  const active = useSelector((state) => state.loginedUser.role)
  console.log(user)
  console.log(active);
  if (user == true) {
    switch(active) {
      case 'owner': 
      return <Navigate to="/dashboard/home" replace />;
      case 'user': 
      return <Navigate to="/registerCompany" replace />;
      case 'employee' :
      return <Navigate to="/dashboard/home" replace />;
      case '' :
        return <Navigate to="/" replace />;
    }
    
  }
  return children;
};

export default ForceRedirect; 