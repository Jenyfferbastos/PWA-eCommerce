import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const HeaderStyle = styled.div`
  ${mediaQueries.mobile} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
 
  }
  ${mediaQueries.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: space-between;
    align-items: center;
    margin: 10px;
  }
`;

export const Home = styled.div`
  ${mediaQueries.mobile} {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 600;
    color: #1b4b66;
    width: 110px;

    button {
      background: none;
      border: none;
    }
  }
  ${mediaQueries.desktop} {
    button,
    h1 {
      display: none;
    }
  }
`;

export const ButtonsMobile = styled.div`
  ${mediaQueries.mobile} {
    display: flex;
    justify-content: space-between;
    width: 100px;
    button {
      background: none;
      border: none;
    }
  }
  ${mediaQueries.desktop} {
    button {
      display: none;
    }
  }
`;

export const Navigation = styled.div`
  ${mediaQueries.mobile} {
    display: none;
  }
  ${mediaQueries.desktop} {
    display: flex;
  }
  `
export const LogoStyle = styled.div`
  ${mediaQueries.mobile} {
    display: none;
  }
`;
export const LinkStyle = styled.div`
  ${mediaQueries.mobile} {
    display: none;
  }
  ${mediaQueries.desktop} {
    display: flex;
    justify-content: space-between;
    margin-left: 20px;

    a {
      text-decoration: none;
      color: #171520;
      font-size: 14px;
      font-weight: 600;
      margin-left: 15px;
    }
  }
`;

export const Search = styled.div`
  ${mediaQueries.desktop}{
    display: flex;
    justify-content: space-between;
    width: 40vw;
    margin-left: 100px;
  }
  ${mediaQueries.mobile}{
    display: none;
  }
`
export const SearchStyle = styled.div`
  ${mediaQueries.mobile} {
    display: none;
  }
  ${mediaQueries.desktop} {
    display: flex;
    border-radius: 2px;
    background-color: #F1F1F1;
    width: 26vw;
    align-items: center;
    padding: 8px;

    input{
      border: none;
      background-color: #F1F1F1;
      width: 300px;
      margin-left: 5px;
      outline: none;
    }
    input::placeholder{
      color: #626262;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;

export const ButtonsDesktop = styled.div`
  ${mediaQueries.mobile} {
    display: none;
  }
  ${mediaQueries.desktop} {
    button {
      margin-right: 18px;
      background: none;
      border: none;
    }
  }
`;
