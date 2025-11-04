import {
  CarrosselContainer,
  CarrosselPhotos,
  Photos,
  Portrait,
} from "./styles";

const images = import.meta.glob("../../assets/photos/*.avif", {
  eager: true,
});

export function SectionPhotos() {
  const imageList = Object.entries(images).map(([path, module]) => ({
    src: module.default,
    name: path.split("/").pop(),
  }));

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
