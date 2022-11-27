import { BannerHandbagsStyle } from "./BannerHandbagsStyle";
import ImageBannerHandbags from "../../assets/img/hero.svg";

export function BannerHandbags(){
  return(
    <BannerHandbagsStyle>
      <img src={ImageBannerHandbags} />
    </BannerHandbagsStyle>
  )
}