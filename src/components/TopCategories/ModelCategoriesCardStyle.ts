import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { px2vw } from "../../utils/px2vw";

export const ModelCategoriesCardStyle = styled.div`
  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:  ${px2vw(40)};


    h2{
      font-size: ${px2vw(46)};
    }
    img{
        background-color: #F4F4F4;
        width:  ${px2vw(250)};
        border-radius: ${px2vw(26)};
    }
  }
  ${mediaQueries.desktop} {
    display: none;
  }
`