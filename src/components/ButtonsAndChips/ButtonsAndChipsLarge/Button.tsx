import { ButtonStyle } from "./ButtonStyle";

export interface ButtonProps{
name: string;
icon: string;
}

export function Button({name, icon}:ButtonProps){
  return(
    <ButtonStyle>
      {name}
    </ButtonStyle>
  )

}