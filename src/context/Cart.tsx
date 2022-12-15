import React, { createContext } from "react";
import { Product } from "../interfaces/Products";

interface Cart {
  products: Product[];
}

interface CartContext {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
}

const DEFAULT_VALUE = {
  cart: {
    products: [
      {
        categories: {
          size: "M",
          color: "azul",
          brand: "Apple",
          pricingBefore: 39.33,
          pricingAfter: 78.66,
          discount: 50,
          rate: "5",
        },
        name: "Grande",
        description: "Blossom Pouch",
        pricingBefore: 39.33,
        pricingAfter: 78.66,
        discount: 50,
        imgLink: "https://i.ibb.co/Gcybvgy/image-bag-1.png",
        pathUrl: "/Handbags/Grande",
        ratings: "122",
        quantity: 1,
      },
    ],
  },
  setCart: () => [],
};

export const CartContext = createContext<CartContext>(DEFAULT_VALUE);
