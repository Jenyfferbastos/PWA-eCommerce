import { BannerHandbags } from "../../components/BannerHandbags/BannerHandbags";
import { CardHorizontal } from "../../components/CardHorizontal/CardHorizontal";
import { Header } from "../../components/Header/Header";
import { SelectCheckbox } from "../../components/SelectCheckbox/SelectCheckbox";

import {
  ContainerProductListing,
  HandbagsStyle,
  ProductListing,
} from "./Handbags";
import { Footer } from "../../components/Footer/Footer";
import { ListingOptions } from "../../components/ListingOptions/ListingOptions";
import { useEffect, useState } from "react";
import { Product } from "../../interfaces/Products";
import { listProducts } from "../../services/listProducts";

export function Handbags() {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const listProductsResult = await listProducts();
    setProducts(listProductsResult);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <HandbagsStyle>
      <Header />
      <BannerHandbags />
      <h1>Handbags</h1>
      <div className="containerMain">
        <div className="containerCheckbox">
          <SelectCheckbox
            TextButton={"Size"}
            Icon={"Plus"}
            Name={["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"]}
          />
          <SelectCheckbox
            TextButton={"Color"}
            Icon={"Plus"}
            Name={[
              "Blue",
              "Maroon Red",
              "Crimson Red",
              "Seinna Pink",
              "Teal",
              "Aquamarine",
              "Off-White",
              "Muave Orange",
            ]}
          />
          <SelectCheckbox
            TextButton={"Brand"}
            Icon={"Plus"}
            Name={[
              "Zara",
              "D & G",
              "H & M",
              "Chanel",
              "Prada",
              "Biba",
              "CoraL",
              "Other",
            ]}
          />
          <SelectCheckbox
            TextButton={"Price Range"}
            Icon={"Plus"}
            Name={[
              "$1 - $50",
              "$51 - $100",
              "$101 - $150",
              "$151 - $200",
              "$201 - $250",
              "$251 - $300",
              "$301 - $350",
              "$351 - Max",
            ]}
          />
          <SelectCheckbox
            TextButton={"Discount"}
            Icon={"Plus"}
            Name={[
              "Mais de 5% OFF",
              "Mais de 10% OFF",
              "Mais de 15% OFF",
              "Mais de 20% OFF",
              "Mais de 25% OFF",
              "Mais de 30% OFF",
              "Mais de 35% OFF",
              "Mais de 40% OFF",
            ]}
          />
          <SelectCheckbox
            TextButton={"Availability"}
            Icon={"Plus"}
            Name={["Small", "Medium", "Large", "Extra Large"]}
          />
        </div>
        <ContainerProductListing>
          <ListingOptions />
          <ProductListing>
            {products.map((product, index) => (
              <CardHorizontal
                img={product.imgLink}
                nameBag={product.name}
                descritionBag={product.description}
                valueBeforeBag={`$${product.pricingBefore.toString()}`}
                valueAfterBag={`$${product.pricingAfter.toString()}`}
                valueDiscountBag={`${product.discount}% OFF`}
                rating={`${product.ratings} Ratings`}
                key={index}
              />
            ))}
          </ProductListing>
        </ContainerProductListing>
      </div>
      <Footer />
    </HandbagsStyle>
  );
}
