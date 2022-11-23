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
  
  `;
