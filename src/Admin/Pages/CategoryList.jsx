import React, { useEffect, useState} from "react";
import axios from "axios";
import '../Admin.css'
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/categories")
      .then(res => setCategories(res.data));
  }, []);


const handleDelete = async (id) => {
  if (window.confirm("Are you sure?")) {
    try {
      await axios.delete(`http://localhost:5000/api/categories/${id}`);
      setCategories(categories.filter((cat) => cat._id !== id));
      alert("Deleted Successfully");
    } catch (error) {
      console.log(error.response?.data);
      alert("Delete Failed");
    }
  }
};



  return (
    <div>
      <div className="form-header">
          <h2>Add Category</h2>
          <button className="btn-list" onClick={()=>(navigate('/admin/add-category'))}>Add Category</button>
      </div>
      <table className="table">
        <thead>
         
          <th>
            Name
          </th>
          <th>
            Image
          </th>
          <th>
            Action
          </th>
        </thead>
        
        <tbody>
          {categories.map((cat) => (
          <tr key={cat._id}>
            <td>
              <h4>{cat.name}</h4>
            </td>
            <td>
              <img src={`http://localhost:5000/uploads/${cat.image}`} width="100" />
            </td>
            <td>
              <div style={{display:'flex', gap:'10px'}}>
                <button style={{background:'red', color:'white', padding:'5px 10px', borderRadius:'4px', cursor:'pointer'}} onClick={() => handleDelete(cat._id)}>Delete</button>
                <button style={{background:'#00ba7b', color:'white', padding:'5px 10px', borderRadius:'4px', cursor:'pointer'}} onClick={()=>navigate(`/admin/edit-category/${cat._id}`)} >Edit</button>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
};

export default CategoryList;
