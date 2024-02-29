import styled from "styled-components";

export const Container = styled.a`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 10px;
  flex: 1; /* Esta linha faz o card ocupar todo o espaço do pai */
  max-height: 300px;
  > img {
    width: 100%; /* Para a imagem ocupar todo o espaço dentro do card */
    max-width: 250px; /* Defina um tamanho máximo para a imagem */
    height: auto;
    border-radius: 10px;
  }
  > p {
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    margin: 10px 5px;
    font-size: 14px;
  }
  > span {
    font-family: "Roboto";
    color: #716731;
  }
`;
