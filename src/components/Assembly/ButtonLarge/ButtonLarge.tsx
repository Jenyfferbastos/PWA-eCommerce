import React from "react";
import { Icons } from "../../Icons/Icons";
import { ButtonLargeStyle } from "./ButtonLargeStyle";

export interface ButtonLargeProps{
  icon: string;
  label: string;
}

export function ButtonLarge({icon, label}: ButtonLargeProps){
  return(
  <ButtonLargeStyle>
    <button><Icons icon={icon} />{label}</button>
  </ButtonLargeStyle>
  )
}