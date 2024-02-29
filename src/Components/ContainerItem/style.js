import styled from "styled-components";

export const Container = styled.div`
  text-transform: capitalize;
  padding: 20px;
  > div#textCards {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  > div#cards {
    padding: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;
