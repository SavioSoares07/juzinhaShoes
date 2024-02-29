import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerBanner = styled.section`
  @keyframes arrowMove {
    0%,
    100% {
      opacity: 1;
      transform: translateY(0);
    }
    50% {
      opacity: 0;
      transform: translateY(-30px);
    }
  }
  background-color: #fff;
  position: relative;
  > h1 {
    text-align: center;
    font-size: 200px;
    letter-spacing: 40px;
    text-transform: uppercase;
    color: #ccc;
    filter: drop-shadow(16px 16px 20px #ccc) invert(75%);
    opacity: 0.4;
    cursor: default;
  }
  > span {
    bottom: 0px;
    left: 50%;
    position: absolute;
    animation: arrowMove 2s ease-in-out infinite;
  }
`;
