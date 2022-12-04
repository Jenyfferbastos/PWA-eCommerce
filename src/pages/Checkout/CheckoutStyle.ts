import styled from "styled-components";
import { px2vw } from "../../utils/px2vw";

export const CheckoutStyle = styled.div`
  h1 {
    margin-top: ${px2vw(100)};
    margin-left: ${px2vw(30)};
    margin-bottom: ${px2vw(36)};
    color: #1b4b66;
    font-size: ${px2vw(34)};
    font-weight: 600;
  }

  .addressContainer, .paymentsContainer {
    margin-left: ${px2vw(30)};
  }
  .selectAddress, .selectPayments {
    margin-bottom: ${px2vw(29)};
    cursor: pointer;
    width: ${px2vw(700)};
    font-size: ${px2vw(20)};
    font-weight: 600;
    color: #13101e;
    border: none;
    padding-bottom: ${px2vw(10)};
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    text-align: start;
  }
  form {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 45vw;
    gap: 30px;
    font-size: ${px2vw(16)};
    font-weight: 500;
    color: #171520;

  input {
    margin-top: 10px;
    border: none;
    display: flex;
    align-items: center;
    gap: 12;
    background: #f1f1f1;
    border-radius: ${px2vw(4)};
    height: ${px2vw(52)};
    height: ${px2vw(52)};
  }

  input::placeholder{
    font-size: ${px2vw(16)};
    font-weight: 500;
  }
  .inputEnterName,
  .inputEnterAddress,
  .inputEnterCity {
    width: ${px2vw(287)};
    padding: 16px 12px 16px 16px;
  }
  .inputEnterState,
  .inputEnterPinCode {
    width: ${px2vw(391)};
    padding: 16px 12px 16px 16px;
  }
  .inputEnterNumberArea{
    width: ${px2vw(80)};
    padding: 16px 12px 16px 16px;
  }
  .inputEnterNumber{
    width: ${px2vw(300)};
    padding: 16px 12px 16px 16px;
  }

  .containerNumber{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

`;
