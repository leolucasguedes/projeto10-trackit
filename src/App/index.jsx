import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import UsuarioContext from "../context/UsuarioContext";
import CarregandoContext from "../context/CarregandoContext";
import HabitosUsuarioContext from "../context/HabitosContext";
import PorcentagemContext from "../context/PorcentagemContext";

import TelaInicial from "./../templates/TelaInicial";
import TelaCadastro from "./../templates/TelaCadastro";
import TelaHabitos from "./../templates/TelaHabitos";
import TelaHoje from "./../templates/TelaHoje";
import TelaHistorico from "./../templates/TelaHistorico";

function App() {
  const [token, setToken] = useState(null);
  const [dataUsuario, setDataUsuario] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
    token: "",
  });
  const [carregando, setCarregando] = useState(false);
  const [habitosUsuario, setHabitosUsuario] = useState([]);
  const [porcentagem, setPorcentagem] = useState(0);

  return (
    <UsuarioContext.Provider value={{ dataUsuario, setDataUsuario }}>
      <CarregandoContext.Provider value={{ carregando, setCarregando }}>
        <HabitosUsuarioContext.Provider value={{ habitosUsuario, setHabitosUsuario }}>
          <PorcentagemContext.Provider value={{ porcentagem, setPorcentagem }}>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <TelaInicial salvarToken={(token) => setToken(token)} />
                  }
                ></Route>
                <Route path="/cadastro" element={<TelaCadastro />}></Route>
                <Route
                  path="/habitos"
                  element={<TelaHabitos token={token} />}
                ></Route>
                <Route
                  path="/hoje"
                  element={<TelaHoje token={token} />}
                ></Route>
                <Route path="/historico" element={<TelaHistorico />}></Route>
              </Routes>
            </BrowserRouter>
          </PorcentagemContext.Provider>
        </HabitosUsuarioContext.Provider>
      </CarregandoContext.Provider>
    </UsuarioContext.Provider>
  );
}

export default App;
