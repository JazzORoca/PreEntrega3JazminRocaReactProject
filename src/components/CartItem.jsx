

import React from 'react';

const CartItem = ({producto,eliminarItem}) => {

    return (
        <div>
            <h3>{producto.producto.nombre}</h3>

            <img src={producto.producto.imagen} alt={producto.producto.nombre}  className="img-fluid" style={{ maxWidth: '100px' }}/>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Valor unitario: ${producto.producto.precio*producto.cantidad}</p>
            <button onClick={()=> eliminarItem(producto.producto.id)}>Eliminar producto</button>
        </div>
    );
};

export default CartItem;
