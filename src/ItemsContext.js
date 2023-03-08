import React from "react";
import { useState, createContext } from "react";

export const ItemsContext = createContext();

const ItemsinStock = [];

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(ItemsinStock);

  //FUNCION PARA AGREGAR UN ITEM


  const addToCart = (item, newQuantity) => {
    const newCart = items.filter((prod) => prod.id !== item.id);
    newCart.push({ ...item, quantity: newQuantity });
    setItems(newCart);
  };

  //TOTAL DE LA COMPRA

  const totalCompra = (x) => {
    let total = 0;
    x.map((e) => {
      let monto = e.quantity * e.price;
      total += monto;
    });
    return total;
  };

  return (
    <ItemsContext.Provider value={{ items, setItems, addToCart, totalCompra }}>
      {children}
    </ItemsContext.Provider>
  );
};
