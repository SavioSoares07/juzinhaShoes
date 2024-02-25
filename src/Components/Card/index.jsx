import imagemTeste from "../../assets/teste.webp";
import { Container } from "./style";

export function Card() {
  return (
    <Container>
      <img src={imagemTeste} alt="" />
      <p>Sandália Salto alto new Couro Ice</p>
      <span>R$239</span>
    </Container>
  );
}
