import { ButtonTrueBackStyle } from "./ButtonTrueBackStyle";


export interface ButtonTrueBackProps{
name: string;
icon: string;
}

export function ButtonTrueBack({name, icon}:ButtonTrueBackProps){
  return(
    <ButtonTrueBackStyle>
      {name}
    </ButtonTrueBackStyle>
  )

}