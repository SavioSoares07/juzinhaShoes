import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

// Estilo para o ícone do WhatsApp
const WhatsAppIcon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Garante que o ícone esteja na parte superior de outros elementos */
  cursor: pointer;

  svg {
    width: 50px; /* Defina o tamanho do ícone conforme necessário */
    height: auto;
  }
`;

function WhatsAppComponent() {
  return (
    <WhatsAppIcon>
      <FaWhatsapp size="30" color="#25d366" />
    </WhatsAppIcon>
  );
}

export default WhatsAppComponent;
