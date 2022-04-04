import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { ThreeDots } from "react-loader-spinner";

import { Main, DivLogo, DivTexto, DivInputs, Input, Entrar } from "./style.js";

import Logo from "./../../assets/images/logo-trackit.png";

function TelaCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();

  function cadastrar(event) {
    event.preventDefault();
    setCarregando(true);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(URL, {
      email: email,
      name: nome,
      image: foto,
      password: senha,
    });
    promise.then((response) => {
      const { data } = response;
      //console.log(data);
      navigate("/");
      setCarregando(false);
    });
    promise.catch((err) => alert("Preencha os campos corretamente"));
  }

  return (
    <Main>
      <DivLogo>
        <img src={Logo} alt="Logo TrackIt" />
        <h1>TrackIt</h1>
      </DivLogo>
      {carregando ? (
        <form onSubmit={cadastrar}>
          <DivInputs>
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="email"
              disabled
            />
            <Input
              type="password"
              onChange={(e) => setSenha(e.target.value)}
              value={senha}
              placeholder="senha"
              disabled
            />
            <Input
              type="text"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
              placeholder="nome"
              disabled
            />
            <Input
              type="url"
              onChange={(e) => setFoto(e.target.value)}
              value={foto}
              placeholder="foto"
              disabled
            />
          </DivInputs>
          <Entrar disabled type="submit">
            <ThreeDots
              height="60"
              width="60"
              color="#FFFFFF"
              ariaLabel="loading"
            />
          </Entrar>
        </form>
      ) : (
        <form onSubmit={cadastrar}>
          <DivInputs>
            <Input
              type="email"
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
              type="url"
              onChange={(e) => setFoto(e.target.value)}
              value={foto}
              placeholder="foto"
              required
            />
          </DivInputs>
          <Entrar type="submit">Cadastrar</Entrar>
        </form>
      )}
      <DivTexto>
        <Link to={`/`}>
          <p>Já tem uma conta? Faça Login!</p>
        </Link>
      </DivTexto>
    </Main>
  );
}

export default TelaCadastro;
