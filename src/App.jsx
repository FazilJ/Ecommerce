import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/footer/Footer';
import mensbanner from './Components/Assets/banner_mens.png';
import womensbanner from './Components/Assets/banner_women.png';
import kidsbanner from './Components/Assets/banner_kids.png';
import New_Collection from './Components/New_Collections/New_Collection';

function App() {
  return (
    <ThemeProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={mensbanner} category="men" />} />
            <Route path='/womens' element={<ShopCategory banner={womensbanner} category="women" />} />
            <Route path='/kids' element={<ShopCategory banner={kidsbanner} category="kid" />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/LoginSignup' element={<LoginSignup />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path="/new-collection" element={<New_Collection />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
