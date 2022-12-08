import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { px2vw } from "../../utils/px2vw";

export const ProductCardStyle = styled.div`
  display: flex;
  line-height: ${px2vw(20)};
  margin: ${px2vw(30)};
  cursor: grab;

  width: 95vw;
  overflow-y: hidden;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }
  a {
    text-decoration: none;
  }
  ${mediaQueries.mobile} {
    body.activeModal {
      overflow-y: hidden;
    }

    .modal,
    .overlay {
      z-index: 3;
      width: 100vw;
      height: 100vh;
      inset: 0;
      position: fixed;
    }

    .overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .modalContent {
      z-index: 4;
      position: absolute;
      bottom: 0;
      top: 78%;
      left: 50%;
      width: 100vw;
      height: 52vh;
      transform: translate(-50%, -50%);
      background-color: #ffffff;
      border-radius: 5vw;
      padding: 5vw;
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      gap: 5vw;
    }

    .btn-modal {
      position: absolute;
      background-color: transparent;
      border: none;
      font-size: ${px2vw(20)};
      font-weight: 600;
      color: #1b4b66;
    }
    .cardVertical {
      display: flex;
      align-items: initial;

      img {
        width: 20vw;
        border-radius: 1.7vw;
      }
      h2 {
        font-size: 4vw;
        font-weight: 600;
        color: #171520;
      }
      .containerText {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 7vh;
        margin-left: 4vw;
        margin-top: 1vw;

        .descriptionProduct {
          font-size: 4vw;
          font-weight: 500;
          color: #626262;
        }
        .priceProduct {
          font-size: 1rem;
          font-weight: 600;
          color: #171520;
        }
      }
    }
    .ratings {
      display: grid;
      grid-template-columns: 1fr 3fr 0.5fr;
      gap: 4vw;
      align-items: center;

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
    .selectOptions {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 7vh;

      .containerText {
        display: flex;
        flex-direction: row;
        margin-bottom: 2vh;

        h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: #171520;
        }
        p {
          font-size: 0.75rem;
          font-weight: 500;
        }
      }
      .buttons {
        display: flex;
        justify-content: space-between;
        width: 150px;
      }
      button {
        width: 35px;
        height: 35px;
        border-radius: 20px;
        border: 2px solid #b6b6b6;
        cursor: pointer;
        font-weight: 700;
        color: #171520;
        font-size: 1rem;
      }
      button:hover {
        border: 2px solid #1b4b66;
        background-color: #d9eff1;
      }
    }
  }
  ${mediaQueries.desktop} {
    .btn-modal {
      display: none;
    }
  }
`;

export const ContainerNavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: ${px2vw(30)};
  margin-top: ${px2vw(30)};
  margin-right: ${px2vw(30)};

  ${mediaQueries.desktop} {
    h2 {
      font-size: ${px2vw(32)};
    }
    button {
      font-size: ${px2vw(20)};
    }
  }
  ${mediaQueries.mobile} {
    h2 {
      font-size: ${px2vw(66)};
    }
    button {
      font-size: ${px2vw(56)};
    }
  }

  button {
    background-color: transparent;
    border: none;
    align-self: center;
    display: flex;
    align-items: center;
    color: #1b4b66;
  }
`;
