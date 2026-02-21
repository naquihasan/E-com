import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description , setDescription] = useState("");
  const [stock , setStock] = useState("");
  const [image, setImage] = useState(null);

  // ==== Fetch categories ====
  useEffect(() => {
    axios.get("http://localhost:5000/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);


  const handleImageChange = (e) => {
    setImage([...e.target.files]); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("offerPrice", offerPrice);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("stock", stock);
    for (let i = 0; i < image.length; i++) {
      formData.append("images", image[i]);
    }

    try {
      await axios.post(
        "http://localhost:5000/api/products",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Product Added Successfully");

      // Reset form
      setName("");
      setPrice("");
      setOfferPrice("");
      setCategory("");
      setDescription("");
      setStock("");
      setImage(null);

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <div className="add-product-container">
      <div className="form-header">
          <h2>Add Product</h2>
          <button className="btn-info btn-list" onClick={()=>(navigate('/admin/product-lists'))}>Product List</button>
      </div>

      <form className="product-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>

        {/* CATEGORY DROPDOWN FROM DATABASE */}
        <div className="form-group">
          <label>Category</label>
          <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat)=>(
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Offer Price</label>
            <input
              type="number"
              value={offerPrice}
              onChange={(e)=>setOfferPrice(e.target.value)}
              required
            />
          </div>

          

          <div className="form-group">
            <label>Stock</label>
            <input
              type="number"
              value={stock}
              onChange={(e)=>setStock(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Product Image</label>
          <input
            type="file" multiple name="images" onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn btn-upload">
          Upload Product
        </button>

      </form>
    </div>
  );
};

export default AddProduct;