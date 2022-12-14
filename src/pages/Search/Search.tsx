import React, { useEffect } from "react";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import "./style.css";

export function Search() {
  useEffect(() => console.log("funcionou"),[]);
  return (
    <>
      {" "}
      <div className="teste">
        <h1>Jenyffer é gostosa</h1>
        <InputSearch placeholder={"Search"} />
      </div>{" "}
    </>
  );
}
