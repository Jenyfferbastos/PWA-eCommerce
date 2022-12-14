import styled from "styled-components";

export const SignUpValidationStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;

h1{
width: 305px;
height: 52px;
font-style: normal;
font-weight: 700;
font-size: 2.5rem;
line-height: 52px;
display: flex;
align-items: center;
color: #1B4B66;

}
.containerInput{
  display: flex;
  gap: 5px;
}
input{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 8px;
border: none;
width: 52px;
height: 42px;
background: #F1F1F1;
border-radius: 4px;
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
}
button{
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 8px;
width: 328px;
height: 44px;
background: #1B4B66;
border: none;
border-radius: 8px;
color: #FFFFFF;
font-weight: 600;
font-size: 0.825rem;
line-height: 24px;
}
`;