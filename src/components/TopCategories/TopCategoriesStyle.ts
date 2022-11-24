import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const TopCategoriesStyle = styled.div`
  ${mediaQueries.mobile} {
    display: flex;
    align-items: center;
    width: 98vw;

    overflow-y: hidden;
    overflow-x: auto;

    ::-webkit-scrollbar {
      width: 0px;
    }
  }
  ${mediaQueries.desktop} {
    display: none;
  }
`;
