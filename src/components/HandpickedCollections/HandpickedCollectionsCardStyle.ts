import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { px2vw } from "../../utils/px2vw";

export const HandpickedCollectionsCardStyle = styled.div`
  display: inline-block;
  position: relative;
  align-items: center;

  ${mediaQueries.desktop} {
    margin: ${px2vw(20)};
    img {
      width: ${px2vw(305)};
      border-radius: ${px2vw(20)};
    }
    h2 {
      font-size: ${px2vw(24)};
      position: absolute;
      bottom:${px2vw(26)};
      left: ${px2vw(26)};
    }
  }
  ${mediaQueries.mobile} {
    margin: ${px2vw(48)};
    img {
      width: ${px2vw(600)};
      border-radius: ${px2vw(20)};
    }
    h2 {
      font-size: ${px2vw(46)};
      position: absolute;
      bottom:${px2vw(56)};
      left: ${px2vw(26)};
    }
  }
`;
