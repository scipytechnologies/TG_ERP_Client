import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="main-footer">
      <span>&copy; 2023. Dashbyte. All Rights Reserved.</span>
      <span>Created by: <Link to="http://themepixels.me" target="_blank">Themepixels</Link></span>
    </div>
  )
}