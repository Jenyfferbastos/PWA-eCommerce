import React from "react";
import { Icons } from "../../Icons/Icons";
import { ButtonMediumStyle } from "./ButtonMediumStyle";

export interface ButtonMediumProps{
  icon: string;
  label: string;
}

export function ButtonMedium({icon, label}: ButtonMediumProps){
  return(
  <ButtonMediumStyle>
    <button><Icons icon={icon} />{label}</button>
  </ButtonMediumStyle>
  )
}