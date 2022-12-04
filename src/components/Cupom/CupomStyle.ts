 import styled from "styled-components";
 import { px2vw } from "../../utils/px2vw";

 export const CupomStyle = styled.div`
    border: solid 1px #1b4b66;
    border-radius: ${px2vw(8)};
    width: ${px2vw(400)};
    display: flex;
    align-items: center;
    height: ${px2vw(100)};
    padding:  ${px2vw(20)};
    margin-right:  ${px2vw(20)};
    margin-top:  ${px2vw(16)};

    .textCupom{
      font-size:  ${px2vw(16)};
      font-weight: 500;
      color: #171520;
      margin-bottom: ${px2vw(10)};
    }
    .linkTermsAndConditions{
      font-size:  ${px2vw(14)};
      font-weight: 500;
      color: #1B4B66;
      text-decoration: none;
    }
    .codeCupom {
      background-color: #f1f1f1;
      height: ${px2vw(80)};
      width:  ${px2vw(160)};
      border-radius: ${px2vw(4)};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .useCode {
        font-weight: 500;
        font-size: ${px2vw(14)};
        color: #626262;
        margin-bottom:  ${px2vw(10)};
      }
      .code {
        font-size:  ${px2vw(16)};
        font-weight: 500;
        color: #171520;
      }
    }
    `;