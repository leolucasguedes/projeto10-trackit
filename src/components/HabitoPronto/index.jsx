import axios from "axios";

import styled from "styled-components";


function HabitoPronto(props) {
  const {buscaHabitos} = props;
  const { token } = props;
  const { name, days, id } = props;
  const diasARR = [
    { id: 0, name: "D" },
    { id: 1, name: "S" },
    { id: 2, name: "T" },
    { id: 3, name: "Q" },
    { id: 4, name: "Q" },
    { id: 5, name: "S" },
    { id: 6, name: "S" },
  ];

  function Delete() {
    window.confirm("Quer excluir esse hábito ?");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/habits/${id}`,
      config
    );
    promise.then((response) => {
      buscaHabitos();
    });
    promise.catch((e) => console.log(e));
  }
  return (
    <HabitoCriado>
      <DivCima>
        <h1>{name}</h1>
        <ion-icon onClick={() => Delete()} name="trash-outline"></ion-icon>
      </DivCima>
      <DivDias>
        {diasARR.map((dia) => {
          const { id, name } = dia;
          return (
            days.includes(id)?
            <DiaSelecionado>
              <h1>{name}</h1>
            </DiaSelecionado>:
            <Dias>
              <h1>{name}</h1>
            </Dias>
          );
        })}
      </DivDias>
    </HabitoCriado>
  );
}

export default HabitoPronto;

const HabitoCriado = styled.section`
  width: 340px;
  height: 91px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 17px;
`;

const DivCima = styled.div`
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

  ion-icon {
    width: 15px;
    height: 15px;
  }
`;

const DivDias = styled.div`
  width: 312px;
  height: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Dias = styled.div`
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

const DiaSelecionado = styled.div`
  width: 30px;
  height: 30px;
  background-color: #CFCFCF;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #d4d4d4;
  border-radius: 5px;
  margin: 0px 4px;

  h1 {
    color: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 19.98px;
    line-height: 24.97px;
  }
`;
