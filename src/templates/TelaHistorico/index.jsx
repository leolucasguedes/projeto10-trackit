import Header from "./../../components/Header";
import Footer from "../../components/Footer";

import { Main, DivCima, DivTexto } from "./style.js";

function TelaHistorico() {
  return (
    <>
      <Header />
      <Main>
        <DivCima>
          <h1>Histórico</h1>
        </DivCima>
        <DivTexto>
          <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </DivTexto>
      </Main>
      <Footer />
    </>
  );
}

export default TelaHistorico;
