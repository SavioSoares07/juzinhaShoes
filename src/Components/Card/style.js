import styled from "styled-components";

export const Container = styled.a`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  max-width: 300px;
  margin-bottom: 20px;
  margin-right: 10px;
  > img {
    width: 300px;
    height: 300px;
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
