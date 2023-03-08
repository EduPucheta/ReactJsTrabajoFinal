import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { useContext } from "react";
import { ItemsContext } from "../../ItemsContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import CircularIndeterminate from "../Spinner/Spinner";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDetail({ item }) {
  const {   addToCart } = useContext(ItemsContext);
  const [data, setData] = useState([]);
  const [isLoading, SetisLoading] = useState(true);

  function getLastPart(url) { 
    const parts = url.split("/");
    return parts.at(-1);
  }

  if (getLastPart(window.location.href) !== "") {
    var id = getLastPart(window.location.href);
  }

  const onAdd = (quantity) => {
    addToCart(data, quantity);
  };

  useEffect(() => {
    const getProducts = async () => {
      let q = 0;

      q = query(collection(db, "products"), where("id", "==", id));

      const querySnapcshot = await getDocs(q);
      const docs = [];
      querySnapcshot.forEach((doc) => {
        docs.push({ ...doc.data() });
      });

      setData(docs[0]);
      SetisLoading(false);
    };
    getProducts();
  }, [id]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="w-100  border  rounded-lg  m-2">
          {isLoading ? <CircularIndeterminate /> : null}
          <Link to="#" className="flex justify-center">
            <img
              className="p-8 rounded-t-lg h-60 center "
              src={data.image}
              alt={`${data.image} foto."`}
            />
          </Link>
          <div className="px-3 pb-3 no-underline">
            <Link to="#" className="no-underline">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                {data.name}
              </h5>
            </Link>
            <div className="flex datas-center justify-between w-40 ">
              <span className="text-2xl font-bold text-gray-900">
                ${data.price}
              </span>
            </div>
            <span className=" text-gray-600 text-sm">
              {data.description}
            </span>
          </div>
          <div className="flex justify-center mb-4">
            <ItemCount initialCount={1} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </>
  );
}
