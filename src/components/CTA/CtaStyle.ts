import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { px2vw } from "../../utils/px2vw";

export const CtaStyle = styled.div`
  ${mediaQueries.desktop} {
    display: none;
  }
  ${mediaQueries.mobile} {
    background-color: #1b4b66;
    display: flex;
    width: 94vw;
    border-radius: ${px2vw(36)};
    height: ${px2vw(460)};
    margin: ${px2vw(40)};

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${px2vw(520)};
      height: ${px2vw(100)};
      background-color: transparent;
      border-color: transparent;
      color: #ffffff;
      font-size: ${px2vw(60)};
      font-weight: 600;
      margin-top: ${px2vw(70)};

      img{
        margin-left: ${px2vw(10)};
        width: ${px2vw(100)};
      }
    }

    p {
      font-size: ${px2vw(56)};
      color: #ffffff;
    }
  }
`;
export const ImagePhone = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffe6ca;
  width: 26vw;
  height: ${px2vw(380)};
  margin: ${px2vw(40)};
  border-radius: ${px2vw(16)};

  img {
    height: ${px2vw(300)};
    align-self: center;
  }
`;

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
