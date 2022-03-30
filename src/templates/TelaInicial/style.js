import styled from "styled-components";

export const Main = styled.main`
  width: 375px;
  height: 810px;
`;

export const DivLogo = styled.div`
  width: 375px;
  height: 279px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;

  img{
      width: 154.94px;
      height: 87.3px;
  }

  h1 {
    font-family: 'Playball', cursive;
    font-size: 68.98px;
    font-weight: 400;
    font-style: normal;
    line-height: 86.23px;
    text-align: center;
    color: #126BA5;
  }
`;

export const DivInputs = styled.div`
   width: 375px;
   height: 98px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const Input = styled.input`
   width: 303px;
   height: 45px;
   padding-left: 11px;
   border: 1px solid #D4D4D4;
   border-radius: 5px;
   margin-bottom: 6px; 
   font-size: 19.98px;

   &::placeholder {
      color: #DBDBDB;
      font-style: normal;
      font-weight: 400;
      font-size: 19.98px;
      line-height: 24.97px;
`;

export const Entrar = styled.button`
   width: 303px;
   height: 45px;
   background-color: #52B6FF;
   border: none;
   border-radius: 4.64px;
   font-family: 'Lexend Deca', sans-serif;
   font-size: 20.98px;
   font-weight: 400;
   font-style: normal;
   line-height: 26.22px;
   text-align: center;
   color: #FFFFFF;
   margin-left: 36px;
`;


export const DivTexto = styled.div`
  width: 375px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  
  p {
    font-size: 13.98px;
    font-weight: 400;
    font-style: normal;
    line-height: 17.47px;
    text-align: center;
    color: #52B6FF;
    text-decoration: underline #52B6FF;
  }
`;