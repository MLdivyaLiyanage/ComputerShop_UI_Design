import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For fetching data from the API
import 'bootstrap/dist/css/bootstrap.min.css';
import './payment.css';

export default function PaymentForm() {
    // State for form fields
    const [formData, setFormData] = useState({
        paymentId: '',
        productId: '',
        productQuantity: '',
        paymentMethod: '',
        paymentTotal: ''
    });

    // State for storing fetched data
    const [paymentData, setPaymentData] = useState([]);

    // Fetch data from the API on component mount
    useEffect(() => {
        // Replace 'your-api-endpoint' with your actual API endpoint
        axios.get('your-payment-api-endpoint')
            .then(response => {
                setPaymentData(response.data);
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

    // Handle Add button click
    const handleAdd = () => {
        // Add your logic for adding a new payment record
        console.log('Add:', formData);
        // Example API call
        axios.post('your-add-api-endpoint', formData)
            .then(response => {
                setPaymentData([...paymentData, response.data]);
                setFormData({
                    paymentId: '',
                    productId: '',
                    productQuantity: '',
                    paymentMethod: '',
                    paymentTotal: ''
                });
            })
            .catch(error => {
                console.error('Error adding data:', error);
            });
    };

    // Handle Update button click
    const handleUpdate = () => {
        // Add your logic for updating an existing payment record
        console.log('Update:', formData);
        // Example API call
        axios.put(`your-update-api-endpoint/${formData.paymentId}`, formData)
            .then(response => {
                setPaymentData(paymentData.map(payment =>
                    payment.paymentId === formData.paymentId ? response.data : payment
                ));
                setFormData({
                    paymentId: '',
                    productId: '',
                    productQuantity: '',
                    paymentMethod: '',
                    paymentTotal: ''
                });
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    };

    // Handle Delete button click
    const handleDelete = () => {
        // Add your logic for deleting a payment record
        console.log('Delete:', formData.paymentId);
        // Example API call
        axios.delete(`your-delete-api-endpoint/${formData.paymentId}`)
            .then(() => {
                setPaymentData(paymentData.filter(payment => payment.paymentId !== formData.paymentId));
                setFormData({
                    paymentId: '',
                    productId: '',
                    productQuantity: '',
                    paymentMethod: '',
                    paymentTotal: ''
                });
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });
    };

    // Handle Back button click
    const handleBack = () => {
        // Add your logic for going back (e.g., navigate to another page)
        console.log('Back');
        // For example, navigate to the previous page or clear form data
        setFormData({
            paymentId: '',
            productId: '',
            productQuantity: '',
            paymentMethod: '',
            paymentTotal: ''
        });
    };

    return (
        <div className="main-container">
            <div className="payment-form-container">
                <h2>Payment</h2>
    
                <div className="form-header">
                    <div>DR Computer House</div>
                </div>
                <form>
                    <div className="form-group">
                        <label>Payment ID:</label>
                        <input 
                            type="text" 
                            name="paymentId" 
                            value={formData.paymentId} 
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
                        <label>Product Quantity:</label>
                        <input 
                            type="number" 
                            name="productQuantity" 
                            value={formData.productQuantity} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Payment Method:</label>
                        <div>
                            <label>
                                <input 
                                    type="radio" 
                                    name="paymentMethod" 
                                    value="card" 
                                    checked={formData.paymentMethod === 'card'} 
                                    onChange={handleChange} 
                                />
                                Card
                            </label>
                            <label>
                                <input 
                                    type="radio" 
                                    name="paymentMethod" 
                                    value="cash" 
                                    checked={formData.paymentMethod === 'cash'} 
                                    onChange={handleChange} 
                                />
                                Cash
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Payment Total:</label>
                        <input 
                            type="text" 
                            name="paymentTotal" 
                            value={formData.paymentTotal} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="button-group">
                        <button type="button" onClick={handleAdd}>Add</button>
                        <button type="button" onClick={handleUpdate}>Update</button>
                        <button type="button" onClick={handleDelete}>Delete</button>
                        <button type="button" onClick={handleBack}>Back</button>
                    </div>
                </form>
            </div>
            {/* Grid for Viewing Details */}
            <div className="payment-details-container">
                <h2>Payment Details</h2>
                {/* Database View Table */}
                <table className="payment-table">
                    <thead>
                        <tr>
                            <th>Payment ID</th>
                            <th>Product ID</th>
                            <th>Quantity</th>
                            <th>Method</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentData.map((payment, index) => (
                            <tr key={index}>
                                <td>{payment.paymentId}</td>
                                <td>{payment.productId}</td>
                                <td>{payment.productQuantity}</td>
                                <td>{payment.paymentMethod}</td>
                                <td>{payment.paymentTotal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
