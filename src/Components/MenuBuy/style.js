import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.COLORS.GRAY_100};

  > img {
    width: 80px;
    height: 80px;
  }
`;
