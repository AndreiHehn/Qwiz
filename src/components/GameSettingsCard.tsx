import { useContext } from "react";
import { Container } from "../styles/GameSettingsCard";
import { Qwiz_Categories } from "../lib/categories";
import { AppContext } from "../lib/context";

interface Props {
  onClickFunction: (e: unknown) => void;
  cardTitle: string;
  cardDescription: string;
  isSelected: boolean;
}

export default function GameSettingsCard({
  cardTitle,
  cardDescription,
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
        <h2 className="card-title">{cardTitle}</h2>
      </div>
      <h3 className="card-description">{cardDescription}</h3>
    </Container>
  );
}
