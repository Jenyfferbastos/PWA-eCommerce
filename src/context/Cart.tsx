import React, { createContext, useCallback, useState } from "react";
import { Product } from "../interfaces/Products";

export interface CartContext {
  cart: Product[];
  setCart(products: Product[]): void;
}

interface ICartContextProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContext | null>(null);

export const CartProvider: React.FC<ICartContextProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // const setCartFn = useCallback((products: Product[]) => {
  //   setCart([...cart, ...products]);
  // }, []);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {" "}
      {children}
    </CartContext.Provider>
  );
};
