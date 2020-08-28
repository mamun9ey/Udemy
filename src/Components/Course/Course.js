import React from 'react';
import fakeData from '../../fakeData/data'
import { useState } from 'react';
import Product from '../Product/Product';
import './Course.css';
import Cart from '../Cart/Cart';

const Course = () => {
    const data = fakeData;
    const [courses,setCourses] = useState(data);
    const [cart,setCart] = useState([]);
    const handleAddClick = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className = 'course-container'> 
          <div className = 'product-container'>
          {
               courses.map(product => <Product product = {product} handleAddClick = {handleAddClick}></Product>)
           }
          </div>

          <div className = "cart-container">
            <Cart cart = {cart}></Cart>
          </div>
        </div>
    );
};

export default Course;