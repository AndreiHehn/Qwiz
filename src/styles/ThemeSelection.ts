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

  .category-name {
    color: ${(props) => props.categoryColor};
    margin-bottom: 20px;
    border-bottom: 2px solid ${(props) => props.categoryColor};
    width: 70%;
    text-align: center;
  }

  .themes-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    max-height: 70dvh;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 40px;
  }

  /* Largura do scroll */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Fundo do trilho */
  ::-webkit-scrollbar-track {
    background: #fff;
    border-radius: 8px;
  }

  /* "Botão" que desliza */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.categoryColor};

    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    cursor: pointer;
  }
`;
