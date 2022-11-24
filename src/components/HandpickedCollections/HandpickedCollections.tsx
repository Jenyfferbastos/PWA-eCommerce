import { HandpickedCollectionsCard } from "./HandpickedCollectionsCard";
import ImagePersonalCare from "../../assets/img/laura-chouette-Atomp7YdMaE-unsplash 1.png"
import ImageHandbags from "../../assets/img/creative-headline-APNnyM36puU-unsplash 2.png"
import ImageWristWatches from "../../assets/img/louis-mornaud-peqgmGBtsfI-unsplash 2.png"
import ImageSunGlasses from "../../assets/img/laura-chouette-HPhjfQvaf5g-unsplash 2.png"
import { ContainerStyle, HandpickedCollectionsStyle } from "./HandpickedCollectionsStyle";

export function HandpickedCollections(){
  return(
    <>
    <HandpickedCollectionsStyle>
      <h1>Handpicked Collections </h1>
      <ContainerStyle>
      <HandpickedCollectionsCard img={ImagePersonalCare} name={"Personal Care"} />
      <HandpickedCollectionsCard img={ImageHandbags} name={"Handbags"} />
      <HandpickedCollectionsCard img={ImageWristWatches} name={"Wrist Watches"} />
      <HandpickedCollectionsCard img={ImageSunGlasses} name={"Sun Glasses"} />
      </ContainerStyle>
    </HandpickedCollectionsStyle>
    </>
  )
}