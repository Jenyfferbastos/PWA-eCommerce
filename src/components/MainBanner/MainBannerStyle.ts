import styled from "styled-components";
import { px2vw } from "../../utils/px2vw";

export const MainBannerStyle = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${px2vw(20)};
  position: relative;

  img {
    width: 97vw;
    border-radius: ${px2vw(16)};
  }
`;
export const TextBanner = styled.div`
  background: rgba(222, 222, 222, 0.7);
  position: absolute;
  top:${px2vw(50)};
  right: ${px2vw(22)};
  z-index: 2;
  color: #1B4B66;
  width: ${px2vw(700)};
  padding:  ${px2vw(30)};
  border-top-left-radius: ${px2vw(30)};
  border-bottom-left-radius: ${px2vw(30)};

  h2 {
    font-size: ${px2vw(80)};
  }
  p {
    font-size: ${px2vw(40)};
  }
`;
