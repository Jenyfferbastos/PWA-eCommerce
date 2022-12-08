import { useState } from "react";
import { Icons } from "../Icons/Icons";
import { ModelProductCardStyle, Flex, ImageBag } from "./ModelProductCardStyle";

export interface ModelProductCardProps{
  img: string;
  nameBag: string;
  descritionBag: string;
  valueBag: string;
}

export function ModelProductCard({nameBag, descritionBag, valueBag, img}: ModelProductCardProps) {

  
  return (
    <ModelProductCardStyle>
    <ImageBag src={img} />
    <Flex>
      <h3>{nameBag}</h3>
    <Icons icon={"wishlistFillFalse"} />
    </Flex>
    <h4>{descritionBag}</h4>
    <span>{valueBag}</span>
  </ModelProductCardStyle>
  )
}