import { useState ,useContext } from 'react';
import UsuarioContext from '../../Api/UsuarioContext';

import Header from "./../../components/Header";
import Footer from "../../components/Footer";
import CriadorHabito from '../../components/CriadorHabito';

import { Main, DivButton, DivTexto } from "./style.js";


function TelaHabitos() {
  const [etapa, setEtapa] = useState(0);

  const{ dados } = useContext(UsuarioContext)
  return (
    <>
      <Header />
      <Main>
        <DivButton>
          <h1>Meus hábitos</h1>
          <button onClick={() => setEtapa(1)}>+</button>
        </DivButton>
        <CriadorHabito etapa={etapa} setEtapa={setEtapa} />
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
