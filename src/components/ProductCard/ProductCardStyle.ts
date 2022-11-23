import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { px2vw } from "../../utils/px2vw";

export const ProductCardStyle = styled.div`
  display: flex;
  line-height: ${px2vw(20)};
  margin: ${px2vw(30)};
  cursor: grab;
  

  width: 95vw;
  overflow-y: hidden;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }
  h3 {
    color: #171520;
    font-size: ${px2vw(16)};
  }
  h4 {
    color: #626262;
    font-size: ${px2vw(14)};
  }
  span {
    color: #171520;
    font-size: ${px2vw(16)};
    font-weight: 600;
  }

  ${mediaQueries.mobile} {
    line-height: ${px2vw(60)};

    h3 {
      color: #171520;
      font-size: ${px2vw(46)};
    }
    h4 {
      color: #626262;
      font-size: ${px2vw(38)};
    }
    span {
      color: #171520;
      font-size: ${px2vw(36)};
      font-weight: 600;
    }
  }
`;

export const ImageBag = styled.img`
  margin-bottom: ${px2vw(16)};

  ${mediaQueries.mobile} {
    width: ${px2vw(580)};
  }
  ${mediaQueries.desktop} {
    width: ${px2vw(315)};
  }
`;

export const CardStyle = styled.div`
  margin-right: ${px2vw(36)};
  display: grid;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  ${mediaQueries.mobile} {
  img{
    width: ${px2vw(58)};
  }
}
`;
