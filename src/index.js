import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Wishlist from './Wishlist';
import About from './About';
import Login from './Login';
import Register from './Register';
import Categories from './Categories/Categories';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Search from './Search';
import ProductDetails from './ProductDetails/ProductDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/Wishlist' element={<Wishlist />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
        <Route path={`/Categories`} element={<Categories />}/>
        <Route path={`/Search`} element={<Search />}/>
        <Route path={`/Details`} element={<ProductDetails />}/>
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
