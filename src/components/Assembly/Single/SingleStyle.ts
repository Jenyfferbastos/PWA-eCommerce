import styled from "styled-components";
import { mediaQueries } from "../../../utils/mediaQueries";
import { px2vw } from "../../../utils/px2vw";

export const SingleStyle = styled.div`
  ${mediaQueries.desktop}{
  button{
    color: #FFFFFF;
    background-color: #1B4B66;
    font-size: 0.825rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26vw;
    padding: 8px;
    cursor: pointer;

    img{
      margin-right: 1vw;
    }
  }
}
${mediaQueries.mobile}{
  button{
    color: #FFFFFF;
    background-color: #1B4B66;
    font-size: 0.825rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 74vw;
    padding: 8px;
    cursor: pointer;

    img{
      margin-right: 1.5vw;
    }
  }
}
`;