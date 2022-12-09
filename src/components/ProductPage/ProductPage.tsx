import { Single } from "../Assembly/Single/Single";
import { ButtonMedium } from "../Assembly/ButtonMedium/ButtonMedium";
import { Cupom } from "../Cupom/Cupom";
import { Footer } from "../Footer/Footer";
import { Icons } from "../Icons/Icons";
import { CodeCheck } from "../CodeCheck/CodeCheck";
import { RatingsAndStepper } from "../RatingsAndStepper/RatingsAndStepper";
import { ProductDescription, ProductPageStyle } from "./ProductPageStyle";

export interface ProductPageProps {
  img: string;
  productName: string;
  productDescription: string;
  pricingBefore: string;
  pricingAfter: string;
  pricingDiscount: string;
  ratings: string;
}

export function ProductPage({
  img,
  productName,
  productDescription,
  pricingBefore,
  pricingAfter,
  pricingDiscount,
  ratings,
}: ProductPageProps) {
  return (
    <ProductPageStyle>
      <div className="containerMain">
      <div className="containerProductPics">
        <img src={img} />
      </div>
      <div className="containerProductInfo">
        <div className="containerProductNameAndDescription">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
        </div>
        <div className="containerRatings">
          <div>
            <Icons icon={"Star"} />
            <Icons icon={"Star"} />
            <Icons icon={"Star"} />
            <Icons icon={"Star"} />
            <Icons icon={"Star"} />
          </div>
          <p>{ratings}</p>
        </div>
        <div className="productPricing">
          <p className="pricingBefore">{pricingBefore}</p>
          <p className="pricingAfter">{pricingAfter}</p>
          <p className="pricingDiscount">{pricingDiscount}</p>
        </div>
        <div className="pinCodeCheck">
          <div className="textPinCodeCheck">
            <h3>Delivery Details</h3>
            <p>
              Check estimated delivery<br></br> date/pickup option.
            </p>
          </div>
          <CodeCheck placeholder={"Apply Valid Pincode"} />
        </div>
        <div className="quantity">
          <h4>Quantity:</h4>
          <RatingsAndStepper />
        </div>
        <div className="containerCupom">
          <Cupom />
          <Cupom />
        </div>
        <div className="buttonsAdd">
        <Single icon={"bagFillFalseWhite"} label={"Add to bag"} />
        <ButtonMedium icon={"wishlistFillFalse"} label={"Add To Wishlist"} />
        </div>
      </div>
      </div>
      <ProductDescription>
        <div className="buttonsProductDescription">
        <button>Product Description</button>
        <button>Related Products</button>
        <button>Ratings and Reviews</button>
        </div>
        <div className="textDescription">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
          scelerisque laoreet tortor cras molestie tincidunt malesuada
          malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra
          auctor in turpis est quisque eget tristique.{" "}
        </p>

        <p>
          Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et
          pharetra platea pretium nec feugiat tincidunt quam leo tristique.
          Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut
          non eu mus volutpat.{" "}
        </p>

        <p>
          Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris,
          faucibus vulputate adipiscing elementum tristique dictumst augue
          pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna
          etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis
          imperdiet.
        </p>
        </div>
      </ProductDescription>
      <Footer />
    </ProductPageStyle>
  );
}
