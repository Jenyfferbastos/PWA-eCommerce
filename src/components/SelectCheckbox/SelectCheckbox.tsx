import { useState } from "react";
import { Icons } from "../Icons/Icons";
import { RadioCheckbox } from "../RadioCheckbox/RadioCheckbox";
import { SelectCheckboxStyle } from "./SelectCheckboxStyle";

export interface SelectCheckboxProps {
  Name: Array<string>;
  buttonTextValue: string;
  Icon: string;
}

export function SelectCheckbox({
  buttonTextValue,
  Icon,
  Name,
}: SelectCheckboxProps) {
  const [show, setShow] = useState(false);

  return (
    <SelectCheckboxStyle>
      <button type="button" onClick={() => setShow(!show)}>
        {buttonTextValue} <Icons icon={Icon} />
      </button>
      {show && [
        <RadioCheckbox
          buttonLabel={Name[0]}
          buttonTextValue={buttonTextValue}
        />,
        <RadioCheckbox
          buttonLabel={Name[1]}
          buttonTextValue={buttonTextValue}
        />,
        <RadioCheckbox
          buttonLabel={Name[2]}
          buttonTextValue={buttonTextValue}
        />,
        <RadioCheckbox
          buttonLabel={Name[3]}
          buttonTextValue={buttonTextValue}
        />,
        <RadioCheckbox
          buttonLabel={Name[4]}
          buttonTextValue={buttonTextValue}
        />,
        <RadioCheckbox
          buttonLabel={Name[5]}
          buttonTextValue={buttonTextValue}
        />,
        <RadioCheckbox
          buttonLabel={Name[6]}
          buttonTextValue={buttonTextValue}
        />,
        <RadioCheckbox
          buttonLabel={Name[7]}
          buttonTextValue={buttonTextValue}
        />,
      ]}
    </SelectCheckboxStyle>
  );
}
