import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd) => total + prd.price,0)
    return (
        <div>
            <h3>Order summary</h3>
            <h4> total puchased: {cart.length}</h4>
            <h4>totat price: {total}</h4>
        </div>
    );
};

export default Cart;