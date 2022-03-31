import styled from "styled-components";

export const Main = styled.main`
  width: 375px;
  height: 810px;
  margin-top: 95px;
`;

export const DivButton = styled.div`
  width: 375px;
  height: 37px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 22.98px;
    font-weight: 400;
    font-style: normal;
    line-height: 28.72px;
    text-align: center;
    color: #126ba5;
    margin-left: 17px;
  }

  button {
    width: 40px;
    height: 35px;
    border: none;
    border-radius: 4.64px;
    background-color: #52B6FF;
    font-family: "Lexend Deca", sans-serif;
    font-size: 26.98px;
    font-weight: 400;
    font-style: normal;
    line-height: 33.72px;
    text-align: center;
    color: #FFFFFF;
    margin-right: 17px;
  }
`;

export const DivTexto = styled.div`
  width: 375px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  
  p {
    font-size: 17.98px;
    font-weight: 400;
    font-style: normal;
    line-height: 22.47px;
    color: #666666;
    margin: 0px 15px;
  }
`;