import React from "react";

const CartItem = ({ producto, eliminarItem }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={producto.producto.imagen}
            alt={producto.producto.nombre}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{producto.producto.nombre}</h5>
            <p className="card-text">Cantidad: {producto.cantidad}</p>
            <p className="card-text">
              Valor unitario: ${producto.producto.precio * producto.cantidad}
            </p>
            <button
              onClick={() => eliminarItem(producto.producto.id)}
              className="btn btn-danger"
            >
              Eliminar producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
