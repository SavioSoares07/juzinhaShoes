import styled from "styled-components";

export const Container = styled.footer`
  background-color: #0a142f;
  width: 100vw;
  color: #fff;

  display: flex;
  justify-content: space-around;
  cursor: default;
  > img {
    width: 80px;
    height: 80px;
  }

  > div {
    padding: 40px;
    > ul {
      padding: 20px;
      > li {
        list-style: none;
        margin-top: 20px;
        font-family: "roboto";
        font-size: 12px;
        > a {
          text-decoration: underline;

          color: #fff;
          font-size: 12px;
        }
      }
    }
  }
`;
