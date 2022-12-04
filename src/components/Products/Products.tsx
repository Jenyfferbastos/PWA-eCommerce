import { Link } from "react-router-dom";
import { CardVertical, ProductsStyle } from "./ProductsStyle";

export interface ProductsProps {
  image: string;
  nameProduct: string;
  descriptionProduct: string;
  quantityProduct: string;
  priceProduct: string;
  subtotalProduct: string;
  quantityProductNumber: string;
}

export function Products({
  image,
  nameProduct,
  descriptionProduct,
  quantityProduct,
  priceProduct,
  subtotalProduct,
  quantityProductNumber,
}: ProductsProps) {
  return (
    <ProductsStyle>
      <CardVertical>
      <div className="imageContainer">
        <img src={image} />
      </div>
      <div className="informationProduct">
        <h2>{nameProduct}</h2>
        <p>{descriptionProduct}</p>
        <p>{quantityProduct}</p>
      </div>
      </CardVertical>
      <div className="containerFlex">
      <div className="priceContainer">
        <p>{priceProduct}</p>
        <p>{quantityProductNumber}</p>
        <p>{subtotalProduct}</p>
      </div>
      <div className="links">
        <Link className="linkWishlist" to="/*">Move to Wishlist</Link>
        <Link className="linkRemove" to="/*">Remove</Link>
      </div>
      </div>
    </ProductsStyle>
  );
}
