import { Icons } from "../Icons/Icons";
import { InputStyle } from "./InputStyle";

export interface InputSearchProps {
  placeholder: string;
}
export function InputSearch({ placeholder }: InputSearchProps) {
  return (
    <InputStyle>
      <Icons icon="ChevronLeft" />
      <input type="text"></input>
      <Icons icon="Search" />
    </InputStyle>
  );
}
