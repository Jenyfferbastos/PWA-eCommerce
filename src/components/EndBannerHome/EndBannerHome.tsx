import "./EndBannerHomeStyle";
import { EndBannerHomeStyle } from "./EndBannerHomeStyle";
import Image1 from "../../assets/img/image1.png";
import Image2 from "../../assets/img/image2.png";
import Image3 from "../../assets/img/image3.png";
import { ModelEndBannerHome } from "./ModelEndBannerHome";

export function EndBannerHome() {
  return (
    <EndBannerHomeStyle>
      <ModelEndBannerHome
        FirstImage={Image1}
        SecondImage={Image2}
        ThirdImage={Image3}
        TextFirstImage={"Makeup Accessories from Top Brands"}
        TextSecondImage={"Skincare Essentials"}
        TextThirdImage={"Facepacks & Peels"}
        FirstColor={"#97451F"}
        SecondColor={"#A53F64"}
        ThirdColor={"#1B4B66"}
        TextFirstImageTwo={"LIFESTYLE"}
        FirstIcon={"ArrowRed"}
        SecondaryIcon={"ArrowPink"}
        ThirdIcon={"ArrowBlue"}
      />
    </EndBannerHomeStyle>
  );
}
