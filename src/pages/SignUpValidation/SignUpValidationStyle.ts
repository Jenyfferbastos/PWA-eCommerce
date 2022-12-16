import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const SignUpValidationStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 70vh;
  
  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    color: #1b4b66;
  }
  p {
    font-size: 0.875rem;
    font-weight: 500;
    color: #626262;
  }
  ${mediaQueries.desktop} {

    .containerText {
      display: flex;
      flex-direction: column;
      justify-content: left;
      width: 24vw;
      gap: 10px;
    }
  }
  ${mediaQueries.mobile} {
    .containerText {
      display: flex;
      flex-direction: column;
      justify-content: left;
      gap: 10px;
      width: 90vw;
    }
  }

  .containerInput {
    display: flex;
    gap: 5px;
  }
  input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    border: none;
    width: 52px;
    height: 42px;
    background: #f1f1f1;
    border-radius: 4px;
    align-self: stretch;
  }
  .navContainer {
    display: flex;
    gap: 5px;
    margin-top: 20px;
    margin-bottom: 80px;
  }
  a {
    color: #1b4b66;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
