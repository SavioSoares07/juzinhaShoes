import { Container, ContainerFAQ, FAQSection } from "./style";
import FAQImg from "../../assets/FAQ.png";
import { FAQ } from "../FAQ";

export function FeedBack() {
  return (
    <Container>
      <h2>Perguntas frequentes</h2>
      <ContainerFAQ>
        <img src={FAQImg} alt="" />

        <FAQSection>
          <FAQ
            title="Oi"
            description="Dentro do componente, é declarado um estado local chamado active usando o hook useState. Este estado será utilizado para controlar se o contêiner de descrição está expandido ou não. Inicialmente, ele é definido como false, indicando que o contêiner de descrição está oculto."
          />
          <FAQ
            title="Oi"
            description="Dentro do componente, é declarado um estado local chamado active usando o hook useState. Este estado será utilizado para controlar se o contêiner de descrição está expandido ou não. Inicialmente, ele é definido como false, indicando que o contêiner de descrição está oculto."
          />
          <FAQ
            title="Oi"
            description="Dentro do componente, é declarado um estado local chamado active usando o hook useState. Este estado será utilizado para controlar se o contêiner de descrição está expandido ou não. Inicialmente, ele é definido como false, indicando que o contêiner de descrição está oculto."
          />
          <FAQ
            title="Oi"
            description="Dentro do componente, é declarado um estado local chamado active usando o hook useState. Este estado será utilizado para controlar se o contêiner de descrição está expandido ou não. Inicialmente, ele é definido como false, indicando que o contêiner de descrição está oculto."
          />
        </FAQSection>
      </ContainerFAQ>
    </Container>
  );
}
