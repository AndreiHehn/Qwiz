import { useContext } from "react";
import { Container } from "../styles/Game";
import { AppContext } from "../lib/context";
import { useTranslation } from "react-i18next";
import { Qwiz_Categories } from "../lib/categories";
import { questions } from "../lib/questions";

export default function Home() {
  const { t } = useTranslation();
  const { selectedCategory, selectedTheme, selectedThemeID } =
    useContext(AppContext);

  const questionsList =
    questions[selectedCategory.toLowerCase()]?.[selectedThemeID] ?? [];

  const CategoryColor =
    Qwiz_Categories.find((cat) => cat.name === selectedCategory)?.color || "";

  return (
    <Container
      categoryColor={CategoryColor}
      onClick={() => console.log(questionsList)}
    ></Container>
  );
}
