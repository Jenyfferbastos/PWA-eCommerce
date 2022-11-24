import "./ShopByBrandsStyle";
import LogoZara from "../../assets/img/path815.png";
import LogoDeG from "../../assets/img/Vector.png";
import LogoHeM from "../../assets/img/g45263.png";
import LogoChanel from "../../assets/img/g2452.png";
import LogoPrada from "../../assets/img/Prada-Logo 1.png";
import LogoBiba from "../../assets/img/logo 1.png";
import { ShopByBrandsCardStyle, ShopByBrandsStyle } from "./ShopByBrandsStyle";

export function ShopByBrands() {
  return (
    <ShopByBrandsStyle>
      <ShopByBrandsCardStyle><img src={LogoZara} /></ShopByBrandsCardStyle>

      <ShopByBrandsCardStyle><img src={LogoDeG} /></ShopByBrandsCardStyle>

      <ShopByBrandsCardStyle><img src={LogoHeM} /></ShopByBrandsCardStyle>

      <ShopByBrandsCardStyle><img src={LogoChanel} /></ShopByBrandsCardStyle>

      <ShopByBrandsCardStyle><img src={LogoPrada} /></ShopByBrandsCardStyle>

      <ShopByBrandsCardStyle><img src={LogoBiba} /></ShopByBrandsCardStyle>
    </ShopByBrandsStyle>
  );
}
