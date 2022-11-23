import { Icons } from "../Icons/Icons";
import { CardStyle, Flex, ImageBag } from "./CardStyle";

export interface CardProps{
  img: string;
  nameBag: string;
  descritionBag: string;
  valueBag: string;
}

export function Card({nameBag, descritionBag, valueBag, img}: CardProps) {
  
  return (
    <CardStyle>
    <ImageBag src={img} />
    <Flex>
      <h3>{nameBag}</h3>
    <Icons icon={"wishlistFillFalse"} />
    </Flex>
    <h4>{descritionBag}</h4>
    <span>{valueBag}</span>
  </CardStyle>
  )
}