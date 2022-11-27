import { BannerHandbags } from "../../components/BannerHandbags/BannerHandbags";
import { Header } from "../../components/Header/Header";
import { RadioCheckbox } from "../../components/RadioCheckbox/RadioCheckbox";
import { SelectCheckbox } from "../../components/SelectCheckbox/SelectCheckbox";

export function Handbags(){
  return(
    <>
    <Header />
    <BannerHandbags />
    <SelectCheckbox  TextButton={"teste"} Icon={"Plus"}  />
    </>
  )
}