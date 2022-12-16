import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const SignUpStyle = styled.div`
  ${mediaQueries.desktop} {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 70vh;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
${mediaQueries.mobile} {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 80vh;
  margin-top: 20px;
  margin-left: 4px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1b4b66;
  }
  .containerInput {
    display: flex;
    gap: 10px;
  }
  input {
    background-color: #f1f1f1;
    border: none;
  }
  input::placeholder {
      color: #626262;
      font-size: 0.825rem;
      font-weight: 500;
      padding-left: 0.5vw;
    }

  ${mediaQueries.desktop} {
    input {
      height: 8vh;
      padding: 1vw;
      border-radius: 4px;
    }

    .inputCodDDI {
      width: 5vw;
    }
    .inputNumber {
      width: 18vw;
    }
  }
  ${mediaQueries.mobile} {
    input {
      height: 6vh;
      padding: 2vw;
      border-radius: 4px;
    }
    
    .inputCodDDI {
      width: 15vw;
    }
    .inputNumber {
      width: 75vw;
    }
  }
  p {
    font-size: 0.825rem;
    font-weight: 500;
    color: #626262;
    margin-bottom: 50px;
  }
`;
