import React, { type ReactNode } from "react";
import { Container } from "../styles/GameSettingsCard";

interface Props {
  onClickFunction: (e: unknown) => void;
  cardIcon: string | React.ComponentType | ReactNode;
  cardTitle: string;
  cardDescription: string;
  isSelected: boolean;
}

export default function GameSettingsCard({
  cardTitle,
  cardDescription,
  cardIcon,
  isSelected,
  onClickFunction,
}: Props) {
  return (
    <Container onClick={onClickFunction} isSelected={isSelected}>
      <div className="card-header">
        {React.createElement(cardIcon as React.ComponentType)}
        <h2 className="card-title">{cardTitle}</h2>
      </div>
      <h3 className="card-description">{cardDescription}</h3>
    </Container>
  );
}
