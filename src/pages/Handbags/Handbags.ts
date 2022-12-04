import styled from "styled-components";
import { px2vw } from "../../utils/px2vw";

export const HandbagsStyle = styled.div`
h1{
  color: #1B4B66;
  margin-left: 3vw;
}
    .containerMain{
      display: flex;
      justify-content: space-between;
      margin: 3vw;
  }
  .containerCheckbox{
    display: flex;
    flex-direction: column;
    width: 20vw;
  }
`;
export const ProductListing = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${px2vw(30)};
  justify-content: space-between;
  width: 69vw;

`;
export const ContainerProductListing = styled.div`
display: flex;
flex-direction: column;
width: 69vw;
`;

