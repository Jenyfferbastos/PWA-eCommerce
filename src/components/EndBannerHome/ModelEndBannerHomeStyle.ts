import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { px2vw } from "../../utils/px2vw";

export const ModelEndBannerHomeStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: ${px2vw(30)};
  margin-left: ${px2vw(30)};
  line-height: ${px2vw(68)};

  ${mediaQueries.desktop} {
  img {
    border-radius: ${px2vw(12)};
  }
}
  ${mediaQueries.mobile} {
    img {
      width: 96vw;
      height: 20vh;
      border-radius: ${px2vw(36)};
    }
  }
`;
export const ContainerMainStyle = styled.div`
  h2 {
    position: absolute;
    top: ${px2vw(160)};
    left: ${px2vw(80)};
  }

  h3 {
    position: absolute;
    top: ${px2vw(110)};
    left: ${px2vw(80)};
    font-weight: 300;
  }

  ${mediaQueries.desktop} {
    img {
      height: ${px2vw(500)};
      width: 95vw;
    }
    h2 {
      font-size: ${px2vw(50)};
      width: ${px2vw(560)};
    }
    h3 {
      font-size: ${px2vw(26)};
    }
  }
  ${mediaQueries.mobile} {
    img {
      height: ${px2vw(500)};
    }
    h2 {
      font-size: ${px2vw(66)};
      width: ${px2vw(700)};
      margin-top: ${px2vw(30)};
    }
    h3 {
      font-size: ${px2vw(46)};
    }
  }

  ${mediaQueries.mobile} {
    button {
      position: absolute;
      bottom: ${px2vw(50)};
      left: ${px2vw(90)};
      width: ${px2vw(110)};
      border-radius: ${px2vw(70)};
      background-color: ${(props) => props.color};
      border: none;

      img {
        width: ${px2vw(70)};
        height: ${px2vw(90)};
      }
    }
  }
  ${mediaQueries.desktop} {
    button {
      display: none;
    }
  }
`;

export const ContainerSecondaryStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${px2vw(30)};
  align-items: center;

  h2 {
    position: absolute;
    top: ${px2vw(26)};
    width: ${px2vw(260)};
  }

  ${mediaQueries.desktop} {
    font-size: ${px2vw(30)};
    h2 {
      right: ${px2vw(20)};
    }
  
  img {
      width: 46vw;
      height: 18vw;
    }
  }
  ${mediaQueries.mobile} {
    font-size: ${px2vw(40)};
    h2 {
      right: ${px2vw(90)};
    }

    img {
      width: 46.5vw;
      height: 18vw;
    }
  }
  button {
    position: absolute;
    bottom: ${px2vw(50)};
    background-color: ${(props) => props.color};
    border: none;
  }

  ${mediaQueries.mobile} {
    img {
      height: ${px2vw(380)};
    }
    button {
      right: ${px2vw(90)};
      width: ${px2vw(100)};
      border-radius: ${px2vw(50)};

      img {
        width: ${px2vw(70)};
        height: ${px2vw(80)};
      }
    }
  }

  ${mediaQueries.desktop} {
    button {
      right: ${px2vw(90)};
      width: ${px2vw(60)};
      border-radius: ${px2vw(50)};

      img {
        width: ${px2vw(40)};
        height: ${px2vw(52)};
      }
    }
  }
`;
export const BannerStyle = styled.div`
  color: ${(props) => props.color};
  position: relative;
  align-items: center;
`;
