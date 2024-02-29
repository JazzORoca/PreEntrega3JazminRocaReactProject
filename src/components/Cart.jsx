import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, vaciarCarrito, eliminarItem, totalCarrito } = useContext(CartContext);

  return (
    <div className="container my-5">
      {cart.length === 0 ? (
        <div className="text-center">
          <h1 className="text-danger">NO HAY PRODUCTOS EN EL CARRITO</h1>
          <Link to={"/"} className="btn btn-secondary mt-3">
            IR AL INICIO
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="mb-4">Lista de carrito</h1>

          {cart.map((p) => (
            <CartItem key={p.id} producto={p} eliminarItem={eliminarItem} />
          ))}

          <p className="fw-bold mt-3">Total: ${totalCarrito()}</p>

          <button onClick={vaciarCarrito} className="btn btn-danger me-2">
            Vaciar carrito
          </button>
          <Link to={"/checkout"} className="btn btn-success">
            Completar compra
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;



