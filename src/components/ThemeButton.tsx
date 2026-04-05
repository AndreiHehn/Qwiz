import type { ReactNode } from "react";
import React from "react";
import { Container } from "../styles/ThemeButton";

interface Props {
  onClickFunction: (e: unknown) => void;
  buttonIcon?: string | React.ComponentType | ReactNode;
  buttonText: string;
  mainColor: string;
}

export default function ThemeButton({
  onClickFunction,
  buttonIcon,
  buttonText,
  mainColor,
}: Props) {
  return (
    <Container onClick={onClickFunction} mainColor={mainColor}>
      {buttonIcon && React.createElement(buttonIcon as React.ComponentType)}
      <h2 className="button-text">{buttonText}</h2>
    </Container>
  );
}
