import { useState, useEffect, useContext } from "react";
import axios from "axios";
import PorcentagemContext from "../../context/PorcentagemContext";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import Header from "./../../components/Header";
import Footer from "../../components/Footer";
import HabitoHoje from "../../components/HabitoHoje";

import {
  Main,
  DivCima,
  DivTarefas,
  SemHabito,
  HabitosFeitos,
} from "./style.js";

function TelaHoje({ token }) {
  const [habitos, setHabitos] = useState([]);
  const [status, setStatus] = useState([]);

  const { porcentagem, setPorcentagem } = useContext(PorcentagemContext);

  //var now = dayjs()
  dayjs.locale("pt-br");
  let Diadasemana = dayjs().format("dddd, DD/MM");
  //console.log(Diadasemana);
  //console.log(now);

  useEffect(() => buscaHabitosHoje(), []);

  function buscaHabitosHoje() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );
    promise.then((response) => {
      const { data } = response;
      const statusSelecionado = data.map((habito) => habito.done);
      const done = statusSelecionado.filter((status) => status === true);
      const PorcentagemAtual = (
        (done.length / (statusSelecionado.length || 1)) *
        100
      ).toFixed(0);
      setHabitos(data);
      //console.log(data);
      setStatus(statusSelecionado);
      setPorcentagem(PorcentagemAtual);
    });
    promise.catch((e) => console.log(e));
  }

  return (
    <>
      <Header />
      <Main>
        <DivCima>
          <h1>{Diadasemana}</h1>
          {status.includes(true) ? (
            <HabitosFeitos>{porcentagem}% dos hábitos concluídos</HabitosFeitos>
          ) : (
            <SemHabito>Nenhum hábito concluído ainda</SemHabito>
          )}
        </DivCima>
        <DivTarefas>
          {habitos.map((habito) => {
            const { id, name, done, currentSequence, highestSequence } = habito;
            return (
              <HabitoHoje
                id={id}
                name={name}
                done={done}
                token={token}
                currentSequence={currentSequence}
                highestSequence={highestSequence}
                buscaHabitosHoje={buscaHabitosHoje}
              />
            );
          })}
        </DivTarefas>
      </Main>
      <Footer />
    </>
  );
}

export default TelaHoje;
