import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.COLORS.GRAY_100};

  > h1 {
    font-family: "Dancing Script", cursive;
    padding: 10px;
    margin-bottom: 30px;
    font-size: 32px;
    border-bottom: 1px solid #e1e1e1;
    width: 100%;
    text-align: center;
    padding-bottom: 20px;
  }

  > ul {
    display: flex;
    gap: 40px;

    > li {
      list-style: none;
      position: relative; /* Adicionado para que a pseudo-classe ::after seja posicionada em relação ao <li> */
      > a {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        position: relative;

        &::after {
          content: " ";
          width: 0%;
          height: 2px;
          background-color: #000;
          position: absolute;
          bottom: -5px;
          left: 0;
          transition: 500ms ease-in-out;
        }
      }

      :hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
`;
