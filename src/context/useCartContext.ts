import { useContext } from "react";
import { CartContext } from "./Cart";

export const userCartContext = (): CartContext => {
  const context = useContext(CartContext);
  return context as CartContext;
};
