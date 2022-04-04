import { useState, useContext } from 'react';
import UsuarioContext from '../../context/UsuarioContext';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import Header from "./../../components/Header";
import Footer from "../../components/Footer";
import HabitoHoje from '../../components/HabitoHoje';

import { Main, DivCima, DivTarefas } from "./style.js";

function TelaHoje() {
  const [habitos, setHabitos] = useState([]);
  const { fotodeperfil } = useContext(UsuarioContext);

  //var dayjs = require('dayjs')

  //var now = dayjs()
  dayjs.locale('pt-br');
  var Diadasemana = dayjs().format('dddd, DD/MM');
  //var Diadasemana = dayjs().locale('pt-br').format('dddd, DD/MM');
  console.log(Diadasemana);
  //console.log(now);

  function mostrarHabitos(){
    if(habitos.length > 0) {
      return habitos.map(habito => {
        const {id,name, done, currentSequence, highestSequence} = habito;
        return (
          <HabitoHoje />
        )
      })
    }
    return <p>Carregando</p>
  }
  return (
    <>
      <Header />
      <Main>
        <DivCima>
          <h1>{Diadasemana}</h1>
          <p>Nenhum hábito concluído ainda</p>
        </DivCima>
        <DivTarefas>
          {mostrarHabitos}
        </DivTarefas>
      </Main>
      <Footer />
    </>
  );
}

export default TelaHoje;
