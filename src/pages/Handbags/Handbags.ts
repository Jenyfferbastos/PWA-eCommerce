import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";
import { px2vw } from "../../utils/px2vw";

export const HandbagsStyle = styled.div`
 ${mediaQueries.mobile} {
  margin-bottom: 8vh;

  h1{
  color: #1B4B66;
  margin-left: 3vw;
}
    .containerMain{
      display: flex;
      justify-content: space-between;
      margin: 4vw;
  }
  .containerCheckbox{
    display: none;
  }

 }
 ${mediaQueries.desktop} {
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
      top: 88%;
      left: 50%;
      width: 100vw;
      height: 38vh;
      transform: translate(-50%, -50%);
      background-color: #ffffff;
      border-radius: 5vw;
      padding: 5vw;
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      gap: 5vw;

      legend{
        border-bottom: solid 1px rgba(0, 0, 0, 0.12);
        margin-bottom: 2vh;
        padding-bottom: 1vh;
        font-size: 0.875rem;
        font-weight: 600;
        color: #626262;
      }
    }
  }
`;
export const ContainerInputStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .input{
    display: flex;

    label{
      font-size: 1rem;
      font-weight: 500;
      color: #626262;
      margin-left: 1vw;
    }
  }


`;

export const AppBar = styled.div`
${mediaQueries.desktop} {
  display: none;
}
${mediaQueries.mobile} {
  margin-top: 6vh;
  margin-left: 2vw;

  a{
    text-decoration: none;
    outline: none;
    display: flex;
  }

  h1{
    font-size: 1.25rem;
    font-weight: 600;
  }
}
`;

export const ProductListing = styled.div`
${mediaQueries.desktop} {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${px2vw(30)};
  justify-content: space-between;
  width: 69vw;
}
${mediaQueries.mobile} {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 96vw;
}
`;
export const ContainerProductListing = styled.div`
${mediaQueries.desktop} {
display: flex;
flex-direction: column;
width: 69vw;
}
`;

export const Sort = styled.div`

${mediaQueries.desktop} {
  display: none;
}

${mediaQueries.mobile}{
display: flex;
justify-content: space-between;
width: 100vw;
bottom: 0;
position: fixed;
z-index: 2;

button{
  width: 50vw;
  height: 7vh;
  border: none;
  background-color:  #FFFFFF;
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  color: #171520;
  font-size: 0.875rem;
  font-weight: 500;
}
}

`;

