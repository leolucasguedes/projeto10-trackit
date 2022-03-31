import styled from "styled-components";

import Imagem from "./../../assets/images/imagem.png"

function Header() {
  return (
    <Topo>
      <h1>TrackIt</h1>
      <img src={Imagem} alt="Imagem do perfil"/>
    </Topo>
  );
}

export default Header;

const Topo = styled.header`
  width: 100%;
  height: 70px;
  background-color: #126BA5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  h1 {
    font-family: 'Playball', cursive;
    font-size: 38.98px;
    font-weight: 400;
    font-style: normal;
    line-height: 48.73px;
    color: #FFFFFF;
    margin-left: 18px;
  }

  img{
      width: 51px;
      heighr: 51px;
      border-radius: 98.5px;
      margin-right: 18px;
  }
`;