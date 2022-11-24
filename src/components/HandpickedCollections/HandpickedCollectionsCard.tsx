import './HandpickedCollectionsCardStyle';
import { HandpickedCollectionsCardStyle } from './HandpickedCollectionsCardStyle';

export interface HandpickedCollectionsProps{
  img: string;
  name: string;
}

export function HandpickedCollectionsCard({img, name}: HandpickedCollectionsProps){
  return(
    <HandpickedCollectionsCardStyle>
      <img src={img} />
      <h2>{name}</h2>
    </HandpickedCollectionsCardStyle>
  )
}