import styled from "styled-components";
import { px2vw } from "../../utils/px2vw";

export const MyCartsStyle = styled.div`
  margin-top: ${px2vw(100)};

  .titleMyCarts {
    margin-left: ${px2vw(60)};
    margin-bottom: ${px2vw(36)};
    color: #1b4b66;
  }
  .contentProduct {
    display: flex;
    justify-content: space-between;
    width: 42vw;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin-left: ${px2vw(60)};
    color: #626262;
    font-size: ${px2vw(16)};
    font-weight: 500;
    padding-bottom: ${px2vw(10)};
  }
  .informationPriceProduct {
    display: flex;
    justify-content: space-between;
    width: 17.5vw;
  }

  .cartContainer {
    display: flex;
    justify-content: space-between;
    margin-left: ${px2vw(60)};
    margin-right: ${px2vw(60)};
  }
  .containerOrderSummary {
    width: ${px2vw(400)};
    display: flex;
    justify-content: space-between;
  }
  .couponCode {
    margin-left: ${px2vw(60)};
    margin-bottom: ${px2vw(36)};

    .selectCoupon {
      margin-bottom: ${px2vw(29)};
      cursor: pointer;
      width: ${px2vw(700)};
      font-size: ${px2vw(16)};
      font-weight: 500;
      color: #13101e;
      border: none;
      padding-bottom: ${px2vw(10)};
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
      background-color: transparent;
      display: flex;
      justify-content: space-between;
      text-align: start;
    }
  }
`;
