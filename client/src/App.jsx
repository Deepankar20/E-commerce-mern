import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from "./Components/Navbar";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { AddProduct } from "./pages/AddProduct";
import { ProductPage } from "./pages/ProductPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
