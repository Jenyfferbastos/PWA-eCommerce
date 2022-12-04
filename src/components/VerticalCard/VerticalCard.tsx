import { Icons } from "../Icons/Icons";
import { RatingsAndStepper } from "../RatingsAndStepper/RatingsAndStepper";
import { VerticalCardStyle } from "./VerticalCardStyle";

export interface VerticalCardProps{
imageProduct: string;
nameProduct: string;
desciptionProduct: string;
valueProduct: string;
}

export function VerticalCard({imageProduct, nameProduct, desciptionProduct, valueProduct}:VerticalCardProps){
  return(
    <VerticalCardStyle>
      <div>
      <img className="imageProduct" src={imageProduct} />
      </div>
      <div className="productDescription">
      <h2>{nameProduct}</h2>
      <p>{desciptionProduct}</p>
      <RatingsAndStepper />
      </div>
      <div className="priceAndDelete">
      <Icons icon='CrossSmall' />
      <p>{valueProduct}</p>
      </div>
    </VerticalCardStyle>
  )
}