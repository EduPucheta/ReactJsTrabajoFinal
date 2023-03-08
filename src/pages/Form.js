import { TextField } from "@mui/material";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import MessageSuccess from "../components/MessageSuccess/MessageSuccess";
import CircularIndeterminate from "../components/Spinner/Spinner";
import { ItemsContext } from "../ItemsContext";
import { useContext } from "react";

export default function Formulario() {

  const { items } = useContext(ItemsContext);

  const [isLoading, SetisLoading] = useState(false);

  const initialState = {
    name: "",
    email: "",
    telefono: "",
  }; 

  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });

  };

  const handleOnSubmit = async (e) => {
    SetisLoading(true);
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchases"), {
      values, items
    });
    // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
    SetisLoading(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 ">
        <h1 className="text-center m-2 text-lg">Formulario de compras</h1>
        <form
          className="flex flex-col w-46 justify-center items-center self-center gap-2"
          onSubmit={handleOnSubmit}
        >
          <TextField
            className=" bg-white"
            placeholder="Nombre completo"
            name="name"
            value={values.name}
            onChange={handleOnChange}
          />
          <TextField
            className=" bg-white"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleOnChange}
          />
          <TextField
            className=" bg-white"
            placeholder="Telefono"
            name="telefono"
            value={values.telefono}
            onChange={handleOnChange}
          />

          <button className="btnASendAction text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm py-2.5 text-center no-underline p-2 w-36">
            Ordenar
          </button>
        </form>
        {isLoading ? <CircularIndeterminate /> : null}
        {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
      </div>
    </>
  );
}
