import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import UsuarioContext from "../../Api/UsuarioContext.js";

import { Main, DivLogo, DivTexto, DivInputs, Input, Entrar } from "./style.js";

import Logo from "./../../assets/images/logo-trackit.png";


function TelaInicial({ salvarToken }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  //const { setDados } = useContext(UsuarioContext)

  function login() {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const promise = axios.post(URL, {
      email: email,
      password: senha,
    });
    promise.then((response) => {
      const { data } = response;
      //console.log(data);
      salvarToken(data.token);
      //setDados({ email, password })
      navigate("/habitos");
    });
  }

  return (
    <Main>
      <DivLogo>
        <img src={Logo} alt="Logo TrackIt" />
        <h1>TrackIt</h1>
      </DivLogo>
      <form onSubmit={login}>
        <DivInputs>
          <Input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email"
            required
          />
          <Input
            type="password"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            placeholder="senha"
            required
          />
        </DivInputs>
        <Entrar type="submit">Entrar</Entrar>
      </form>
      <DivTexto>
        <Link to={`/cadastro`}>
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </DivTexto>
    </Main>
  );
}

export default TelaInicial;
