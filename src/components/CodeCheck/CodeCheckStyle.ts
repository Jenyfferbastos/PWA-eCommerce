import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { px2vw } from "../../utils/px2vw";

export const CodeCheckStyle = styled.div`
  ${mediaQueries.desktop} {
    display: flex;
    align-items: center;
    border-radius: 6vw;

    h3 {
      margin-bottom: ${px2vw(10)};
    }
    .inputTextField {
      outline: none;
      border: none;
      background-color: #f1f1f1;
      width: 20vw;
      height: ${px2vw(56)};
      padding-left: ${px2vw(20)};
    }
    .inputTextField::placeholder {
      font-size: ${px2vw(16)};
      font-weight: 500;
      color: #626262;
    }
    .textField {
      display: flex;
      align-items: center;
    }
    .actionCheck {
      border: none;
      background-color: #f1f1f1;
      height: ${px2vw(56)};
      width: ${px2vw(80)};
      cursor: pointer;
      color: #1b4b66;
      font-size: ${px2vw(14)};
      font-weight: 600;
    }
    .actionCheck:hover {
      font-size: ${px2vw(15)};
      transition-duration: 0.4s;
    }
  }
  ${mediaQueries.mobile} {
    margin-top: 2vh;
    .inputTextField {
      outline: none;
      border: none;
      background-color: #f1f1f1;
      width: 80vw;
      height: 7vh;
      padding-left: ${px2vw(20)};
      border-top-left-radius: 2vw;
      border-bottom-left-radius: 2vw;
    }

    .inputTextField::placeholder {
      font-size: 0.825;
      font-weight: 500;
      color: #626262;
      padding: 2vw;
    }
    .textField {
      display: flex;
      align-items: center;
    }
    .actionCheck {
      border: none;
      background-color: #f1f1f1;
      height: 7vh;
      width: 16vw;
      cursor: pointer;
      color: #1b4b66;
      font-size: 0.825rem;
      font-weight: 600;
      padding-right: 2vw;
      border-top-right-radius: 2vw;
      border-bottom-right-radius: 2vw;
    }
    .actionCheck:hover {
      font-size: 0.825rem;
      transition-duration: 0.4s;
    }
  }
`;
