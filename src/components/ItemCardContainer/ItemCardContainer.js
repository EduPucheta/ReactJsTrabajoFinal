import React from "react";
import { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { db } from "../../firebase-config";
import { collection, query, where, getDocs } from "firebase/firestore";
import CircularIndeterminate from "../Spinner/Spinner";

export default function ItemCardContainer() {
  const [data, setData] = useState([]);
  const [isLoading, SetisLoading] = useState(true);

  function getLastPart(url) {
    const parts = url.split("/");
    return parts.at(-1);
  }

  if (getLastPart(window.location.href) !== "") {
    var category = getLastPart(window.location.href);
  }

  useEffect(() => {
    const getProducts = async () => {
      let q = 0;
      if (category == null) {
        q = query(collection(db, "products"));
      } else {
        q = query(
          collection(db, "products"),
          where("category", "==", category)
        );
      }

      const querySnapcshot = await getDocs(q);
      const docs = [];
      querySnapcshot.forEach((doc) => {
        docs.push({ ...doc.data() });
      });

      setData(docs);
      SetisLoading(false);
    };
    getProducts();
   
  }, [category]);

  return (
    <>
      {isLoading ? <CircularIndeterminate /> : null}
      <div className="flex flex-wrap justify-center">
        {data.map((item) => {
          return <ItemCard key={item.id} data={item} />;
        })}
      </div>
    </>
  );
}
