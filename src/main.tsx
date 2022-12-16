import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { CartProvider } from "./context/Cart";
import { ProductsProvider } from "./context/ProductsContext";
import GlobalStyle from "./styles/global.style";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ProductsProvider>
      <CartProvider>
        <App />{" "}
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
