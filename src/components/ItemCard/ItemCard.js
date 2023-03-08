import React from "react";
import { Link } from "react-router-dom";


export default function ItemCard({ data }) {
  return (
    <div className="flex justify-center flex-wrap m-0 md:m-4 ">
      <div className="w-60  bg-white border border-gray-200 rounded-lg shadow m-1">
        <Link to={`/producto/${data.id}`} className="flex justify-center">
          <img
            className="p-0 h-40 center m-4 shadow-md  "
            src={data.image}
            alt={data.name}
          />
        </Link>
        <div className="px-5 pb-3 no-underline">
          <Link to={`/producto/${data.id}`} className="no-underline">
            <h5 className="text-md font-semibold tracking-tight text-gray-900">
              {data.name}
            </h5>
          </Link>
          <div className="flex items-center justify-between w-40 ">
            <span className="text-xl font-bold text-gray-900">
              ${data.price}
            </span>
            <Link
              to={`/producto/${data.id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm py-2.5 text-center no-underline p-2"
       
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
