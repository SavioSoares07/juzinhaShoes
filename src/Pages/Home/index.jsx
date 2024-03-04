import { ContainerItem } from "../../Components/ContainerItem";
import { Menu } from "../../Components/Menu";
import WhatsAppComponent from "../../Components/WhatsappIcon";
import { Container, ContainerBanner, ContainerFeedBack } from "./style";
import { FaChevronDown } from "react-icons/fa";

import Chinela from "../../assets/Chinela6.jpg";
import { FeedBack } from "../../Components/FeedBack";

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
      <ContainerItem name="Rasteiras" id="rasteiras" />
      <ContainerItem name="Papete" id="papetes" />
      <ContainerItem name="Saltinhos" id="saltinhos" />
      <ContainerItem name="Flats" id="flats" />
      <ContainerItem name="Plataformas" id="plataformas" />
      <ContainerItem name="Saltos" id="saltos" />

      <ContainerFeedBack>
        <FeedBack />
      </ContainerFeedBack>
    </>
  );
}
