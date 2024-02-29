
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Contacto from './components/Contacto';
import Error from './components/Error';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import CartProvider from './context/CartContext';

function App() {

  return (
    <>
    <BrowserRouter>
<CartProvider>
    <Navbar/>

    <Routes>

      <Route path='/' element={<ItemListContainer/>}/>

      <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>

      <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
      <Route path='/contacto' element={<Contacto />} >/</Route>
      <Route path='/cart' element={<Cart/>}/>
<Route path='/checkout' element={<Checkout />} />

      <Route path='*' element={<Error/>}/>
      
    </Routes>

    <Footer/>
    </CartProvider>
    
  </BrowserRouter>


    </>
  )
}

export default App
