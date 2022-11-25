import { Icons } from "../Icons/Icons";
import {
  BannerStyle,
  ContainerMainStyle,
  ContainerSecondaryStyle,
  ModelEndBannerHomeStyle,
} from "./ModelEndBannerHomeStyle";

export interface ModelEndBannerHomeProps {
  FirstImage: string;
  SecondImage: string;
  ThirdImage: string;
  TextFirstImage: string;
  TextFirstImageTwo: string;
  TextSecondImage: string;
  TextThirdImage: string;
  FirstColor: string;
  SecondColor: string;
  ThirdColor: string;
  FirstIcon: string;
  SecondaryIcon: string;
  ThirdIcon: string;
}

export function ModelEndBannerHome({
  FirstImage,
  SecondImage,
  ThirdImage,
  TextFirstImage,
  TextFirstImageTwo,
  TextSecondImage,
  TextThirdImage,
  FirstColor,
  SecondColor,
  ThirdColor,
  FirstIcon,
  SecondaryIcon,
  ThirdIcon


}: ModelEndBannerHomeProps) {
  return (
    <ModelEndBannerHomeStyle>
      <ContainerMainStyle>
        <BannerStyle color={FirstColor}>
          <img src={FirstImage} />
          <h3>{TextFirstImageTwo}</h3>
          <h2>{TextFirstImage}</h2>
          <button><Icons icon={FirstIcon} /></button>
        </BannerStyle>
      </ContainerMainStyle>
      <ContainerSecondaryStyle>
        <BannerStyle color={SecondColor}>
          <img src={SecondImage} />
          <h2>{TextSecondImage}</h2>
            <button><Icons icon={SecondaryIcon} /></button>
        </BannerStyle>
        <BannerStyle color={ThirdColor}>
          <img src={ThirdImage} />
          <h2>{TextThirdImage}</h2>
            <button><Icons icon={ThirdIcon} /></button>
        </BannerStyle>
      </ContainerSecondaryStyle>
    </ModelEndBannerHomeStyle>
  );
}
