import { ContainerItem } from "../../Components/ContainerItem";
import { Menu } from "../../Components/Menu";
import WhatsAppComponent from "../../Components/WhatsappIcon";
import { Container, ContainerBanner } from "./style";
import { FaChevronDown } from "react-icons/fa";

import Chinela from "../../assets/Chinela6.jpg";

export function Home() {
  return (
    <>
      <Menu />
      <WhatsAppComponent />
      <ContainerBanner>
        <h1>
          Juzinha <br /> Shoes
        </h1>
        <span>
          <FaChevronDown size={30} />
        </span>
      </ContainerBanner>
      <ContainerItem name="Rasteiras" />
      <ContainerItem name="Papete" />
      <ContainerItem name="Saltinhos" />
      <ContainerItem name="Flats" />
      <ContainerItem name="Plataformas" />
      <ContainerItem name="Saltos" />
    </>
  );
}
