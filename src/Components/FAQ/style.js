import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  border-left: 3px solid #2ab3b9;
  border-right: 3px solid #2ab3b9;
  border-radius: 10px;
  padding: 30px;
  max-width: 700px;
  min-width: 700px;
`;

export const TitleContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-weight: bold;
    font-size: 20px;
  }
  > svg {
    font-size: 20px;
  }
`;

export const DescriptionContainer = styled.div`
  > p {
    color: #a1a1a1;
    font-size: 12px;
    margin-top: 10px;
  }
`;
