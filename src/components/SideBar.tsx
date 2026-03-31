import { useContext, useState } from "react";
import { Container } from "../styles/SideBar";
import SideBarLogo from "../assets/icons/Logo2.png";
import { useTranslation } from "react-i18next";
import SideBarButton from "./SideBarButton";
import SettingsIcon from "../assets/icons/SettingsIcon.svg?react";
import { AppContext } from "../lib/context";
import BasketballIcon from "../assets/icons/BasketballIcon.svg?react";
import GlobeIcon from "../assets/icons/GlobeIcon.svg?react";
import DNAIcon from "../assets/icons/DNAIcon.svg?react";
import CrownIcon from "../assets/icons/CrownIcon.svg?react";
import ControllerIcon from "../assets/icons/ControllerIcon.svg?react";
import PaletteIcon from "../assets/icons/PaletteIcon.svg?react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setShowModalSettings, setSelectedCategory } = useContext(AppContext);
  const { t } = useTranslation();

  const categoriesNames = [
    "Sports",
    "Geography",
    "Sciences",
    "History",
    "Entertainment",
    "Arts",
  ];

  const categoriesColors = [
    "#e27b0c",
    "#202eef",
    "#1bd240",
    "#efe411",
    "#bb13a7",
    "#ee3434",
  ];

  const categoriesIcons = [
    BasketballIcon,
    GlobeIcon,
    DNAIcon,
    CrownIcon,
    ControllerIcon,
    PaletteIcon,
  ];

  return (
    <Container
      isOpen={isOpen}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <img className="sidebar-logo" src={SideBarLogo} />
      <section className="sidebar-categories">
        <h2 className="categories-title">{t("Categories")}</h2>
        {categoriesNames.map((text, index) => (
          <SideBarButton
            key={index}
            mainColor={categoriesColors[index]}
            buttonIcon={categoriesIcons[index]}
            buttonText={t(text)}
            onClickFunction={() => setSelectedCategory(text)}
          />
        ))}
      </section>
      <section className="sidebar-footer">
        <SideBarButton
          mainColor="#444444"
          buttonIcon={SettingsIcon}
          buttonText={t("Settings")}
          onClickFunction={() => setShowModalSettings(true)}
        ></SideBarButton>
      </section>
    </Container>
  );
}
