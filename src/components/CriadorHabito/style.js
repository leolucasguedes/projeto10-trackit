import styled from "styled-components";

export const CriarHabito = styled.section`
  width: 340px;
  height: 180px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 17px;

  input{
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
  }
`;

export const DivDias = styled.div`
  width: 312px;
  height: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Dias = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  margin: 0px 4px;

  h1 {
    color: #dbdbdb;
    font-style: normal;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 24.97px;
  }
`;

export const Butoes = styled.div`
  width: 340px;
  height: 37px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 29px;
`;

export const Salvar = styled.button`
  width: 84px;
  height: 35px;
  background-color: #52b6ff;
  border: none;
  border-radius: 4.64px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 15.98px;
  font-weight: 400;
  font-style: normal;
  line-height: 19.97px;
  text-align: center;
  color: #ffffff;
  margin-right: 16px;
`;

export const Cancelar = styled.button`
  width: 84px;
  height: 35px;
  background-color: #ffffff;
  border: none;
  border-radius: 4.64px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 15.98px;
  font-weight: 400;
  font-style: normal;
  line-height: 19.97px;
  text-align: center;
  color: #52b6ff;
  margin: 0px 5px;
`;

export const HabitoCriado = styled.section`
  width: 340px;
  height: 91px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 17px;
`;

export const DivCima = styled.div`
  width: 340px;
  height: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #666666;
    font-style: normal;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 24.97px;
    margin-left: 18px;
    margin-bottom: 5px;
  }

  img{
      width: 15px;
      height: 15px;
  }
`;