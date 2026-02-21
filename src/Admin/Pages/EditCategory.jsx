import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import '../Admin.css'

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState("");

  useEffect(() => {
  console.log("ID:", id);
  axios
    .get(`http://localhost:5000/api/categories/${id}`)
    .then((res) => {
      console.log("DATA:", res.data);
      setName(res.data.name);
      setOldImage(res.data.image);
    })
    .catch((err) => console.log(err));
}, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(
        `http://localhost:5000/api/categories/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert("Category Updated Successfully");
      navigate("/admin/category-list");

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <div>

    <div className="add-category-container">
      <form onSubmit={handleSubmit}>
       <div className="form-group">
         <label htmlFor="">Category Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
       </div>

        <div className="form-group">
            <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        </div>

        <div className="form-group">
            {oldImage && (
          <img
            src={`http://localhost:5000/uploads/${oldImage}`}
            width="120"
          />
        )}
        </div>


        <button type="submit" className="submit-btn">Update Category</button>
      </form>
      </div>
    </div>
  );
};

export default EditCategory;
