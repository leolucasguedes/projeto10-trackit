import styled from "styled-components";

function HabitoHoje() {
  return (
    <Habito>
      <Div1>
        <h1>Ler</h1>
        <p>Sequência atual:</p>
        <p>Seu recorde:</p>
      </Div1>
      <Div2>
        <Check>OK</Check>
      </Div2>
    </Habito>
  );
}

export default HabitoHoje;

const Habito = styled.section`
  width: 340px;
  height: 94px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 0px 17px;
`;

const Div1 = styled.div`
  width: 223px;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    color: #666666;
    font-style: normal;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 24.97px;
    margin-bottom: 5px;
  }

  p {
    color: #666666;
    font-style: normal;
    font-weight: 400;
    font-size: 12.98px;
    line-height: 16.22px;
  }
`;

const Div2 = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Check = styled.button`
  width: 69px;
  height: 69px;
  background-color: #ebebeb;
  border: solid 1px #e7e7e7;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 25.98px;
  font-weight: 400;
  font-style: normal;
  line-height: 19.97px;
  text-align: center;
  color: #52b6ff;
  margin: 0px 5px;
`;
