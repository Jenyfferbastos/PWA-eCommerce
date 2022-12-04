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
  a{
    text-decoration: none;
  }
  `;

  export const ContainerNavStyle =  styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: ${px2vw(30)};
    margin-top: ${px2vw(30)};
    margin-right: ${px2vw(30)};

    ${mediaQueries.desktop} {
    h2{
      font-size: ${px2vw(32)};
    }
    button{
      font-size: ${px2vw(20)};
    }
  }
  ${mediaQueries.mobile} {
    h2{
      font-size: ${px2vw(66)};
    }
    button{
      font-size: ${px2vw(56)};
    }
  }

    button{
      background-color: transparent;
      border: none;
      align-self: center;
      display: flex;
      align-items: center;
      color: #1B4B66;
      
    }
  `
