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
  .containerCheckout{
    display: flex;
    justify-content: space-between;
    margin: ${px2vw(20)};
  }

  .addressContainer {
    margin-bottom: ${px2vw(57)};
  }
  .addressContainer,
  .paymentsContainer {
    margin-left: ${px2vw(30)};
  }
  .selectAddress,
  .selectPayments {
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
  .formAddress {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 45vw;
    gap:  ${px2vw(30)};
    font-size: ${px2vw(16)};
    font-weight: 500;
    color: #171520;

    input {
      margin-top: 10px;
      border: none;
      display: flex;
      align-items: center;
      background: #f1f1f1;
      border-radius: ${px2vw(4)};
      height: ${px2vw(52)};
      height: ${px2vw(52)};
    }

    input::placeholder {
      font-size: ${px2vw(16)};
      font-weight: 500;
    }
    .inputEnterName,
    .inputEnterAddress,
    .inputEnterCity {
      width: ${px2vw(287)};
      padding:  ${px2vw(14)};
    }
    .inputEnterState,
    .inputEnterPinCode {
      width: ${px2vw(391)};
      padding:  ${px2vw(14)};
    }
    .inputEnterNumberArea {
      width: ${px2vw(80)};
      padding:  ${px2vw(14)};
    }
    .inputEnterNumber {
      width: ${px2vw(300)};
      padding:  ${px2vw(14)};
    }

    .containerNumber {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .formPayment {
    display: flex;
    flex-direction: column;
  }
  .paymentMthods {
    display: flex;
    justify-content: space-between;
    width: 49vw;

    .upiMthod,
    .cardMthod,
    .applePayMthod,
    .amazonPayMthod {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      text-align: center;
      border: 1px solid #e3e3e3;
      border-radius:  ${px2vw(12)};
      width: ${px2vw(165)};
      height: 20vh;
      padding-bottom: ${px2vw(20)};
      padding-right: ${px2vw(20)};

      .containerLogo {
        margin-top: 1vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: ${px2vw(16)};

        .image {
          margin-bottom: ${px2vw(10)};
          width: 8vw;
        }
        .imageCard{
          width: 4vw;
          margin-bottom: ${px2vw(10)};
        }
      }
    }
  }
  .paymentMthodsSecondary {
    border: 1px solid #1b4b66;
    border-radius: 8px;
    width: 49vw;
    margin-top: ${px2vw(68)};
    margin-bottom: ${px2vw(68)};

    .googlePayMthod,
    .PhonePePayMthod,
    .PaytmMthod {
      display: grid;
      grid-template-columns: 44vw 3vw;
      align-items: center;
      width: 47vw;
      padding: ${px2vw(10)};
    }

    .containerLogoSecondary {
      display: flex;
      align-items: center;
      font-size: ${px2vw(16)};
      padding: ${px2vw(6)};;

      .imageLogo {
        border: 1px solid #dcdcdc;
        border-radius:  ${px2vw(4)};
        width: ${px2vw(70)};
        height: ${px2vw(70)};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: ${px2vw(10)};

        img{
          width: ${px2vw(50)};;
        }
      }
    }
  }
  .actionForm{
    display: flex;
    justify-content: space-between;
    width: 49vw;
    align-items: center;
    margin-bottom: ${px2vw(52)};

  .buttonSubmitForm {
    border: none;
    font-size: ${px2vw(14)};
    font-weight: 600;
    padding:  ${px2vw(8)};
    width: ${px2vw(136)};
    height:  ${px2vw(44)};
    background: #1b4b66;
    border-radius:  ${px2vw(8)};
    color: #FFFFFF;
    cursor: pointer;
  }
  a{
    cursor: pointer;
    color: #1b4b66;
  }
}
.orderSummaryContainer{
  display: flex;
  flex-direction: column;

  .titleOrderSummary{
    font-size: ${px2vw(20)};
    font-weight: 600;
    color: #13101E;
    padding-bottom: ${px2vw(10)};
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin-bottom: ${px2vw(37)};
  }
}
`;
export const OrderSummaryProducts = styled.div`
 display: flex;
 margin-bottom: ${px2vw(41)};

.imageContainer{
  img{
    width: ${px2vw(70)};
    border-radius: ${px2vw(8)};
  }
}
  .informationProduct{
    font-size: ${px2vw(16)};
    display: grid;
    margin-left: ${px2vw(16)};

    h2{
      color:#171520;
      font-size: ${px2vw(16)};
      font-weight: 500;
    }

    p{
      color: #626262;
      font-weight: 400;
    }
  }
  `;
