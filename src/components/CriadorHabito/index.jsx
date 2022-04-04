import { useState, useContext } from "react";
import axios from "axios";
import {
  CriarHabito,
  DivDias,
  Dias,
  Butoes,
  Cancelar,
  Salvar,
} from "./style.js";

//import { ThreeDots } from "react-loader-spinner";
import HabitosUsuarioContext from '../../context/HabitosContext';

function CriadorHabito(props) {
  const { etapa, setEtapa } = props;
  const { habito, setHabito } = props;
  const { buscaHabitos } = props;
  const { token } = props;
  const [frequencia, setFrequencia] = useState([]);
  //const [carregando, setCarregando] = useState(false)
  //buscaHabitos = buscaHabitos();

  const dias = [
    { id: 0, name: "D", isSelected: false },
    { id: 1, name: "S", isSelected: false },
    { id: 2, name: "T", isSelected: false },
    { id: 3, name: "Q", isSelected: false },
    { id: 4, name: "Q", isSelected: false },
    { id: 5, name: "S", isSelected: false },
    { id: 6, name: "S", isSelected: false },
  ];

  const {habitosUsuario, setHabitosUsuario} = useContext(HabitosUsuarioContext)
  const [selectedDay, setSelectedDay] = useState(dias);

  function selectDay(id) {
    const selectedDays = selectedDay.map((dia) => {
      if (dia.id === id) {
        dia.isSelected = !dia.isSelected;
      }
      return dia;
    });
    setSelectedDay([...selectedDays]);

    const DataDias = selectedDay.filter((dia) => dia.isSelected === true);
    //console.log(DataDias);
    const selectedDaysId = DataDias.map((dia) => dia.id);
    //console.log(selectedDaysId);
    setFrequencia([...selectedDaysId]);
  }

  function EnviaHabito(event) {
    event.preventDefault();

    if (frequencia.length < 1) {
      alert("Escolha ao menos um dia da semana para seu hábito");
      return;
    }

    //setCarregando(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const promise = axios.post(
      URL,
      {
        name: habito,
        days: frequencia,
      },
      config
    );
    promise.then((response) => {
      setHabito("");
      setFrequencia([]);
      setSelectedDay(dias);
      setHabitosUsuario([...habito]);
      //setCarregando(false);
      buscaHabitos();
    });

    promise.catch((e) => {
      console.log(e);
    });
  }

  if (etapa === 0) {
    return <></>;
  }

  if (etapa === 1) {
    return (
      <form onSubmit={EnviaHabito}>
        <CriarHabito>
          <input
            value={habito}
            onChange={(e) => setHabito(e.target.value)}
            type="text"
            placeholder="nome do hábito"
          ></input>
          <DivDias>
            {selectedDay.map((dia) => {
              const { id, name, isSelected } = dia;
              return (
                <Dias
                  key={id}
                  selected={isSelected}
                  onClick={() => selectDay(id)}
                >
                  <h1>{name}</h1>
                </Dias>
              );
            })}
          </DivDias>
          <Butoes>
            <Cancelar onClick={() => setEtapa(0)}>Cancelar</Cancelar>
            <Salvar type="submit">Salvar</Salvar>
          </Butoes>
        </CriarHabito>
      </form>
    );
  }
}

export default CriadorHabito;
