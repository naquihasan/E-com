import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Admin Panel</h2>

      <NavLink to="/admin/dashboard" className="sidebar-link">
        <i class="fas fa-home"></i> <span>Dashboard</span>
      </NavLink>

      <p className="sidebar-title">PRODUCTS</p>

      <NavLink to="/admin/category-list" className="sidebar-link">
        <i class="fas fa-tags"></i> <span>Category</span>
      </NavLink>

      <NavLink to="/admin/product-lists" className="sidebar-link">
       <i class="fas fa-plus-circle"></i> <span>Product</span>
      </NavLink>

      <NavLink to="/admin/orders" className="sidebar-link">
       <i class="fas fa-shopping-cart"></i> <span>Orders</span>
      </NavLink>

      <NavLink to="/admin/users" className="sidebar-link">
       <i class="fas fa-users"></i> <span>Users</span>
      </NavLink>
    </div>
  );
};

export default AdminSidebar;
