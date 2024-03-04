import { Container, ContainerFAQ, ContainerForm, FAQSection } from "./style";
import FAQImg from "../../assets/FAQ.png";
import { FAQ } from "../FAQ";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

      <ContainerForm>
        <h1>Faça sua pergunta</h1>
        <p>Ficou com alguma dúvida, fale conosco!</p>

        <div>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Informe seu nome..."
              variant="outlined"
              type="text"
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Informe seu email..."
              variant="outlined"
              type="email"
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Informe seu telefone..."
              variant="outlined"
              type="tel"
            />
            <br />
            <Button variant="contained" color="success">
              Enviar
            </Button>
          </Box>
        </div>
      </ContainerForm>
    </Container>
  );
}
