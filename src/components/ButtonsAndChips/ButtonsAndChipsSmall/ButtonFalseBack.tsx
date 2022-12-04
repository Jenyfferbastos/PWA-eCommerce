import { ButtonFalseBackStyle } from "./ButtonFalseBackStyle";


export interface ButtonFalseBackProps{
name: string;
icon: string;
}

export function ButtonFalseBack({name, icon}:ButtonFalseBackProps){
  return(
    <ButtonFalseBackStyle>
      {name}
    </ButtonFalseBackStyle>
  )

}