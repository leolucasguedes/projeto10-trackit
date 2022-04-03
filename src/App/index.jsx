import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import UsuarioContext from "../Api/UsuarioContext";

import TelaInicial from "./../templates/TelaInicial";
import TelaCadastro from "./../templates/TelaCadastro"
import TelaHabitos from "./../templates/TelaHabitos"
import TelaHoje from "./../templates/TelaHoje"
import TelaHistorico from "./../templates/TelaHistorico"


function App() {
  const [token, setToken] = useState(null);
  const [dados, setDados] = useState({});

  return (
    <UsuarioContext.Provider value={{dados, setDados}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaInicial salvarToken={(token) => setToken(token)} />}></Route>
        <Route path="/cadastro" element={<TelaCadastro />}></Route>
        <Route path="/habitos" element={<TelaHabitos token={token} />}></Route>
        <Route path="/hoje" element={<TelaHoje />}></Route>
        <Route path="/historico" element={<TelaHistorico />}></Route>
      </Routes>
    </BrowserRouter>
    </UsuarioContext.Provider>
  );
}

export default App;