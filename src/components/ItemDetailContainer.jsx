import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [producto,setProducto] = useState([]);

  const {id} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json");
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const data = await response.json();
        const product = data.find((p) => p.id == id);
  
        if (!product) {
          throw new Error('Producto no encontrado');
        }
  
        setProducto(product);
      } catch (error) {
        console.error("Error en el fetch: ", error.message);
        setProducto([]); // O setProducto(null) dependiendo de tus necesidades
      }
    };
  
    fetchData();
  }, [id]);
  

    return (
        <div>
        <ItemDetail  producto={producto}/>
      </div>
    );
}
 
export default ItemDetailContainer;