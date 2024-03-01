import { Container } from "./style";
import Logo from "../../assets/logo.png";

export function Menu() {
  return (
    <Container>
      <img src={Logo} />
      <ul>
        <li>
          <a href="#">Rasteiras</a>
        </li>
        <li>
          <a href="#">Papetes</a>
        </li>
        <li>
          <a href="#">Saltinhos</a>
        </li>
        <li>
          <a href="#">Flats</a>
        </li>
        <li>
          <a href="#">Plataformas</a>
        </li>
        <li>
          <a href="#">Saltos</a>
        </li>
      </ul>
    </Container>
  );
}
