import { generalIcons } from "./GeneralIcons";
import { navigationIcons } from "./NavigationIcons";
import { productIcons } from "./ProductIcons";

export interface IconsProps {
  icon: string;
}

export function Icons({ icon }: IconsProps) {
  return (
    <>
      <img src={determinesIcons(icon)} />
    </>
  );
}

function determinesIcons(icon: string): string {
  const allIcons = {
    ...generalIcons,
    ...navigationIcons,
    ...productIcons,
  };
  return allIcons[icon];
}
