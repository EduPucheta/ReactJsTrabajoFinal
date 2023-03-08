import React, { useContext } from "react";
import { ItemsContext } from "../../ItemsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CartFull() {
  const { items, setItems, totalCompra } = useContext(ItemsContext);

  const clearCart = () => {
    setItems([]);
  };

  return (
    <>
      <div className="md:p-4 flex flex-col gap-2 ">
        <div className="w-full flex flex-col gap-4 ">
          {items.map((item) => {
            return (
              <div
                className="flex justify-between flex-row content-center w-full gap-4  md:gap-2"
                key={item.id}
              >
                <img className="md:w-16 md:h-16 w-8 h-8" src={item.image} alt={item.name} />
                <div className="flex flex-col justify-between w-6  md:w-36  ">
                  <div>
                    <div> {item.name} </div>
                    <div className="text-xs"> ${item.price} </div>
                    <div className="text-xs"> Unidades: {item.quantity} </div>
                  </div>
                  <div className="flex"></div>
                </div>
                <div className="font-semibold w-12 text-rightyou ">
                  ${item.price * item.quantity}
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-right font-bold w-full">
          Total compra: ${totalCompra(items)}
        </div>
        <div className="flex gap-4 flex-row justify-center">
          <button
            to="#"
            className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm py-2.5 text-center no-underline p-2 border-2 border-gray-300"
            onClick={() => clearCart()}
          >
            <FontAwesomeIcon icon={faTrashCan} className="px-2.5" />
            Vaciar carrito
          </button>
          <Link
            to="/formulario"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm py-2.5 text-center no-underline p-2"
          >
            Comprar
          </Link>
        </div>
      </div>
    </>
  );
}
