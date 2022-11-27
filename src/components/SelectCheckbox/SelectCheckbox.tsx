import { useState } from "react";
import { Icons } from "../Icons/Icons";
import { RadioCheckbox } from "../RadioCheckbox/RadioCheckbox";
import { SelectCheckboxStyle } from "./SelectCheckboxStyle";

export interface SelectCheckboxProps {
  TextButton: string;
  Icon: string;
}

export function SelectCheckbox({ TextButton, Icon }: SelectCheckboxProps) {
  const [show, setShow] = useState(false);

  const item = {
    colors: [
      "Blue",
      "Maroon Red",
      "Crimson Red",
      "Seinna Pink",
      "Teal",
      "Aquamarine",
      "Off-White",
      "Muave Orange",
    ],
    
    sizes: [
      "small", 
      "medium", 
      "large"
    ]
  };
  

  return (
    <SelectCheckboxStyle>
      <button type="button" onClick={() => setShow(!show)}>
        {TextButton} <Icons icon={Icon} />
      </button>
      {show && item.sizes.map((value) => <RadioCheckbox Text={value} />)}
    </SelectCheckboxStyle>
  );
}
