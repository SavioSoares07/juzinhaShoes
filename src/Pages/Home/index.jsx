import { ContainerItem } from "../../Components/ContainerItem";
import { Menu } from "../../Components/Menu";
import WhatsAppComponent from "../../Components/WhatsappIcon";
import { Container, ContainerBanner } from "./style";
import { FaChevronDown } from "react-icons/fa";

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
      <ContainerItem name="Chinela" />
      <ContainerItem name="Papete" />
    </>
  );
}
