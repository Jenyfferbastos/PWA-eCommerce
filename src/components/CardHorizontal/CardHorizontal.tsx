import React from "react";
import { Icons } from "../Icons/Icons";
import { Flex, ImageBag } from "../ProductCard/ModelProductCardStyle";
import { CardHorizontalStyle, ValuesStyle } from "./CardHorizontalStyle";

export interface CardHorizontalProps {
  img: string;
  nameBag: string;
  descritionBag: string;
  valueBeforeBag: string;
  valueAfterBag: string;
  valueDiscountBag: string;
  rating: string;
}

export function CardHorizontal({
  img,
  nameBag,
  descritionBag,
  valueBeforeBag,
  valueAfterBag,
  valueDiscountBag,
  rating,
}: CardHorizontalProps) {
  return (
    <CardHorizontalStyle>
      <ImageBag src={img} />
      <Flex>
        <h3>{nameBag}</h3>
        <Icons icon={"wishlistFillFalse"} />
      </Flex>
      <h4>{descritionBag}</h4>
      <div className="containerRating">
        <div>
          <Icons icon={"Star"} />
          <Icons icon={"Star"} />
          <Icons icon={"Star"} />
          <Icons icon={"Star"} />
          <Icons icon={"Star"} />
        </div>
        <span className="rating">{rating}</span>
      </div>
      <ValuesStyle>
        <span className="valueBeforeBag">{valueBeforeBag}</span>
        <span className="valueAfterBag">{valueAfterBag}</span>
        <span className="valueDiscountBag">{valueDiscountBag}</span>
      </ValuesStyle>
    </CardHorizontalStyle>
  );
}
