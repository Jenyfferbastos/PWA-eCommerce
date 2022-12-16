import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const SignUpAcessStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .containerImages {
    display: grid;
    grid-template-columns: repeat(5, 2fr);
    gap: 12px;
    align-items: center;
    justify-content: center;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0) 50%, rgba(255, 244, 229, 0.96) 100%);
    background-origin:initial;
    height: 60vh;
    padding-top: 5vh;

    img{
      z-index: -1;
    }
  }

  .Main {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    position: absolute;
    gap: 10px;
    top: 46vh;
    height: 40vh;
    width: 100vw;
    padding-bottom: 5vh;
    background: linear-gradient(
      180deg,
      rgba(255, 244, 229, 0) 0%,
      rgba(255, 250, 244, 0.96) 51.9%
    );

    ${mediaQueries.mobile} {
      padding-left: 5px;

    }
  }
  h1 {
    font-size: 1.875rem;
    font-weight: 700;
    color: #171520;
  }

  a {
    text-decoration: none;
  }
  .haveAccount {
    font-size: 0.825rem;
    font-weight: 600;
    color: #171520;
  }
`;
