import { Container } from "../styles/ModalGameSettings";
import GameSettingsCard from "./GameSettingsCard";
import GlobeIcon from "../assets/icons/GlobeIcon.svg?react";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AppContext } from "../lib/context";

export default function ModalGameSettings() {
  const { t } = useTranslation();
  const {
    selectedDifficulty,
    setSelectedDifficulty,
    selectedGameLenght,
    setSelectedGameLenght,
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
          cardIcon={GlobeIcon}
          isSelected={selectedDifficulty == "Easy"}
          onClickFunction={() => setSelectedDifficulty("Easy")}
        ></GameSettingsCard>
        <GameSettingsCard
          cardTitle={t("Medium")}
          cardDescription={t("14s per Question")}
          cardIcon={GlobeIcon}
          isSelected={selectedDifficulty == "Medium"}
          onClickFunction={() => setSelectedDifficulty("Medium")}
        ></GameSettingsCard>
        <GameSettingsCard
          cardTitle={t("Hard")}
          cardDescription={t("08s per Question")}
          cardIcon={GlobeIcon}
          isSelected={selectedDifficulty == "Hard"}
          onClickFunction={() => setSelectedDifficulty("Hard")}
        ></GameSettingsCard>
      </section>
      <div className="section-separator">
        <h2 className="section-title">{t("Game Lenght Selection")}</h2>
        <hr className="section-line" />
      </div>
      <section className="game-lenght-selection">
        <GameSettingsCard
          cardTitle={t("Short")}
          cardDescription={t("5 Questions")}
          cardIcon={GlobeIcon}
          isSelected={selectedGameLenght == "Short"}
          onClickFunction={() => setSelectedGameLenght("Short")}
        ></GameSettingsCard>
        <GameSettingsCard
          cardTitle={t("Medium")}
          cardDescription={t("10 Questions")}
          cardIcon={GlobeIcon}
          isSelected={selectedGameLenght == "Medium"}
          onClickFunction={() => setSelectedGameLenght("Medium")}
        ></GameSettingsCard>
        <GameSettingsCard
          cardTitle={t("Long")}
          cardDescription={t("20 Questions")}
          cardIcon={GlobeIcon}
          isSelected={selectedGameLenght == "Long"}
          onClickFunction={() => setSelectedGameLenght("Long")}
        ></GameSettingsCard>
      </section>
    </Container>
  );
}
