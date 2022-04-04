import { useState, useEffect, useContext } from "react";

import axios from "axios";

import HabitosUsuarioContext from "../../context/HabitosContext";

import Header from "./../../components/Header";
import Footer from "../../components/Footer";
import CriadorHabito from "../../components/CriadorHabito";
import HabitoPronto from "../../components/HabitoPronto";

import { Main, DivButton, DivTexto } from "./style.js";

function TelaHabitos({ token }) {
  const [etapa, setEtapa] = useState(0);
  const [habito, setHabito] = useState([]);

  const { habitosUsuario, setHabitosUsuario } = useContext(
    HabitosUsuarioContext
  );

  useEffect(() => buscaHabitos(), []);

  function buscaHabitos() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const promise = axios.get(URL, config); // post? (URL, body, config)
    promise.then((response) => {
      const { data } = response;
      //console.log(data);
      setHabitosUsuario(data);
    });
    promise.catch((err) => console.log(err.response));
  }

  return (
    <>
      <Header />
      <Main>
        <DivButton>
          <h1>Meus hábitos</h1>
          <button onClick={() => setEtapa(1)}>+</button>
        </DivButton>
        <CriadorHabito
          etapa={etapa}
          setEtapa={setEtapa}
          habito={habito}
          setHabito={setHabito}
          buscaHabitos={buscaHabitos}
          token={token}
        />
        {habitosUsuario.length === 0 ? (
          <DivTexto>
            <p>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </p>
          </DivTexto>
        ) : (
          habitosUsuario.map((habito) => {
            const { name, days, id } = habito;
            return (
              <HabitoPronto
                buscaHabitos={buscaHabitos}
                token={token}
                name={name}
                days={days}
                id={id}
              />
            );
          })
        )}
      </Main>
      <Footer />
    </>
  );
}

export default TelaHabitos;
