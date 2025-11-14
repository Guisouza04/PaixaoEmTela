import {
  CarrosselContainer,
  CarrosselPhotos,
  Photos,
  Portrait,
} from "./styles";

// Imports estáticos das imagens
import Foto01 from "../../assets/photos/Foto01.avif";
import Foto02 from "../../assets/photos/Foto02.avif";
import Foto03 from "../../assets/photos/Foto03.avif";
import Foto04 from "../../assets/photos/Foto04.avif";
import Foto05 from "../../assets/photos/Foto05.avif";
import Foto06 from "../../assets/photos/Foto06.avif";
import Foto07 from "../../assets/photos/Foto07.avif";
import Foto08 from "../../assets/photos/Foto08.avif";
import Foto09 from "../../assets/photos/Foto09.avif";

const imageList = [
  { src: Foto01, name: "Foto01.avif" },
  { src: Foto02, name: "Foto02.avif" },
  { src: Foto03, name: "Foto03.avif" },
  { src: Foto04, name: "Foto04.avif" },
  { src: Foto05, name: "Foto05.avif" },
  { src: Foto06, name: "Foto06.avif" },
  { src: Foto07, name: "Foto07.avif" },
  { src: Foto08, name: "Foto08.avif" },
  { src: Foto09, name: "Foto09.avif" },
];

export function SectionPhotos() {
  return (
    <CarrosselContainer id="sectionPhotos">
      <h2>Nossas Fotos</h2>
      <CarrosselPhotos>
        {imageList.map((img) => (
          <Portrait key={img.name}>
            <Photos src={img.src} alt={img.name} />
          </Portrait>
        ))}
      </CarrosselPhotos>
    </CarrosselContainer>
  );
}

export default SectionPhotos;
