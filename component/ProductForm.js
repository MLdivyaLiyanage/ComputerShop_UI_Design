import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For fetching data from the API
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';

export default function ProductForm() {
    // State for form fields
    const [formData, setFormData] = useState({
        customerId: '',
        productId: '',
        productCategory: '',
        productName: '',
        productQuantity: '',
        productPrice: ''
    });

    // State for storing fetched data
    const [productData, setProductData] = useState([]);

    // Fetch data from the API on component mount
    useEffect(() => {
        // Replace 'your-api-endpoint' with your actual API endpoint
        axios.get('your-api-endpoint')
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission (dummy for now)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
    };

    return (
      
        <div className="main-container">
            <div className="product-form-container">
                <h2>Product</h2>
                <div className="form-header">
                    <div>DR Computer</div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Customer ID:</label>
                        <input 
                            type="text" 
                            name="customerId" 
                            value={formData.customerId} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Product ID:</label>
                        <input 
                            type="text" 
                            name="productId" 
                            value={formData.productId} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Product Category:</label>
                        <MDBDropdown>
                            <MDBDropdownToggle color="secondary">Select Category</MDBDropdownToggle>
                            <MDBDropdownMenu>
                                <MDBDropdownItem link onClick={() => setFormData({ ...formData, productCategory: 'Category1' })}>Category 1</MDBDropdownItem>
                                <MDBDropdownItem link onClick={() => setFormData({ ...formData, productCategory: 'Category2' })}>Category 2</MDBDropdownItem>
                                <MDBDropdownItem link onClick={() => setFormData({ ...formData, productCategory: 'Category3' })}>Category 3</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </div>
                    <div className="form-group">
                        <label>Product Name:</label>
                        <input 
                            type="text" 
                            name="productName" 
                            value={formData.productName} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Product Quantity:</label>
                        <input 
                            type="number" 
                            name="productQuantity" 
                            value={formData.productQuantity} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Product Price:</label>
                        <input 
                            type="text" 
                            name="productPrice" 
                            value={formData.productPrice} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="button-group">
                        <button type="button">Add</button>
                        <button type="button">Update</button>
                        <button type="button">Delete</button>
                        <button type="button">Next</button>
                        <button type="button">Back</button>
                    </div>
                </form>
            </div>
            {/* Grid for Viewing Details */}
            <div className="product-details-container">
                <h2>Product Details</h2>
                {/* Database View Table */}
                <table className="product-table">
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Product ID</th>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productData.map((product, index) => (
                            <tr key={index}>
                                <td>{product.customerId}</td>
                                <td>{product.productId}</td>
                                <td>{product.productCategory}</td>
                                <td>{product.productName}</td>
                                <td>{product.productQuantity}</td>
                                <td>{product.productPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
