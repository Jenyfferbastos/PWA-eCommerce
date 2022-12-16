import React from "react";
import { userCartContext } from "../../../context/useCartContext";
import { useProductsContext } from "../../../context/useProductsContext";
import { Product } from "../../../interfaces/Products";
import { Icons } from "../../Icons/Icons";
import { SingleStyle } from "./SingleStyle";

export interface SingleProps {
  icon: string;
  label: string;
  productName: string;
}

export function Single({ icon, label, productName }: SingleProps) {
  const { products } = useProductsContext();
  const { cart, setCart } = userCartContext();

  function handleAddToBag() {
    const selectedProduct = products.find(
      (product) => product.name === productName
    );
    setCart([...cart, selectedProduct as Product]);
  }

  return (
    <SingleStyle>
      <button onClick={handleAddToBag}>
        <Icons icon={icon} />
        {label}
      </button>
    </SingleStyle>
  );
}
