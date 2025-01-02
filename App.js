import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './component/LoginForm'
import CustomerForm from './component/CustomerForm'
import ProductForm from './component/ProductForm'
import PaymentForm from './component/PaymentForm'



export default function App() 
{
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path='/customer' element={<CustomerForm/>}/>
        <Route path='/product' element={<ProductForm/>}/>
        <Route path='/payment' element={<PaymentForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
