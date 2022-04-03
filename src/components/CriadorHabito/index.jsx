import {
  CriarHabito,
  DivDias,
  Dias,
  Butoes,
  Cancelar,
  Salvar,
  HabitoCriado,
  DivCima,
} from "./style.js";

function CriadorHabito(props) {
  const { etapa } = props;
  const {setEtapa} = props;

  const dias = ["D", "S", "T", "Q", "Q", "S", "S"];

  if (etapa === 0) {
    return <></>;
  }

  if (etapa === 1) {
    return (
      <CriarHabito>
        <input type="text" placeholder="nome do hábito"></input>
        <DivDias>
          {dias.map((dia) => {
            return (
              <Dias>
                <h1>{dia}</h1>
              </Dias>
            );
          })}
        </DivDias>
        <Butoes>
          <Cancelar onClick={() => setEtapa(0)}>Cancelar</Cancelar>
          <Salvar onClick={() => setEtapa(2)}>Salvar</Salvar>
        </Butoes>
      </CriarHabito>
    );
  }

  if (etapa === 2) {
    return (
      <HabitoCriado>
        <DivCima>
          <h1>Ler</h1>
        </DivCima>
        <DivDias>
          {dias.map((dia) => {
            return (
              <Dias>
                <h1>{dia}</h1>
              </Dias>
            );
          })}
        </DivDias>
      </HabitoCriado>
    );
  }
}

export default CriadorHabito;
