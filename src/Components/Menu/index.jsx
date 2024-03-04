import { Container } from "./style";
import Logo from "../../assets/logo.png";

export function Menu() {
  return (
    <Container>
      <img src={Logo} />
      <ul>
        <li>
          <a href="#rasteiras">Rasteiras</a>
        </li>
        <li>
          <a href="#papetes">Papetes</a>
        </li>
        <li>
          <a href="#saltinhos">Saltinhos</a>
        </li>
        <li>
          <a href="#flats">Flats</a>
        </li>
        <li>
          <a href="#plataformas">Plataformas</a>
        </li>
        <li>
          <a href="#saltos">Saltos</a>
        </li>
      </ul>
    </Container>
  );
}
