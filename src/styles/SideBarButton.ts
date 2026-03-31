import styled from "styled-components";

interface Props {
  mainColor: string;
}
export const Container = styled.div<Props>`
  width: 210px;
  height: 40px;
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
    font-size: 18px;
    color: ${(props) => props.mainColor};
  }

  &:hover {
    background-color: #cbcbcb;
  }
`;
