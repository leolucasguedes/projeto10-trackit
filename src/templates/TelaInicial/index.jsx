import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import UsuarioContext from "../../context/UsuarioContext.js";
import CarregandoContext from "../../context/CarregandoContext.js";
import { ThreeDots } from "react-loader-spinner";

import { Main, DivLogo, DivTexto, DivInputs, Input, Entrar } from "./style.js";

import Logo from "./../../assets/images/logo-trackit.png";

function TelaInicial({ salvarToken }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const { dataUsuario, setDataUsuario } = useContext(UsuarioContext);
  const { carregando, setCarregando } = useContext(CarregandoContext);

  function login(event) {
    event.preventDefault();

    setCarregando(true);

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const promise = axios.post(URL, {
      email: email,
      password: senha,
    });
    promise.then((response) => {
      const { data } = response;
      setDataUsuario({
        ...dataUsuario,
        email: data.email,
        password: data.password,
        name: data.name,
        image: data.image,
        token: data.token,
      });
      //console.log(data);
      
      salvarToken(data.token);

      navigate("/hoje");
      setCarregando(false);
    });
    promise.catch(({ response }) => {
      console.log(response);
      setCarregando(false);
      setDataUsuario({
        ...dataUsuario,
        email: "",
        password: "",
        name: "",
        image: ""
      });
      alert("Login ou senha inválidos");
    });
  }

  return (
    <Main>
      <DivLogo>
        <img src={Logo} alt="Logo TrackIt" />
        <h1>TrackIt</h1>
      </DivLogo>
      {carregando ? (
        <form onSubmit={login}>
          <Input
            type="email"
            value={email}
            disabled
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          ></Input>
          <Input
            type="password"
            value={senha}
            disabled
            onChange={(e) => setSenha(e.target.value)}
            placeholder="senha"
          ></Input>
          <Entrar disabled>
            <ThreeDots
              height="60"
              width="60"
              color="#FFFFFF"
              ariaLabel="loading"
            />
          </Entrar>
        </form>
      ) : (
        <form onSubmit={login}>
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
          </DivInputs>
          <Entrar type="submit">Entrar</Entrar>
        </form>
      )}
      <DivTexto>
        <Link to={`/cadastro`}>
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </DivTexto>
    </Main>
  );
}

export default TelaInicial;
