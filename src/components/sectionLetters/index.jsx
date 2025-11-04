import {
  Container,
  LetterBox,
  LetterTitleBox,
  LetterContent,
  LetterTitle,
  LetterSignature,
} from "./styles";
import { useState } from "react";
// Ícone das cartass
import IconLetters from "../../assets/letters/loveLetters.svg";

// Imports das cartas
import Carta1 from "../../assets/letters/cartaDiaDosNamorados-12-06-2025.svg";
import Carta2 from "../../assets/letters/cartaDiaDosNamorados-12-06-2025-Yasmin.svg";
import Carta3 from "../../assets/letters/carta-05-07-2025.svg";
import Carta4 from "../../assets/letters/carta-21-10-2025.svg";

const listLetters = [
  {
    titulo: "Carta Dia Dos Namorados - 12/06/2025",
    imagem: Carta1,
    assinatura: "Guilherme",
  },
  {
    titulo: "Carta Dia Dos Namorados - 12/06/2025",
    imagem: Carta2,
    assinatura: "Yasmin",
  },
  {
    titulo: "Carta aleatória - 05/07/2025",
    imagem: Carta3,
    assinatura: "Yasmin",
  },
  {
    titulo: "Carta aleatória - 21/10/2025",
    imagem: Carta4,
    assinatura: "Yasmin",
  },
];

export function SectionLetters() {
  // Use React state instead of direct DOM manipulation.
  const [openIndex, setOpenIndex] = useState(null);

  function toggleDisplay(index) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  function renderLetters() {
    return listLetters.map((letter, index) => {
      const isOpen = openIndex === index;
      return (
        <LetterBox key={index} onClick={() => toggleDisplay(index)}>
          <LetterTitleBox>
            <img src={IconLetters} alt="Ícone Cartas" />
            <LetterTitle>{letter.titulo}</LetterTitle>
          </LetterTitleBox>
          <LetterContent open={isOpen}>
            <img src={letter.imagem} alt={`Imagem da carta ${index + 1}`} />
            <LetterSignature>Assinatura: {letter.assinatura}</LetterSignature>
          </LetterContent>
        </LetterBox>
      );
    });
  }

  return (
    <Container id="sectionLetters">
      <h2>Nossas Cartas</h2>
      {renderLetters()}
    </Container>
  );
}
