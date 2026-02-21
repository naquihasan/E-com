import React from "react";
import { Routes, Route } from "react-router-dom";

// Website Pages
import Home from "./pages/Home/Home";
import ProductList from "./Pages/ProductList/ProductList";
import DetailsPage from "./Pages/Details-page/DetailsPage";

// Admin Pages
import Dashboard from "./Admin/Pages/Dashboard";

// Layouts
import WebsiteLayout from "./Layout/WebsiteLayout";
import AdminLayout from "./Admin/Component/Layout/AdminLayout";
import AddProduct from "./Admin/Pages/AddProduct";
import Orders from "./Admin/Pages/Orders";
import Users from "./Admin/Pages/Users";
import AddCategory from "./Admin/Pages/AddCategory";
import CategoryList from "./Admin/Pages/CategoryList";
import EditCategory from "./Admin/Pages/EditCategory";
import ProductLists from "./Admin/Pages/ProductLists";

const App = () => {
  return (
    <Routes>

      {/* WEBSITE ROUTES */}
      <Route path="/" element={<WebsiteLayout />}>

        <Route index element={<Home />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product-details/:id" element={<DetailsPage />} />

      </Route>


      {/* ADMIN ROUTES */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add-Product" element={<AddProduct/>}/>
        <Route path="orders" element={<Orders/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="add-category" element={<AddCategory/>} />
        <Route path="category-list" element={<CategoryList/>} />
        <Route path="edit-category/:id" element={<EditCategory/>} />
        <Route path="product-lists" element={<ProductLists/>}/>
      </Route>
     
     
      
    </Routes>
  );
};

export default App;
