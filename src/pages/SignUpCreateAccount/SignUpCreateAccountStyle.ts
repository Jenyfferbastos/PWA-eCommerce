import styled from "styled-components";

export const SignUpStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 30px;

form{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h1{
  font-size: 2.5rem;
  font-weight: 700;
  color: #1B4B66;
}
.containerInput{
  display: flex;
  gap: 10px;
}
input{
  background-color: #F1F1F1;
  height: 8vh;
  padding: 1vw;
  border-radius: 4px;
  border: none;
}
input::placeholder{
  color: #626262;
  font-size: 0.825rem;
  font-weight: 500;
}

.inputCodDDI{
width: 5vw;
}
.inputNumber{
width: 18vw;
}
button{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 120px;
gap: 8px;
position: absolute;
width: 328px;
height: 44px;
background: #1B4B66;
border-radius: 8px;
border: none;
color: #FFFFFF;
font-weight: 600;
}
`;