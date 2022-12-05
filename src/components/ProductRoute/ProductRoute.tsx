import { Product } from "../../interfaces/Products";
import { ProductPage } from "../ProductPage/ProductPage";

export function ProductRoute(props: { product: Product }) {
  return (
    <ProductPage
      img={props.product.imgLink}
      productName={props.product.name}
      productDescription={props.product.description}
      pricingBefore={props.product.pricingBefore.toString()}
      pricingAfter={props.product.pricingAfter.toString()}
      pricingDiscount={`${props.product.discount.toString()}%OFF`}
      ratings={`(${props.product.ratings}) Ratings`}
    />
  );
}
