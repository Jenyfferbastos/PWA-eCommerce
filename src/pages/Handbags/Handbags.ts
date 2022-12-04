import styled from "styled-components";
import { px2vw } from "../../utils/px2vw";

export const ProductListing = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${px2vw(30)};
  justify-content: space-between;
  width: 75%;
  .containerCheckbox{
    display: flex;
  }
`;
export const ContainerProductListing = styled.div`
display: flex;
flex-direction: column;
`;

