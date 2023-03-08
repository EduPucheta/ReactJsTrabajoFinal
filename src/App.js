import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import {  Route, Routes } from "react-router-dom";
import Home from "./pages/HomeAndCategories";
import CartPage from "./pages/CartPage";
import ItemDetail from "./components/ItemDetail/ItemDetail.js";
import { ItemsProvider } from "./ItemsContext";
import Formulario from "./pages/Form"; 
import PaginaNoEcontrada from "./pages/PaginaNoEcontrada"; 

function App() {
  return (
    <ItemsProvider>
      <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home sectionHeading="Todos los productos" />}
          />
          <Route
            path="/categoria/stands-para-celulares"
            element={<Home sectionHeading="Stands para celulares" />}
          />
          <Route
            path="/categoria/stands-para-computadoras" 
            element={<Home sectionHeading="Stands para laptos" />}
          />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/producto/:id" element={<ItemDetail />} />
          <Route path="*" element={<PaginaNoEcontrada />} />
        </Routes>
      </div>
    </ItemsProvider>
  );
}

export default App;
