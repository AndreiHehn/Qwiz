import { useContext, useState } from "react";
import { Container } from "../styles/SideBar";
import SideBarLogo from "../assets/icons/Logo2.png";
import { useTranslation } from "react-i18next";
import SideBarButton from "./SideBarButton";
import SettingsIcon from "../assets/icons/SettingsIcon.svg?react";
import { AppContext } from "../lib/context";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setShowModalSettings } = useContext(AppContext);
  const { t } = useTranslation();
  return (
    <Container
      isOpen={isOpen}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <img className="sidebar-logo" src={SideBarLogo} />
      <section className="sidebar-categories">
        <h2 className="categories-title">{t("Categories")}</h2>
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
