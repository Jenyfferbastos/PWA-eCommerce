import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { px2vw } from "../../utils/px2vw";

export const ProductPageStyle = styled.div`
  ${mediaQueries.desktop} {
    display: flex;
    flex-direction: column;
    margin-top: ${px2vw(110)};
    width: 100vw;
    height: ${px2vw(600)};
    color: black;

    .containerMain {
      display: flex;
    }
    .containerProductPics {
      margin-left: ${px2vw(50)};
      img {
        width: ${px2vw(530)};
      }
    }
    .containerProductInfo {
      margin: ${px2vw(20)};
    }
    .containerProductNameAndDescription {
      margin-bottom: ${px2vw(28)};
      h1 {
        font-size: ${px2vw(34)};
        font-weight: 600;
        color: #13101e;
      }
      p {
        font-size: ${px2vw(20)};
        font-weight: 600;
        color: #626262;
      }
    }
    .containerRatings {
      display: flex;
      justify-content: space-between;
      width: ${px2vw(296)};
      align-items: center;
      margin-bottom: ${px2vw(28)};
      img {
        margin-right: ${px2vw(5)};
      }
      p {
        color: #b6b6b6;
        font-size: ${px2vw(16)};
        font-weight: 400;
      }
    }
    .productPricing {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: ${px2vw(360)};
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      margin-bottom: ${px2vw(28)};

      .pricingBefore {
        font-size: ${px2vw(40)};
        font-weight: 700;
        color: #171520;
      }
      .pricingAfter {
        font-size: ${px2vw(34)};
        font-weight: 600;
        color: #b6b6b6;
      }
      .pricingDiscount {
        font-size: ${px2vw(20)};
        font-weight: 600;
        color: #ff404b;
      }
    }

    .pinCodeCheck {
      display: flex;
      align-items: center;

      h3 {
        margin-bottom: ${px2vw(10)};
      }
      .textPinCodeCheck {
        margin-right: ${px2vw(23)};
      }
    }
    .quantity {
      margin-top: ${px2vw(34)};
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: ${px2vw(186)};
      h4 {
        font-size: ${px2vw(20)};
        font-weight: 600;
        color: #13101e;
      }
    }

    .containerCupom {
      display: flex;
    }
    .buttonsAdd {
      display: flex;
      margin-top: ${px2vw(35)};

      button {
        margin-right: ${px2vw(20)};
      }
    }
  }
  ${mediaQueries.mobile} {
    margin-top: 10vh;
    .containerProductPics {
      margin-left: 5vw;
      img {
        width: 90vw;
      }
    }
    .containerProductNameAndDescription {
      margin-bottom: ${px2vw(28)};
      margin: 5vw;
      h1 {
        font-size: 1rem;
        font-weight: 500;
        color: #13101e;
      }
      p {
        font-size: 0.825rem;
        font-weight: 500;
        color: #626262;
      }
    }
    .containerRatings {
      display: none;
    }

    .productPricing {
      margin: 5vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50vw;
      margin-bottom: ${px2vw(28)};

      .pricingBefore {
        font-size: 1.25rem;
        font-weight: 700;
        color: #171520;
      }
      .pricingAfter {
        font-size: 0.825rem;
        font-weight: 600;
        color: #b6b6b6;
        text-decoration-line: line-through;
      }
      .pricingDiscount {
        font-size: 0.825rem;
        font-weight: 600;
        color: #ff404b;
      }
    }
    .ratings {
      ${mediaQueries.desktop} {
        display: none;
      }
      
      ${mediaQueries.mobile} {
      margin: 5vw;
      display: grid;
      grid-template-columns: 1fr 3fr 0.5fr;
      gap: 4vw;
      align-items: center;
      }
      .ratingsPill {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: #f4f4f4;
        border-radius: 1.5vw;
        width: 20vw;
        height: 6vh;
        padding: 1vw;

        p {
          color: #171520;
          font-size: 0.875rem;
          font-weight: 600;
          margin-top: 1vw;
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 4vh;

        h3 {
          font-size: 0.875rem;
          font-weight: 600;
          color: #171520;
        }
        p {
          font-size: 0.875rem;
          font-weight: 500;
          color: #626262;
        }
      }
    }
    .quantity {
      display: none;
    }
    .pinCodeCheck {
      margin: 5vw;
      display: flex;
      flex-direction: column;
      width: 90vw;

      h3 {
        margin-bottom: ${px2vw(10)};
        font-size: 0.825rem;
        font-weight: 600;
        color: #171520;
      }
      .textPinCodeCheck {
        margin-right: ${px2vw(23)};
        font-size: 0.825rem;
        font-weight: 500;
        color: #626262;
      }
    }
    .containerCupom {
      margin: 5vw;
      display: flex;
      overflow-x: auto;
      height: 16vh;
      width: 100vw;
    }
    .buttonsAdd {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      bottom: 0;
      background-color: #ffffff;
      width: 100vw;
      height: 10vh;

      button {
        margin-right: ${px2vw(20)};
      }
    }
  }
`;
export const AppBar = styled.div`
  margin: 4vw;
  ${mediaQueries.desktop} {
    display: none;
  }
`;

export const ProductDescription = styled.div`
  ${mediaQueries.desktop} {
    height: 400px;
    margin: 20px 70px 120px 20px;
    .buttonsProductDescription {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: #f1f1f1;
      width: 97vw;
      height: ${px2vw(48)};
      font-size: ${px2vw(16)};
      font-weight: 500;
      border-radius: ${px2vw(12)};

      button {
        border: none;
        background-color: transparent;
        color: #626262;
        margin-left: ${px2vw(12)};
        cursor: pointer;
        border-radius: ${px2vw(8)};
        padding: 2px 10px;
        height: 28px;
      }
      button:focus {
        background-color: #1b4b66;
        color: #ffffff;
      }
      button:hover {
        background-color: #1b4b66;
        color: #ffffff;
      }
    }
    .textDescription {
      font-size: ${px2vw(16)};
      p {
        margin-top: ${px2vw(12)};
      }
    }
  }
  ${mediaQueries.mobile} {
    margin-bottom: 10vh;

    button{
      display: flex;
      border: none;
    }
    .textDescription {
      display: none;
    }
  }
`;
