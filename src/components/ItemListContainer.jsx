import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import ItemList from './ItemList';
const ItemListContainer = () => {
  const [productos,setProductos] = useState([]);

  const {categoryId} = useParams()

  useEffect(()=>{

    
    const misProductos = 
    categoryId ? 
    query(collection(db,"item"),where("categoria","==",categoryId))
    :
    collection(db,"item")

    getDocs(misProductos)
    .then((res) => {
      const nuevosProductos = res.docs.map((doc) => {
         const data = doc.data()
         return {id: doc.id,...data}
      })
      setProductos(nuevosProductos)
    })
    .catch((error) => console.log(error))

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