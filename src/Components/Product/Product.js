import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {img,title,instructor,price} = props.product;
    const handleAddClick = props.handleAddClick;
    return (
    <div className = 'product , jumbotron'>
            <div >
              <img src={img} alt=""/>
            </div>
            <div  className = 'product-info'>
            <h3 className = "title">{title}</h3>
            <p>{instructor}</p>
            <p>{price}</p>
            <br/>
            <button className = 'main-button' onClick = {() => handleAddClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Enroll Now</button>
         </div>
     </div>
    );
};

export default Product;