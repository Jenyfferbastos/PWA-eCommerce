import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Product } from "./interfaces/Products";
import { Checkout } from "./pages/Checkout/Checkout";
import { Handbags } from "./pages/Handbags";
import { Home } from "./pages/Home";
import { MyCarts } from "./pages/MyCarts/MyCarts";
import { Header } from "./components/Header/Header";
import { ProductRoute } from "./components/ProductRoute/ProductRoute";
import { listProducts } from "./services/listProducts";

export function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const listProductsResult = await listProducts();
    setProducts(listProductsResult);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Handbags" element={<Handbags />} />

        {products.map((product, index) => {
          if (index > 3) return null;
          return (
            <Route
              path={product.pathUrl}
              element={
                <>
                  <Header />
                  <ProductRoute product={product} />;
                </>
              }
              key={index}
            />
          );
        })}
        <Route path="/MyCarts" element={<MyCarts />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}
