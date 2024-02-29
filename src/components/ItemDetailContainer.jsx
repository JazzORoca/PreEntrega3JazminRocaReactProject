
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import ItemDetail from './ItemDetail';
const ItemDetailContainer = () => {
    const [producto,setProducto] = useState([]);

  const {id} = useParams();


  useEffect(()=>{

    //GENERAMOS EL LLAMADO AL DOCUMENTO DETERMINADO
    const nuevoDoc = doc(db,"item",id)

    //HACEMOS EL LLAMADO AL DOCUMENTO Y LO RENDERIZAMOS EN PANTALLA
    getDoc(nuevoDoc)
    .then(res => {
      const data = res.data()
      const nuevoProducto = {id: res.id,...data}
      setProducto(nuevoProducto)
    })
    .catch(error => console.log(error))
},[])



  

    return (
        <div>
        
        <ItemDetail  producto={producto}/>
      </div>
    );
}
 
export default ItemDetailContainer;