import { ContainerItem } from "../../Components/ContainerItem";
import { Menu } from "../../Components/Menu";
import WhatsAppComponent from "../../Components/WhatsappIcon";
import { Container } from "./style";

export function Home() {
  return (
    <>
      <Menu />
      <WhatsAppComponent />
      <Container></Container>
      <ContainerItem name="Chinela" />
      <ContainerItem name="Papete" />
    </>
  );
}
