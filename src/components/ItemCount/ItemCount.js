import React, { useState } from "react";

export default function ItemCount({ initialCount, onAdd }) {
  const [count, setCount] = useState(1);
  return (
    <div className="flex items-center px-5">
      <div className=" flex justify-around items-center text-xs gap-3 bg-white border-2 border-solid border-gray-400 p-2">
        <button
          disabled={count <= 1}
          className="text-xl"
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          -
        </button>
        <span className="font-light">{count}</span>
        <button
          className="text-xl"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          +
        </button>
      </div>
      <button  
      className="ml-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm py-2.5 text-center no-underline p-2"
      onClick={() => onAdd(count)} >Agregar al carrito</button> 
    </div>
  );
}
