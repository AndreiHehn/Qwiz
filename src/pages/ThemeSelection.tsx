import { Container } from "../styles/ThemeSelection";
import { Qwiz_Themes } from "../lib/themes";
import { useContext } from "react";
import { AppContext } from "../lib/context";
import type { CategoryName } from "../lib/types";

export default function ThemeSelection() {
  const { selectedCategory } = useContext(AppContext);

  const themes = selectedCategory
    ? Qwiz_Themes[selectedCategory as CategoryName]
    : [];

  return (
    <Container onClick={() => console.log(themes)}>aaaaaaaaaaaa</Container>
  );
}
