import { ProductPage } from "../../components/ProductPage/ProductPage";
import ImageCoach from "../../assets/img/image-bag-2.png";
import { Header } from "../../components/Header/Header";

export function Coach(){
  return(
    <>
    <Header />
    <ProductPage img={ImageCoach}  productName={"Coach"} productDescription={"Leather Coach Bag with adjustable starps."} pricingBefore={"$54.69"} pricingAfter={"$78.66"} pricingDiscount={"50%OFF"} ratings={"(250) Ratings"} />
    </>
  )
}