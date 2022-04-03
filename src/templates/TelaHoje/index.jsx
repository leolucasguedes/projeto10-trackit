import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import Header from "./../../components/Header";
import Footer from "../../components/Footer";

import { Main, DivCima, DivTarefas } from "./style.js";

function TelaHoje() {
  var dayjs = require('dayjs')
  console.log(dayjs);
  //dayjs().format()
  var now = dayjs()
  dayjs.locale('pt-br');
  var Diadasemana = dayjs().format('dddd, DD/MM');
  //var Diadasemana = dayjs().locale('pt-br').format('dddd, DD/MM');
  console.log(Diadasemana);
  console.log(now);
  return (
    <>
      <Header />
      <Main>
        <DivCima>
          <h1>Segunda 17/05</h1>
          <p>Nenhum hábito concluído ainda</p>
        </DivCima>
        <DivTarefas></DivTarefas>
      </Main>
      <Footer />
    </>
  );
}

export default TelaHoje;
