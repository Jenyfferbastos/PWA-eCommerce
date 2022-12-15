import { useContext } from "react";
import { IProductsContext, ProductsContext } from "./ProductsContext";

export const useProductsContext = (): IProductsContext => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProductsContext must be used within a AuthProvider");
  }
  return context;
};
