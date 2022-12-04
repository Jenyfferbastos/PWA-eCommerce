import styled from "styled-components";
import { px2vw } from "../../utils/px2vw";

export const CodeCheckStyle = styled.div`
    display: flex;
    align-items: center;
    border-radius: ${px2vw(6)};

    h3 {
      margin-bottom: ${px2vw(10)};
    }
    .inputTextField {
      outline: none;
      border: none;
      background-color: #f1f1f1;
      width: ${px2vw(268)};
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
`