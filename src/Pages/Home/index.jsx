import { ContainerItem } from "../../Components/ContainerItem";
import { Menu } from "../../Components/Menu";
import { Container } from "./style";

export function Home() {
  return (
    <>
      <Menu />
      <Container></Container>
      <ContainerItem name="Chinela" />
      <ContainerItem name="Papete" />
    </>
  );
}
