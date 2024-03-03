import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  padding: 40px;
  justify-content: space-around;
  > div {
    padding: 20px;
    > span {
      font-size: 30px;
    }
    > img {
      height: 200px;
      width: 200px;
    }
  }
`;

export const ButtonSize = styled.button`
  height: 50px;
  width: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

export const ColorHigh = styled.button``;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 500px;
    height: 300px;
  }
`;

export const ContainerBoxImg = styled.div`
  position: absolute;
  left: -50px;

  display: flex;
  flex-direction: column;
`;
export const BoxImg = styled.img`
  margin-bottom: 10px;
  height: 40px;
  width: 60px;
  border: 1px solid #000;
`;

export const ContainerText = styled.div`
  max-width: 500px;
  position: relative;
`;

export const TextCategory = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const TextTitle = styled.p`
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 1.2px;
`;

export const TextDescription = styled.p`
  color: #838d8d;
  text-transform: capitalize;
  margin: 20px 0px;
`;
export const ButtonBuy = styled.button`
  padding: 20px;
  border-radius: 10px;
  border: none;
  background-color: #25d366;
  color: #fff;
`;

export const FakeMenu = styled.div`
  height: 200px;
  background-color: #ccc;
`;

/*Container Options*/
export const ContainerOption = styled.div`
  width: 300px;
  max-width: 400px;

  > p {
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 20px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

/*Container Colors*/

export const ContainerCollors = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ColorHighContainer = styled.button`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  margin-bottom: 20px;

  &:hover::after {
    content: "${(props) => props.colorName}";
    position: absolute;
    bottom: -30px;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: 12px;
  }
`;
