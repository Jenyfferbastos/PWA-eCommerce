import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const BannerAlertStyle = styled.div`
  margin-top: 80px;
  ${mediaQueries.desktop} {
    height: 50px;
    background-color: #f0f0f0;
    color: #171520;
    font-size: 14px;
    display: flex;
    justify-content: center;

    p {
      align-self: center;
    }
  }
  ${mediaQueries.mobile} {
    display: none;
  }
`;
