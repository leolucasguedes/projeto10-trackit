import Header from "./../../components/Header";

import { Main, DivCima, DivTarefas } from "./style.js";

function TelaHoje() {
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
    </>
  );
}

export default TelaHoje;
