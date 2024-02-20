import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../public/productos.json';
import ItemList from './ItemList';
const ItemListContainer = () => {
  const [productos,setProductos] = useState([]);

  const {categoryId} = useParams()

  useEffect(()=>{
      
      const fetchData = async () => {
          try {
              const response = await fetch('/productos.json');
              const data = await response.json();
              
console.log(data)
              if(categoryId){
                  const filteredProducts = data.filter((p) => p.categoria == categoryId)
                  setProductos(filteredProducts)
              }else{
                  setProductos(data)
              }

          }catch(error){
              console.log("Error en el fetch "+error)
              
            
          
            }
      }

      fetchData()

  },[categoryId])
    return (
        <div className="container mt-4">
     

        {productos.length == 0 
        ? 
        <h1>CARGANDO..</h1> 
        : 
        <ItemList productos={productos}/>
        }

   
</div>
      );
};
 
export default ItemListContainer;