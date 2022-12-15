 import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
 import { px2vw } from "../../utils/px2vw";

 export const CupomStyle = styled.div`
 ${mediaQueries.desktop} {
    border: solid 1px #1b4b66;
    border-radius: 8px;
    width: 36vw;
    display: flex;
    align-items: center;
    height: 12vh;
    padding:  2vw;
    margin-right: 1vw;
    margin-top: 2vh;

    .textCupom{
      font-size:  1rem;
      font-weight: 500;
      color: #171520;
      margin-bottom: 1vh;
    }
    .linkTermsAndConditions{
      font-size:  0.875rem;
      font-weight: 500;
      color: #1B4B66;
      text-decoration: none;
    }
    .codeCupom {
      background-color: #f1f1f1;
      height: 8vh;
      width: 16vw;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .useCode {
        font-weight: 500;
        font-size: 0.875rem;
        color: #626262;
        margin-bottom: 1vh;
      }
      .code {
        font-size: 1rem;
        font-weight: 500;
        color: #171520;
      }
    }
  }
  ${mediaQueries.mobile}{
    border: solid 1px #1b4b66;
    border-radius: 8px;
    width: 90vw;
    display: flex;
    align-items: center;
    height: 12vh;
    padding:  2vw;
    margin-right: 1vw;
    margin-top: 2vh;

    .textCupom{
      font-size: 0.75rem;
      font-weight: 500;
      color: #171520;
      margin-bottom: 1vh;
    }
    .linkTermsAndConditions{
      font-size:  0.75rem;
      font-weight: 500;
      color: #1B4B66;
      text-decoration: none;
    }
    .codeCupom {
      background-color: #f1f1f1;
      height: 8vh;
      width: 36vw;
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .useCode {
        font-weight: 500;
        font-size: 0.625rem;
        color: #626262;
        margin-bottom: 1vh;
      }
      .code {
        font-size: 0.75rem;
        font-weight: 500;
        color: #171520;
      }
    }
  }
    `;