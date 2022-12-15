import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Checkout } from "./pages/Checkout/Checkout";
import { Handbags } from "./pages/Handbags";
import { Home } from "./pages/Home";
import { MyCarts } from "./pages/MyCarts/MyCarts";
import { Header } from "./components/Header/Header";
import { ProductRoute } from "./components/ProductRoute/ProductRoute";

import { SignUpCreateAccount } from "./pages/SignUpCreateAccount/SignUpCreateAccount";

import { Search } from "./pages/Search/Search";
import { ProductsProvider } from "./context/ProductsContext";
import { useProductsContext } from "./context/useProductsContext";
import { SignUpAcess } from "./pages/SignUpAcess/SignUpAcess";
import { SignUpValidation } from "./pages/SignUpValidation/SignUpValidation";
import { UserProfile } from "./pages/UserProfile/UserProfile";

export function App() {
  const { products } = useProductsContext();
  return (
    <ProductsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignUpAcess />} />
          <Route path="/SignUp" element={<SignUpCreateAccount />} />
          <Route path="/SignUpValidation" element={<SignUpValidation />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/Home" element={<Home />} />
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
          <Route path="/Search" element={<Search />} />
        </Routes>
      </Router>
    </ProductsProvider>
  );
}
