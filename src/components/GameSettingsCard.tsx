import React, { useContext, type ReactNode } from "react";
import { Container } from "../styles/GameSettingsCard";
import { Qwiz_Categories } from "../lib/categories";
import { AppContext } from "../lib/context";

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
  const { selectedCategory } = useContext(AppContext);

  const CategoryColor =
    Qwiz_Categories.find((cat) => cat.name === selectedCategory)?.color || "";

  return (
    <Container
      onClick={onClickFunction}
      categoryColor={CategoryColor}
      isSelected={isSelected}
    >
      <div className="card-header">
        {React.createElement(cardIcon as React.ComponentType)}
        <h2 className="card-title">{cardTitle}</h2>
      </div>
      <h3 className="card-description">{cardDescription}</h3>
    </Container>
  );
}
