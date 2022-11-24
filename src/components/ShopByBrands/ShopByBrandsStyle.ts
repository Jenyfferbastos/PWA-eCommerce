import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { px2vw } from "../../utils/px2vw";

export const ShopByBrandsStyle = styled.div`
  ${mediaQueries.desktop} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: ${px2vw(15)};
    align-items: center;
    margin: ${px2vw(30)};
  }
  ${mediaQueries.mobile} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-self: center;
    margin: ${px2vw(38)};
  }
`;

export const ShopByBrandsCardStyle = styled.div`
  display: flex;
  background-color: #f4f4f4;

  border-radius: ${px2vw(20)};
  align-items: center;
  justify-content: center;

  img {
    align-self: center;
  }

  ${mediaQueries.desktop} {
    width: ${px2vw(210)};
    height: ${px2vw(200)};

    img {
      width: ${px2vw(140)};
      padding: ${px2vw(10)};
    }
  }
  ${mediaQueries.mobile} {
    width: ${px2vw(390)};
    height: ${px2vw(370)};
    margin-bottom: ${px2vw(36)};
    margin-left: ${px2vw(46)};

    img {
      width: ${px2vw(260)};
    }
  }
`;
