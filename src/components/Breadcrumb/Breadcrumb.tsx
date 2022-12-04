import { BreadcrumbStyle } from "./BreadcrumbStyle";

export interface BreadcrumbProps{
  name: string;
  icon: string;
}

export function Breadcrumb({name, icon}:BreadcrumbProps){
  return(
    <BreadcrumbStyle>
    {name}{icon}{name}{icon}{name}
    </BreadcrumbStyle>
  )
}