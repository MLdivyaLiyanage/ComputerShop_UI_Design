import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For fetching data from the API
import 'bootstrap/dist/css/bootstrap.min.css';
import './customer.css';

export default function CustomerForm() {
    // State for form fields
    const [formData, setFormData] = useState({
        customerId: '',
        customerName: '',
        customerAddress: '',
        customerEmail: '',
    });

    // State for storing fetched customer data
    const [customerData, setCustomerData] = useState([]);

    // Fetch data from the API on component mount
    useEffect(() => {
        // Replace 'your-api-endpoint' with your actual API endpoint for customers
        axios.get('your-api-endpoint')
            .then(response => {
                setCustomerData(response.data);
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
        <div className="background-video-container">
            <video autoPlay muted loop id="background-video">
                <source src="https://videos.pexels.com/video-files/5466792/5466792-sd_640_360_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="main-container">
                <div className="customer-form-container">
                    <h2>Customer</h2>
                    <div className="form-header">
                        <div>DR Computer</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Customer Name:</label>
                            <input 
                                type="text" 
                                name="customerName" 
                                value={formData.customerName} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Customer Address:</label>
                            <input 
                                type="text" 
                                name="customerAddress" 
                                value={formData.customerAddress} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Customer Phone Number:</label>
                            <input 
                                type="text" 
                                name="customerPhoneNumber" 
                                value={formData.customerPhoneNumber} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="form-group">
                            <label>Customer Email:</label>
                            <input 
                                type="email" 
                                name="customerEmail" 
                                value={formData.customerEmail} 
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
                {/* Grid for Viewing Customer Details */}
                <div className="customer-details-container">
                    <h2>Customer Details</h2>
                    {/* Database View Table */}
                    <table className="customer-table">
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerData.map((customer, index) => (
                                <tr key={index}>
                                    <td>{customer.customerName}</td>
                                    <td>{customer.customerAddress}</td>
                                    <td>{customer.customerPhoneNumber}</td>
                                    <td>{customer.customerEmail}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
