import { BannerHandbags } from "../../components/BannerHandbags/BannerHandbags";
import { CardHorizontal } from "../../components/CardHorizontal/CardHorizontal";
import { Header } from "../../components/Header/Header";
import { SelectCheckbox } from "../../components/SelectCheckbox/SelectCheckbox";

import {
  AppBar,
  ContainerInputStyle,
  ContainerProductListing,
  HandbagsStyle,
  ProductListing,
  Sort,
} from "./Handbags";
import { Footer } from "../../components/Footer/Footer";
import { ListingOptions } from "../../components/ListingOptions/ListingOptions";
import { useState } from "react";
import { Icons } from "../../components/Icons/Icons";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/useProductsContext";

export function Handbags() {
  const { products } = useProductsContext();
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("activeModal");
  } else {
    document.body.classList.remove("activeModal");
  }

  return (
    <HandbagsStyle>
      <Header />
      <BannerHandbags />
      <h1>Handbags</h1>

      <AppBar>
        {" "}
        <Link to="/">
          <Icons icon="ChevronLeft" />
          <h1>Handbags</h1>
        </Link>
      </AppBar>

      <div className="containerMain">
        <div className="containerCheckbox">
          <SelectCheckbox
            buttonTextValue={"Size"}
            Icon={"Plus"}
            Name={["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"]}
          />
          <SelectCheckbox
            buttonTextValue={"Color"}
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
            buttonTextValue={"Brand"}
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
            buttonTextValue={"Price Range"}
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
            buttonTextValue={"Discount"}
            Icon={"Plus"}
            Name={[
              "More than 5% OFF",
              "More than 10% OFF",
              "More than 15% OFF",
              "More than 20% OFF",
              "More than 25% OFF",
              "More than 30% OFF",
              "More than 35% OFF",
              "More than 40% OFF",
            ]}
          />
          <SelectCheckbox
            buttonTextValue={"Availability"}
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
      <Sort>
        <button onClick={toggleModal}>
          <Icons icon="Sort" />
          SORT
        </button>
        <button>
          <Icons icon="Filter" />
          FILTER
        </button>
      </Sort>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modalContent">
            <form>
              <legend>Sort By</legend>
              <ContainerInputStyle>
                <div className="input">
                  <input
                    type="radio"
                    id="LatestProducts"
                    name="LatestProducts"
                  />
                  <label htmlFor="LatestProducts">Latest Products</label>
                </div>

                <div className="input">
                  <input
                    type="radio"
                    id="PriceLowtoHigh"
                    name="PriceLowtoHigh"
                  />
                  <label htmlFor="PriceLowtoHigh">Price- Low to High</label>
                </div>

                <div className="input">
                  <input
                    type="radio"
                    id="PriceHightoLow"
                    name="PriceHightoLow"
                  />
                  <label htmlFor="PriceHightoLow">Price- High to Low</label>
                </div>

                <div className="input">
                  <input type="radio" id="Popularity" name="Popularity" />
                  <label htmlFor="Popularity">Popularity</label>
                </div>

                <div className="input">
                  <input
                    type="radio"
                    id="CustomerRatings"
                    name="CustomerRatings"
                  />
                  <label htmlFor="CustomerRatings">Customer Ratings</label>
                </div>
              </ContainerInputStyle>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </HandbagsStyle>
  );
}
