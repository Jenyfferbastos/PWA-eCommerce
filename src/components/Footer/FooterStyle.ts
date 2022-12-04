import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { px2vw } from "../../utils/px2vw";


export const FooterStyle = styled.div`
  ${mediaQueries.desktop} {
    background-color: #1b4b66;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
  ${mediaQueries.mobile} {
    display: none;
  }
`;

export const ContainerTextStyle = styled.div`
  ${mediaQueries.desktop} {
    display: flex;
    flex-direction: column;
    line-height: ${px2vw(26)};
    margin: ${px2vw(42)};

    .linkTitle {
      color: #ffffff;
      font-size: ${px2vw(16)};
      font-weight: 500;
    }
    a {
      color: #b6b6b6;
      text-decoration: none;
      font-size: ${px2vw(16)};
    }
  }
`;
export const ContainerLinks = styled.div``;

export const ContainerLogos = styled.div`
  ${mediaQueries.desktop} {
    align-self: flex-end;
    img {
      width: ${px2vw(40)};
      height: ${px2vw(40)};
      margin-top: ${px2vw(40)};
      margin-right: ${px2vw(12)};
      margin-bottom:  ${px2vw(20)};
    }
  }
`;
export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: ${px2vw(700)};
  margin: ${px2vw(12)};
p{
  align-self: flex-end;
  color: #B6B6B6;
  margin-right: ${px2vw(12)};
}
`;
export const LocationStyle = styled.div`
  display: flex;
  align-self: flex-end;
  color: #ffffff;
  margin-right: ${px2vw(12)};
  margin-bottom:  ${px2vw(10)};


  h3 {
    font-size:  ${px2vw(18)};
    font-weight: 400;
  }
`;
