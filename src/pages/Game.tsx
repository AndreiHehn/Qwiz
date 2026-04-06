import { useContext } from "react";
import { Container } from "../styles/Game";
import { AppContext } from "../lib/context";
import { useTranslation } from "react-i18next";
import { Qwiz_Categories } from "../lib/categories";

export default function Home() {
  const { t } = useTranslation();
  const { selectedCategory } = useContext(AppContext);

  const CategoryColor =
    Qwiz_Categories.find((cat) => cat.name === selectedCategory)?.color || "";

  return <Container categoryColor={CategoryColor}></Container>;
}
