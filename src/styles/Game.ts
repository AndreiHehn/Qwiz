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
`;
