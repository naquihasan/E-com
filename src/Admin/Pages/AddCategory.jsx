import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate()

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("name", name);
  formData.append("image", image);

  try {
    await axios.post(
      "http://localhost:5000/api/categories/add",
      formData
    );

    alert("Category Added");
    setName("");
    setImage(null);

  } catch (error) {
    console.log(error.response?.data);
  }
};



  return (
    <div className="add-category-container">
      <div className="form-header">
          <h2>Add Category</h2>
          <button className="btn-list" onClick={()=>(navigate('/admin/category-list'))}>Category List</button>
      </div>
      <form onSubmit={handleSubmit} className="category-form">
        <div className="form-group">
          <label htmlFor="">Category Name</label>
          <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="submit" className="submit-btn btn-upload">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;
