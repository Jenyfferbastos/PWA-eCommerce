import { useContext } from "react";
import { IProductsContext, ProductsContext } from "./ProductsContext";

export const useProductsContext = (): IProductsContext => {
  const context = useContext(ProductsContext);
  return context;
};
