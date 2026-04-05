import { Container } from "../styles/Home";
import AppLogo from "../assets/icons/Logo.png";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AppContext } from "../lib/context";
import { Qwiz_Categories } from "../lib/categories";
import { Button } from "../generic/Button";

export default function Home() {
  const { t } = useTranslation();
  const { selectedCategory, setActivePage } = useContext(AppContext);

  const CategoryColor =
    Qwiz_Categories.find((cat) => cat.name === selectedCategory)?.color || "";

  const CategoryIcon =
    Qwiz_Categories.find((cat) => cat.name === selectedCategory)?.icon || null;

  return (
    <Container categoryColor={CategoryColor}>
      {selectedCategory == "" ? (
        <>
          <img className="app-logo" src={AppLogo} alt="" />
          <h1 className="home-text">
            {t(
              "Welcome to Qwiz! Select a category on the left side bar to get started!",
            )}
          </h1>
        </>
      ) : (
        <>
          {CategoryIcon && <CategoryIcon className="category-icon" />}
          <h1 className="home-text">
            {t("You have selected the category")}{" "}
            <span className="selected-category">{t(selectedCategory)}</span>
            {". "}
            {t("Are you ready?")}
          </h1>
          {
            <Button
              color={CategoryColor}
              height="40px"
              width="160px"
              borderRadius="10px"
              functionButton={() => setActivePage("Theme Selection")}
            >
              {t("Start Game")}
            </Button>
          }
        </>
      )}
    </Container>
  );
}
