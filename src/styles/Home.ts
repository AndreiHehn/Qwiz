import styled from "styled-components";

interface Props {
  categoryColor: string;
}

export const Container = styled.article<Props>`
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
    max-width: 1100px;
    text-align: center;
  }

  .selected-category {
    color: ${(props) => props.categoryColor};
  }

  .category-icon {
    margin-bottom: 50px;
    width: 250px;
    height: 250px;
    path {
      fill: ${(props) => props.categoryColor};
    }
  }

  button {
    margin-top: 50px;
    font-family: "Courier New", Courier, monospace;
    font-size: 16px;
    font-weight: 600;
  }
`;
