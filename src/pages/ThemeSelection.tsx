import { Container } from "../styles/ThemeSelection";
import { Qwiz_Themes } from "../lib/themes";
import { useContext } from "react";
import { AppContext } from "../lib/context";
import type { CategoryName } from "../lib/types";
import ThemeButton from "../components/ThemeButton";
import { Qwiz_Categories } from "../lib/categories";
import { useTranslation } from "react-i18next";

export default function ThemeSelection() {
  const { selectedCategory } = useContext(AppContext);
  const { t } = useTranslation();

  const themes = selectedCategory
    ? Qwiz_Themes[selectedCategory as CategoryName]
    : [];

  const CategoryColor =
    Qwiz_Categories.find((cat) => cat.name === selectedCategory)?.color || "";

  return (
    <Container categoryColor={CategoryColor}>
      <h1 className="category-name">{t(selectedCategory)}</h1>
      <section className="themes-container">
        {" "}
        {themes.map((theme) => (
          <ThemeButton
            mainColor={CategoryColor}
            buttonText={theme.name}
            onClickFunction={() => console.log("")}
          ></ThemeButton>
        ))}
      </section>
    </Container>
  );
}
