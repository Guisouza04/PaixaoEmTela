import Nav from "../../components/nav";
import SectionIni from "../../components/sectionIni";
import SectionPhotos from "../../components/sectionPhotos";
import { SectionLetters } from "../../components/sectionLetters";
import { SectionMusics } from "../../components/sectionMusics";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Nav title={"paixãoemTela"} />
      <SectionIni />
      <SectionPhotos />
      <SectionLetters />
      <SectionMusics />
    </Container>
  );
}

export default Home;
