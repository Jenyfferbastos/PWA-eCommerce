import { useState } from "react";
import { Icons } from "../Icons/Icons";
import { RadioCheckbox } from "../RadioCheckbox/RadioCheckbox";
import { SelectCheckboxStyle } from "./SelectCheckboxStyle";

export interface SelectCheckboxProps {
  Name: Array<string>;
  TextButton: string;
  Icon: string;
}

export function SelectCheckbox({
  TextButton,
  Icon,
  Name,
}: SelectCheckboxProps) {
  const [show, setShow] = useState(false);

  return (
    <SelectCheckboxStyle>
      <button type="button" onClick={() => setShow(!show)}>
        {TextButton} <Icons icon={Icon} />
      </button>
      {show && [
        <RadioCheckbox Text={Name[0]} />,
        <RadioCheckbox Text={Name[1]} />,
        <RadioCheckbox Text={Name[2]} />,
        <RadioCheckbox Text={Name[3]} />,
        <RadioCheckbox Text={Name[4]} />,
        <RadioCheckbox Text={Name[5]} />,
        <RadioCheckbox Text={Name[6]} />,
        <RadioCheckbox Text={Name[7]} />,
      ]}
    </SelectCheckboxStyle>
  );
}
