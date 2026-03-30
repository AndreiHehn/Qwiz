import styled from "styled-components";

export const Container = styled.article`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .app-logo {
    width: 500px;
    height: 500px;
  }

  .home-text {
    font-size: 28px;
    font-weight: 800;
    color: #fff;
    max-width: 900px;
    text-align: center;
  }
`;
