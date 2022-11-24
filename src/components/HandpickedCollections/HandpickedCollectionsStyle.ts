import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { px2vw } from "../../utils/px2vw";

export const HandpickedCollectionsStyle = styled.div`
  background-color: #1b4b66;
  padding: ${px2vw(20)};
  align-items: center;

  h1 {
    color: #ffffff;
    margin: ${px2vw(36)};
  }
  ${mediaQueries.desktop} {
    h1{
      font-size: ${px2vw(36)};
    } 
  }
  ${mediaQueries.mobile} {
    h1{
      font-size: ${px2vw(56)};
    }
  }
`;
export const ContainerStyle = styled.div`
  ${mediaQueries.desktop} {
    display: flex;
    
  }
  ${mediaQueries.mobile} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;
