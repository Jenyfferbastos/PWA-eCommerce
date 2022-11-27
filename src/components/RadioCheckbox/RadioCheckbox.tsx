import { RadioCheckboxStyle } from "./RadioCheckboxStyle";

export interface RadioCheckboxProps {
  Text: string;
}

export function RadioCheckbox({ Text }: RadioCheckboxProps) {
  return(
  <RadioCheckboxStyle>
    <label className="container">
      {Text}
      <input type="checkbox"/>
      <span className="checkmark"></span>
    </label>
  </RadioCheckboxStyle>
  )
}
