import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";
import TelaInicial from "./../templates/TelaInicial";
import TelaCadastro from "./../templates/TelaCadastro"
import TelaHabitos from "./../templates/TelaHabitos"
import TelaHoje from "./../templates/TelaHoje"
import TelaHistorico from "./../templates/TelaHistorico"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TelaInicial />}></Route>
        <Route path="/cadastro" element={<TelaCadastro />}></Route>
        <Route path="/habitos" element={<TelaHabitos />}></Route>
        <Route path="/hoje" element={<TelaHoje />}></Route>
        <Route path="/historico" element={<TelaHistorico />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;