import styled from "styled-components";

export const Main = styled.main`
  width: 375px;
  height: 810px;
  margin-top: 95px;
`;

export const DivCima = styled.div`
  width: 375px;
  height: 53px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 22.98px;
    font-weight: 400;
    font-style: normal;
    line-height: 28.72px;
    color: #126BA5;
    margin-left: 17px;
  }

  p{
    font-size: 17.98px;
    font-weight: 400;
    font-style: normal;
    line-height: 22.47px;
    color: #BABABA;
    margin-left: 17px;
  }
`;

export const DivTarefas = styled.div`
  width: 375px;
  height: 302px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;