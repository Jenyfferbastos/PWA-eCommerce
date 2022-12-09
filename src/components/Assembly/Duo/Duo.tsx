import { Icons } from "../../Icons/Icons";
import { DuoPrimaryStyle, DuoSecondaryStyle, DuoStyle } from "./DuoStyle";

interface DuoProps {
  sizeDuoPrimary: string;
  sizeDuoSecondary: string;
  textDuoPrimary: string;
  iconDuoPrimary: string;
  iconDuoSecondary: string;
}

export function Duo({
  sizeDuoPrimary,
  sizeDuoSecondary,
  textDuoPrimary,
  iconDuoPrimary,
  iconDuoSecondary,
}: DuoProps) {
  return (
    <>
      <DuoStyle>
        <DuoSecondaryStyle sizeDuoSecondary={sizeDuoSecondary}>
          <Icons icon={iconDuoSecondary} />
        </DuoSecondaryStyle>

        <DuoPrimaryStyle sizeDuoPrimary={sizeDuoPrimary}>
          <Icons icon={iconDuoPrimary} />
          {textDuoPrimary}
        </DuoPrimaryStyle>
      </DuoStyle>
    </>
  );
}
