import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px;
  > h2 {
    margin-top: 10px;
    color: #292524;
    font-size: 36px;
    text-align: center;
  }
`;

export const ContainerFAQ = styled.div`
  display: flex;
  justify-content: space-around;
  > img {
    height: 300px;
    width: 400px;
  }
`;

export const FAQSection = styled.div``;

export const ContainerForm = styled.div`
  margin-top: 50px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 36px;
  }
  > p {
    color: #a1a1a1;
    margin-top: 10px;
    font-size: 14px;
  }
  > div {
    width: 70%;
    > div {
      display: flex;
    }
  }
`;
