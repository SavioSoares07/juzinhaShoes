import { Card } from "../Card";
import { Container } from "./style";

export function ContainerItem({ name }) {
  return (
    <Container>
      <div id="textCards">
        <h1>{name}</h1>
        <a>Ver mais</a>
      </div>
      <div id="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Container>
  );
}
