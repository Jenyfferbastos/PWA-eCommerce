import styled from "styled-components";
import { px2vw } from "../../utils/px2vw";

export const VerticalCardStyle = styled.div`
  margin-top: ${px2vw(40)};
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: ${px2vw(5)};
  padding-bottom:  ${px2vw(40)};
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  .imageProduct {
    width: 100px;
  }

  .productDescription{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: ${px2vw(10)};

  h2 {
    font-size: ${px2vw(16)};
    font-weight: 500;
    color: #171520;
  }
  p {
    font-weight: 400;
    font-size:${px2vw(16)};
    color: #626262;
  }
}
.priceAndDelete{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p{
    font-size: ${px2vw(14)};
    font-weight: 500;
    color: #171520;
  }
  img{
    width: ${px2vw(30)};
  }
}
`;
