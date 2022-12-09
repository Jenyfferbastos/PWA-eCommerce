import styled from "styled-components";
import { px2vw } from "../../../utils/px2vw";

export const SingleStyle = styled.div`
  button{
    color: #FFFFFF;
    background-color: #1B4B66;
    font-size: ${px2vw(14)};
    font-weight: 600;
    border: none;
    border-radius: ${px2vw(8)};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${px2vw(328)};
    padding: ${px2vw(10)};
    cursor: pointer;

    img{
      margin-right: ${px2vw(8)};
    }
  }
`;