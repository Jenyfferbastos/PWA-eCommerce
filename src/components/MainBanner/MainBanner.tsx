import "./MainBannerStyle";
import { MainBannerStyle, TextBanner } from "./MainBannerStyle";
import imageBanner from "../../assets/img/image.svg";

export function MainCarousel() {

  return (
    <MainBannerStyle>
      <img src={imageBanner} />
      <TextBanner>
        <h2>Carry your<br></br> Funk</h2>
        <p>Trendy handbags collection <br></br>for your party animal</p>
      </TextBanner>
    </MainBannerStyle>
  );
}
