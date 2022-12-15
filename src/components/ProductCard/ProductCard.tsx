import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { ModelProductCard } from "./ModelProductCard";
import { ContainerNavStyle, ProductCardStyle } from "./ProductCardStyle";
import { Icons } from "../Icons/Icons";
import ImageBag1 from "../../assets/img/image-bag-1.png";
import { Flex } from "./ModelProductCardStyle";
import { Duo } from "../Assembly/Duo/Duo";
import { useProductsContext } from "../../context/useProductsContext";

export function ProductCard() {
  const { products } = useProductsContext();
  // const fetchProducts = async () => {
  //   const listProductsResult = await listProducts();
  //   setProducts(listProductsResult);
  // };
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
            <>
              <Link to={product.pathUrl} key={index}>
                <ModelProductCard
                  nameBag={product.name}
                  descritionBag={product.description}
                  valueBag={`$${product.pricingBefore}`}
                  img={product.imgLink}
                />
              </Link>
              <button onClick={toggleModal} className="btn-modal">
                teste
              </button>
            </>
          );
        })}
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modalContent">
              <div className="cardVertical">
                <img src={ImageBag1} />
                <div className="containerText">
                  <h2>Grande</h2>
                  <p className="descriptionProduct">Blossom Pouch</p>
                  <p className="priceProduct">$39.33</p>
                </div>
              </div>
              <div className="ratings">
                <div className="ratingsPill">
                  <p>4.5</p>
                  <Icons icon="Star" />
                </div>
                <div className="content">
                  <h3>Average Rating</h3>
                  <p>43 Ratings & 23 Reviews</p>
                </div>
                <Icons icon="ChevronRight" />
              </div>
              <div className="selectOptions">
                <div className="containerText">
                  <h4>Select Size</h4>
                  <p>( UK Size)</p>
                </div>
                <div className="buttons">
                  <button>7</button>
                  <button>8</button>
                  <button>9</button>
                  <button>10</button>
                </div>
              </div>
              <Duo
                sizeDuoPrimary={"72vw"}
                sizeDuoSecondary={"14vw"}
                textDuoPrimary={"Add to Bag"}
                iconDuoPrimary={"bagFillFalseWhite"}
                iconDuoSecondary={"Placeholder"}
              />
            </div>
          </div>
        )}
      </ProductCardStyle>
    </>
  );
}
