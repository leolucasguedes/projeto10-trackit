import { Link } from "react-router-dom";
import { useContext } from "react";
import PorcentagemContext from "../../context/PorcentagemContext";

import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Footer() {
  const { porcentagem } = useContext(PorcentagemContext);
  return (
    <Fundo>
      <FooterHabitos>
        <Link to={`/habitos`}>
          <h1>Hábitos</h1>
        </Link>
      </FooterHabitos>
      <Link to="/hoje">
        <div style={{ width: 91, height: 91 }}>
          <CircularProgressbar
            value={porcentagem}
            text="Hoje"
            background
            backgroundPadding={6}
            valueStart={0}
            valueEnd={100}
            duration={1.4}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
              textSize: "17.98px",
            })}
          />
          ;
        </div>
      </Link>
      <FooterHistorico>
        <Link to={`/historico`}>
          <h1>Histórico</h1>
        </Link>
      </FooterHistorico>
    </Fundo>
  );
}

export default Footer;

const Fundo = styled.footer`
  width: 100%;
  height: 101px;
  background-color: #ffffff;
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const FooterHabitos = styled.div`
  width: 142px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 17.98px;
    font-weight: 400;
    font-style: normal;
    line-height: 22.47px;
    color: #52b6ff;
    text-align: center;
  }
`;

const FooterHistorico = styled.div`
  width: 142px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 17.98px;
    font-weight: 400;
    font-style: normal;
    line-height: 22.47px;
    color: #52b6ff;
    text-align: center;
  }
`;
