import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const {cantidadCarrito} = useContext(CartContext); 
  return (
    <>
    <Link to={'/cart'} href="#" className="cart-widget d-flex align-items-center mt-2 mx-3" >
    <FontAwesomeIcon icon={faShoppingCart} className="me-2 align-bottom mb-2" style={{ color: 'white' }} />
    <span className="mx-2 mb-1 badge bg-danger " >{cantidadCarrito() == 0 ? null : cantidadCarrito()}</span>
  </Link>
  </>
  );
};

export default CartWidget;

