import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const BannerHandbagsStyle = styled.div`
  ${mediaQueries.desktop} {
  img{
    width: 97vw;
    margin: 20px;
    margin-top: 80px
  }
}
${mediaQueries.mobile} {
  display: none;
}
`;