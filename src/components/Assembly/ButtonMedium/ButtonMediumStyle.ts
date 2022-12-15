import styled from "styled-components";
import { mediaQueries } from "../../../utils/mediaQueries";
import { px2vw } from "../../../utils/px2vw";

export const ButtonMediumStyle = styled.div`
  ${mediaQueries.desktop} {
    button {
      color: #1b4b66;
      background-color: transparent;
      font-size: 0.825rem;
      font-weight: 600;
      border: 2px solid #1b4b66;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20vw;
      padding: 6.5px 20px 6.5px 20px;
      cursor: pointer;

      img {
        margin-right: 1vw;
      }
    }
  }
  ${mediaQueries.mobile} {
    button {
      background-color: #F4F4F4;
      border: none;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 12vw;
      height: 6.5vh;
      padding: 6.5px 20px 6.5px 20px;
      cursor: pointer;

      label{
        display: none;
      }
    }

  }
`;
