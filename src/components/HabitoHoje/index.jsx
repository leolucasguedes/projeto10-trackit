import axios from "axios";

import styled from "styled-components";

function HabitoHoje(props) {
  const { id, name, done, token, currentSequence, highestSequence } = props;
  const { buscaHabitosHoje } = props;

  function ConcluirHabito() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
      {},
      config
    );
    promise.then(() => buscaHabitosHoje());
    promise.catch((e) => console.log(e));
  }

  return (
    <Habito>
      <Div1>
        <h1>{name}</h1>
        {currentSequence === highestSequence ? (
          <>
            <p>
              Sequência atual de dias:{" "}
              <Feito done={done}>{currentSequence} dias</Feito>
            </p>
            <p>
              Seu recorde de dias:{" "}
              <Feito done={done}>{highestSequence} dias</Feito>
            </p>
          </>
        ) : (
          <>
            <p>
              Sequência atual de dias:{" "}
              <Feito done={done}>{currentSequence} dias</Feito>
            </p>
            <p>
              Seu recorde de dias: <Feito>{highestSequence} dias</Feito>
            </p>
          </>
        )}
      </Div1>
      <Div2 onClick={() => ConcluirHabito()} done={done}>
        <ion-icon name="checkmark-outline"></ion-icon>
      </Div2>
    </Habito>
  );
}

export default HabitoHoje;

const Habito = styled.section`
  width: 340px;
  height: 94px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 10px 17px;
`;

const Div1 = styled.div`
  width: 223px;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 10px 0px;

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

const Feito = styled.p`
  color: ${(props) => (props.done ? "#8FC549" : "#666666")};
  font-style: normal;
  font-weight: 400;
  font-size: 12.98px;
  line-height: 16.22px;
`;

const Div2 = styled.div`
  width: 69px;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.done ? "#8FC549" : "#EBEBEB")};
  border: solid 1px #e7e7e7;
  border-radius: 5px;

  ion-icon {
    font-size: 35px;
    font-weight: 400;
    color: #ffffff;
    margin: 0px 5px;
  }
`;
