import React, {
  createContext,
  useEffect,
  useState,
} from "react";
import { Product } from "../interfaces/Products";
import { listProducts } from "../services/listProducts";

export interface IProductsContext {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface IProductsContextProps {
  children: React.ReactNode;
}

const DEFAULT_VALUE = {
  products: [],
  setProducts: () => [],
};

export const ProductsContext = createContext<IProductsContext>(DEFAULT_VALUE);

export const ProductsProvider: React.FC<IProductsContextProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const listProductsResult = await listProducts();
    setProducts(listProductsResult);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {" "}
      {children}
    </ProductsContext.Provider>
  );
};
