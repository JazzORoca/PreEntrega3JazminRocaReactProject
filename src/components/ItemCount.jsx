import { useState } from "react";

import Swal from "sweetalert2";
import "./ItemCount.css";
const ItemCount = ({ inicial, stock,onAdd }) => {
  const [contador, setContador] = useState(1);
  
  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  const agregarCarrito = () => {
    onAdd(contador);
    Swal.fire({
      icon: "success",
      title: "Producto añadido al carrito",
      text: `Se añadieron ${contador} producto(s) al carrito.`,
    });
    
  onAdd(contador);
  
  
  };

  return (
    <div className="item-count-container">
      <div className="quantity-control">
        <button
          className="btn btn-dark btn-sm"
          onClick={decrementar}
        >
        -  
        </button>
        <p className="quantity">{contador}</p>
        <button
          className="btn btn-dark btn-sm"
          onClick={incrementar}
        >
          +
        </button>
      </div>
     <button
      className="btn btn-primary btn-block mt-3 mb-3"
      onClick={agregarCarrito}
      disabled={stock === 0}
      style={{color:'black', fontSize:'20px', fontFamily:'inherit', fontWeight:'bold',background:'blue'}}
    >
      Agregar al carrito
    </button>
    
   
      
    </div>
  );
};

export default ItemCount;

