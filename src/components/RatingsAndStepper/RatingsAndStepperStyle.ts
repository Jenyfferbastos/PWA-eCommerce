import styled from "styled-components";
import { px2vw } from "../../utils/px2vw";

export const RatingsAndStepperStyle = styled.div`
    .quantityContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px #1b4b66;
    width: ${px2vw(80)};
    height: ${px2vw(32)};
    border-radius: ${px2vw(4)};
    border: solid 1px #1b4b66;
    padding: ${px2vw(5)};

    img {
      width: ${px2vw(19)};
    }
  }
`;