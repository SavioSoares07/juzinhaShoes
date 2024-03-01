import Foto from "../../assets/chinela1.jpg";

import {
  Container,
  ButtonSize,
  ContainerText,
  TextCategory,
  TextDescription,
  ColorHigh,
  TextTitle,
  FakeMenu,
  ButtonBuy,
  ContainerOption,
  ContainerButtons,
  ContainerCollors,
  ColorHighContainer,
} from "./style";
export function Buy() {
  return (
    <>
      <FakeMenu />

      <Container>
        <ContainerText>
          <TextCategory>Sapato</TextCategory>
          <TextTitle>Nike Air Edge 270</TextTitle>
          <TextDescription>
            The nike air edge 270 takes the look of retro basketaball and puts
            it throung a modern lens
          </TextDescription>

          <ButtonBuy>Comprar</ButtonBuy>
        </ContainerText>

        <ContainerOption>
          <p>Tamanho</p>
          <ContainerButtons>
            <ButtonSize>33</ButtonSize>
            <ButtonSize>34</ButtonSize>
            <ButtonSize>35</ButtonSize>
            <ButtonSize>36</ButtonSize>
            <ButtonSize>37</ButtonSize>
            <ButtonSize>38</ButtonSize>
            <ButtonSize>39</ButtonSize>
          </ContainerButtons>
          <p>Cor</p>

          <ContainerCollors>
            <ColorHighContainer
              colorName="Branca"
              color="#fff"
              style={{ border: "1px solid #000" }}
            />
            <ColorHighContainer
              colorName="Preta"
              style={{ background: "#000000", border: "1px solid #000" }}
            />
            <ColorHighContainer
              colorName="Ouro"
              style={{ background: "#FFD700", border: "1px solid #000" }}
            />
            <ColorHighContainer
              colorName="Rose"
              style={{ background: "#FF007F", border: "1px solid #000" }}
            />
            <ColorHighContainer
              colorName="Prata"
              style={{ background: "#C0C0C0", border: "1px solid #000" }}
            />
            <ColorHighContainer
              colorName="Nude Claro"
              style={{ background: "#F5DEB3", border: "1px solid #000" }}
            />
            <ColorHighContainer
              colorName="Nude Escuro"
              style={{ background: "#D2B48C", border: "1px solid #000" }}
            />
            <ColorHighContainer
              colorName="Azul Bebê"
              style={{ background: "#89CFF0", border: "1px solid #000" }}
            />
            <ColorHighContainer
              colorName="Lavanda"
              style={{ background: "#E6E6FA", border: "1px solid #000" }}
            />
            <ColorHighContainer
              colorName="Amarelo Bebê"
              style={{ background: "#FFFF00", border: "1px solid #000" }}
            />
            <ColorHighContainer
              colorName="Rosa Pink"
              style={{ background: "#FFC0CB", border: "1px solid #000" }}
            />
            <ColorHighContainer
              colorName="Verde Água"
              style={{ background: "#7FFFD4", border: "1px solid #000" }}
            />
            <ColorHighContainer
              colorName="Verde Lima"
              style={{ background: "#00FF00", border: "1px solid #000" }}
            />
          </ContainerCollors>
        </ContainerOption>
      </Container>
    </>
  );
}
