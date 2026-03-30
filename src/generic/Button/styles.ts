import styled from "styled-components";
import { darken, lighten } from "polished";

interface Props {
  color: string;
  $borderRadius: string;
  $margin: string;
  $width: string;
  $height: string;
}

export const Container = styled.button<Props>`
  color: #ffffff;
  background-color: ${(props) => props.color};

  border: none;
  border-radius: ${(props) => props.$borderRadius};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  padding: 3px 12px;
  margin: ${(props) => props.$margin};

  line-height: 24px;
  font-weight: 500;
  font-size: 14px;
  font-family: "Segoe UI";
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${(props) => darken(0.15, props.color)};
  }

  &:disabled {
    background-color: ${(props) => lighten(0.15, props.color)};

    cursor: not-allowed;
  }
`;
