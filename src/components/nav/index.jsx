import {
  Container,
  ContainerNav,
  ContainerLogo,
  ContainerMenu,
  Logo,
  Title,
  MenuIcon,
} from "./styles";
import Icon from "../../../public/coracao.png";
import Menu from "../../../public/menu.svg";

export function Nav({ title }) {
  function toggleDisplay(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      if (element.style.display === "none") {
        element.style.opacity = "0";
        element.style.maxHeight = "0";
        element.style.display = "block";
        setTimeout(() => {
          element.style.opacity = "1";
          element.style.maxHeight = "500px";
        }, 10);
      } else {
        element.style.opacity = "0";
        element.style.maxHeight = "0";
        setTimeout(() => {
          element.style.display = "none";
        }, 300);
      }
    }
  }

  return (
    <Container>
      <ContainerNav>
        <ContainerLogo>
          <Logo src={Icon} alt="Logo" />
          <Title>{title}</Title>
        </ContainerLogo>
        <MenuIcon
          id="menu"
          src={Menu}
          alt="Menu Icon"
          onClick={() => toggleDisplay("container-menu")}
        />
      </ContainerNav>
      <ContainerMenu id="container-menu">
        <ul>
          <li>
            <a href="#sectionIni">Início</a>
          </li>
          <li>
            <a href="#sectionPhotos">Fotos</a>
          </li>
          <li>
            <a href="#sectionLetters">Cartas</a>
          </li>
          <li>
            <a href="#sectionMusics">Músicas</a>
          </li>
        </ul>
      </ContainerMenu>
    </Container>
  );
}

export default Nav;
