import styled from "styled-components";
import { px2vw } from "../../utils/px2vw";

export const ProductsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${px2vw(20)};
  width: ${px2vw(600)};

  img{
    width: ${px2vw(80)};
    height: ${px2vw(80)};
    border-radius: ${px2vw(8)};
  }
  h2{
    font-size: ${px2vw(16)};
    font-weight: 500;
    color: #171520;
  }
  .containerMain{
    display: flex;
  }
  .informationProduct{
    font-size: ${px2vw(16)};
    font-weight: 400;
    color: #626262;
    display: grid;
    margin-left: ${px2vw(16)};
  }

  .containerFlex{
    width: ${px2vw(250)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .priceContainer{
    display: flex;
    justify-content: space-between;
    font-size:  ${px2vw(14)};
    font-weight: 400;
    color: #171520;
  }
  .links{
    display: flex;
    justify-content: space-around;
    font-size: ${px2vw(14)};
    font-weight: 600;
    
    .linkWishlist{
      color: #1B4B66;
    }
    .linkRemove{
      color: #B00020;
    }
  }
`;