import { Container } from "./style";
import Logo from "../../assets/logo.png";

export function Footer() {
  return (
    <Container>
      <div>
        <h1>Redes Sociais</h1>
        <ul>
          <li>
            <a href="#">Instagram</a>
          </li>

          <li>
            <a href="#">WhatsApp</a>
          </li>
        </ul>
      </div>

      <div>
        <h1>Pagamentos</h1>
        <ul>
          <li>Mastercard</li>

          <li>Visa</li>

          <li>American Express</li>

          <li>Hipercard</li>

          <li>Elo</li>
        </ul>
      </div>
    </Container>
  );
}
