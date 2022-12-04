import { CategoryPageStyle } from "../Header/CategoryPageStyle";
import { useState } from "react";

export function CategoryPage(){
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("activeModal");
  } else {
    document.body.classList.remove("activeModal");
  }
 
  return(

  )
}