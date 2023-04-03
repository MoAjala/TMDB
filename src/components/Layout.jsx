import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from ".";
import Sidebar from "./Sidebar";
export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="d-lg-flex ">
        <div
          className="d-none d-lg-block"
          style={{
            width: "200px",
            minHeight: "100vh",
            backgroundColor: "#la1b1d",
          }}
        >
          <div className="position-fixed top-0 start-0 sideAdjust scrollbody">
            <Sidebar />
          </div>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}
