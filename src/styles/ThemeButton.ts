import styled from "styled-components";

interface Props {
  mainColor: string;
}
export const Container = styled.div<Props>`
  width: 300px;
  height: 60px;
  background-color: #fff;
  border-radius: 20px;
  border: 3px solid ${(props) => props.mainColor};
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    path {
      fill: ${(props) => props.mainColor};
    }
  }

  .button-text {
    margin-left: 10px;
    font-size: 20px;
    color: ${(props) => props.mainColor};
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`;
