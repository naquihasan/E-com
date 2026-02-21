import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom';

const ProductLists = () => {


  const {products} = useAppContext(); 

  const navigate = useNavigate()

  
  return (
    <div>
       <div className="form-header">
          <h2>Product List</h2>
          <button className="btn-list" onClick={()=>(navigate('/admin/add-product'))}>Add Product</button>
      </div>
      <table className="table">
        <thead>
         
          
          <th>
            Image
          </th>
          <th>
            Name
          </th>
          <th>
            Price
          </th>
          <th>
            Offer Price
          </th>

           <th>
            Stoks
          </th>
          <th>
            Action
          </th>
        </thead>

        <tbody>
          {products.map((item,index) => (
          <tr key={index}>
            <td>
              <img src={`http://localhost:5000/uploads/${item.image?.[0]}`} width="100" />
            </td>
            <td>
              <h4>{item.name}</h4>
            </td>
            <td>
              <h4>{item.price}</h4>
            </td>
            <td>
              <h4>{item.offerPrice}</h4>
            </td>
            <td>
              <h4>{item.stock}</h4>
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
  )
}

export default ProductLists