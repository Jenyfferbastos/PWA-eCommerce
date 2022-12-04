import styled from "styled-components";
import { px2vw } from "../../../utils/px2vw";

export const ButtonMediumStyle = styled.div`
  button{
    color:#1B4B66;
    background-color: transparent;
    font-size: ${px2vw(14)};
    font-weight: 600;
    border: 2px solid #1B4B66;
    border-radius: ${px2vw(8)};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${px2vw(240)};
    padding: 6.5px 20px 6.5px 20px;
    cursor: pointer;

    img{
      margin-right: ${px2vw(8)};
    }
  }
  `;