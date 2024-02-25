import { Card } from "../Card";
import { Container } from "./style";

export function ContainerItem({ name }) {
  return (
    <Container>
      <h1>{name}</h1>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Container>
  );
}
