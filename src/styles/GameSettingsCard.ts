import styled from "styled-components";

interface Props {
  isSelected: boolean;
}

export const Container = styled.div<Props>`
  background-color: var(--app-secondary);
  width: 180px;
  height: 80px;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 5px 5px;
  border: ${(props) => props.isSelected && "3px solid #3cef51"};

  &:hover {
    transform: scale(1.05);
  }

  .card-header {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  .card-title {
    font-size: 22px;
    color: #fff;
  }

  .card-description {
    font-size: 16px;
    color: #fff;
    text-align: center;
  }
`;
