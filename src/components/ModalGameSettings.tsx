import { Container } from "../styles/ModalGameSettings";
import GameSettingsCard from "./GameSettingsCard";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AppContext } from "../lib/context";
import { Button } from "../generic/Button";

export default function ModalGameSettings() {
  const { t } = useTranslation();
  const {
    selectedDifficulty,
    setSelectedDifficulty,
    selectedGameLenght,
    setSelectedGameLenght,
    setActivePage,
    setGameSettings,
  } = useContext(AppContext);
  return (
    <Container>
      <div className="section-separator">
        <h2 className="section-title">{t("Difficulty Selection")}</h2>
        <hr className="section-line" />
      </div>
      <section className="difficulty-selection">
        <GameSettingsCard
          cardTitle={t("Easy")}
          cardDescription={t("20s per Question")}
          isSelected={selectedDifficulty == "Easy"}
          onClickFunction={() => setSelectedDifficulty("Easy")}
        ></GameSettingsCard>
        <GameSettingsCard
          cardTitle={t("Medium")}
          cardDescription={t("14s per Question")}
          isSelected={selectedDifficulty == "Medium"}
          onClickFunction={() => setSelectedDifficulty("Medium")}
        ></GameSettingsCard>
        <GameSettingsCard
          cardTitle={t("Hard")}
          cardDescription={t("08s per Question")}
          isSelected={selectedDifficulty == "Hard"}
          onClickFunction={() => setSelectedDifficulty("Hard")}
        ></GameSettingsCard>
      </section>
      <div className="section-separator">
        <h2 className="section-title">{t("Game Length")}</h2>
        <hr className="section-line" />
      </div>
      <section className="game-lenght-selection">
        <GameSettingsCard
          cardTitle={t("Short")}
          cardDescription={t("05 Questions")}
          isSelected={selectedGameLenght == "Short"}
          onClickFunction={() => setSelectedGameLenght("Short")}
        ></GameSettingsCard>
        <GameSettingsCard
          cardTitle={t("Medium")}
          cardDescription={t("10 Questions")}
          isSelected={selectedGameLenght == "Medium"}
          onClickFunction={() => setSelectedGameLenght("Medium")}
        ></GameSettingsCard>
        <GameSettingsCard
          cardTitle={t("Long")}
          cardDescription={t("15 Questions")}
          isSelected={selectedGameLenght == "Long"}
          onClickFunction={() => setSelectedGameLenght("Long")}
        ></GameSettingsCard>
      </section>
      <footer className="footer-button">
        <Button
          color="#00c424"
          functionButton={() => (setActivePage("Game"), setGameSettings(false))}
          width="150px"
          borderRadius="10px"
          disabled={selectedDifficulty == "" || selectedGameLenght == ""}
        >
          {t("Start Game")}
        </Button>
      </footer>
    </Container>
  );
}
