import React from "react";
import { Icons } from "../../Icons/Icons";
import { SingleStyle } from "./SingleStyle";

export interface SingleProps{
  icon: string;
  label: string;
}

export function Single({icon, label}: SingleProps){
  return(
  <SingleStyle>
    <button><Icons icon={icon} />{label}</button>
  </SingleStyle>
  )
}