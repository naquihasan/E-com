import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../AdminSidebar";
import AdminNavbar from "../AdminNavbar";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <div className="admin-content">
        <AdminNavbar />
        <div className="admin-page">
          <Outlet />
        </div>  
      </div>
    </div>
  );
};

export default AdminLayout;
