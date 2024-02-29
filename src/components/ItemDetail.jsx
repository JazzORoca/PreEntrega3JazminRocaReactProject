import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
  const [cart,setCart] = useState(false)

  const {agregarCarrito} = useContext(CartContext)

  const onAdd = (count) => {

    setCart(true)

    agregarCarrito(producto,count)

}
  
  return (
    <div className="container mt-4">
      <div className="card" style={{ maxWidth: '400px', margin: 'auto' }}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="card-img-top img-fluid rounded"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <div className="card-body">
          <h1 className="card-title" style={{ fontFamily: 'sans-serif', fontSize: '24px', fontWeight: 'bolder', textAlign: 'center' }}>
            {producto.nombre}
          </h1>
          <h3 className="card-text" style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', textAlign: 'center' }}>
            Precio: ${producto.precio}
          </h3>
          <h3 className="card-text" style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', textAlign: 'center' }}>
            Stock: {producto.stock}
          </h3>
          <p className="card-text" style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', textAlign: 'center' }}>
            {producto.descripcion}
          </p>
          {producto.stock == 0 ? <h2>EL PRODUCTO NO TIENE STOCK</h2> : (
            cart ? <Link to={'/cart'} className='btn btn-link text-decoration-none'>Ir al carrito</Link> : <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
        )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;




