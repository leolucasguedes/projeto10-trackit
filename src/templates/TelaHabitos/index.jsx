import Header from "./../../components/Header";
import Footer from "../../components/Footer";

import { Main, DivButton, DivTexto } from "./style.js";

function TelaHabitos() {
  return (
    <>
      <Header />
      <Main>
        <DivButton>
          <h1>Meus hábitos</h1>
          <button>+</button>
        </DivButton>
        <DivTexto>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </DivTexto>
      </Main>
      <Footer />
    </>
  );
}

export default TelaHabitos;
