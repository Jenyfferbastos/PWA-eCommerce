import styled from "styled-components";
import { mediaQueries } from "../../../utils/mediaQueries";
import { px2vw } from "../../../utils/px2vw";

export const ButtonStyle = styled.button`
  color: #ffffff;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${mediaQueries.desktop} {
    width: ${px2vw(350)};
    height: ${px2vw(38)};
    background: #1b4b66;
    border-radius: ${px2vw(8)};
    font-weight: 600;
    font-size: ${px2vw(14)};
    margin-top: ${px2vw(16)};
    margin-bottom: ${px2vw(12)};
  }
  ${mediaQueries.mobile} {
    width: 90vw;
    height: 6vh;
    background: #1b4b66;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.825rem;
    margin-top: ${px2vw(16)};
    margin-bottom: ${px2vw(12)};
  }
`;
