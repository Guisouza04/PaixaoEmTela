import { Container, BoxText } from "./styles";
import FloatingHearts from "../floatingHearts";
import Timer from "../timer";

export function SectionIni() {
  return (
    <Container className="sections" id="sectionIni">
      <h1>Yasmim&Guilherme</h1>
      <BoxText>
        <p>
          Esse site foi criado para que possamos guardar nossos momentos para
          todo sempre, um histórico do nosso amor que poderá ser acessado pela
          Internet, para que todos saibam o quanto você é especial para mim!
        </p>
      </BoxText>
      <FloatingHearts />
      <Timer />
    </Container>
  );
}

export default SectionIni;
