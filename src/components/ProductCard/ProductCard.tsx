import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { ModelProductCard } from "./ModelProductCard";
import { ContainerNavStyle, ProductCardStyle } from "./ProductCardStyle";
import { Icons } from "../Icons/Icons";
import { Product } from "../../interfaces/Products";
import { listProducts } from "../../services/listProducts";

export function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const listProductsResult = await listProducts();
    setProducts(listProductsResult);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <ContainerNavStyle>
        <h2>New Arrivals</h2>
        <button>
          View All
          <Icons icon={"ChevronRight"} />
        </button>
      </ContainerNavStyle>

      <ProductCardStyle>
        {products.map((product, index) => {
          if (index > 3) return null;
          return (
            <Link to={product.pathUrl} key={index}>
              <ModelProductCard
                nameBag={product.name}
                descritionBag={product.description}
                valueBag={`$${product.pricingBefore}`}
                img={product.imgLink}
              />
            </Link>
          );
        })}
      </ProductCardStyle>
    </>
  );
}
