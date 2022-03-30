import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { Main, DivLogo, DivTexto, DivInputs, Input, Entrar } from "./style.js";

import Logo from "./../../assets/images/logo-trackit.png";

function TelaCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");

  const navigate = useNavigate();

  function cadastrar() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(URL, {
      email: email,
      name: nome,
      image: foto,
      password: senha,
    });
    promise.then(response => {
      const {data} = response;
      console.log(data);
      navigate("/");
    });
    promise.catch(err => console.log(err.response));
  }

    return (
      <Main>
      <DivLogo>
        <img src={Logo} alt="Logo TrackIt" />
        <h1>TrackIt</h1>
      </DivLogo>
      <form onSubmit={cadastrar}>
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
          <Input
            type="text"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            placeholder="nome"
            required
          />
          <Input
            type="text"
            onChange={(e) => setFoto(e.target.value)}
            value={foto}
            placeholder="foto"
            required
          />
        </DivInputs>
        <Entrar type="submit">Cadastrar</Entrar>
      </form>
      <DivTexto>
        <Link to={`/`}>
          <p>Já tem uma conta? Faça Login!</p>
        </Link>
      </DivTexto>
    </Main>
    );
  }
  
  export default TelaCadastro;