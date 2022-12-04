import styled from "styled-components";
import { px2vw } from "../../utils/px2vw";

export const OrderSummaryStyle = styled.div`
  .containerMain{
    display: flex;
    justify-content: space-between;
    width: ${px2vw(400)};
    margin-top: ${px2vw(30)};
    align-items: center;
    line-height: ${px2vw(30)};
  }
  h2{
    font-size: ${px2vw(20)};
    font-weight: 600;
    color: #13101E;
    padding-bottom: ${px2vw(10)};
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  .text{
    font-size: ${px2vw(16)};
    font-weight: 500;
    color:#626262;
  }
  .textLarge{
    font-size: ${px2vw(16)};
    font-weight: 600;
    color:#171520;
  }
  .containerPrice{
    text-align: right;
  }
`;
