import { useContext, useEffect } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import { AppContext } from "./lib/context";
import ModalSettings from "./components/ModalSettings";
import { ModalGeneric } from "./generic/GenericModal";
import { useTranslation } from "react-i18next";
import { ModalMessage } from "./generic/ModalMessage";
import Home from "./pages/Home";
import ThemeSelection from "./pages/ThemeSelection";
import ModalGameSettings from "./components/ModalGameSettings";
import i18n from "./lib/language";

function App() {
  const {
    showModalSettings,
    setShowModalSettings,
    setTheme,
    theme,
    setLanguage,
    resetSettings,
    setResetSettings,
    settingsChanged,
    quitSettings,
    setQuitSettings,
    activePage,
    confirmTheme,
    setConfirmTheme,
    selectedTheme,
    setSelectedTheme,
    gameSettings,
    setGameSettings,
    setSelectedDifficulty,
    setSelectedGameLenght,
  } = useContext(AppContext);
  const { t } = useTranslation();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light-theme", "dark-theme");

    if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      root.classList.add(prefersDark ? "dark-theme" : "light-theme");
    } else {
      root.classList.add(`${theme}-theme`);
    }
  }, [theme]);

  function ResetDefaults() {
    setTheme("app");
    setLanguage("en");

    localStorage.setItem("qwiz_theme", "app");
    localStorage.setItem("qwiz_theme", "en");

    i18n.changeLanguage("en");
  }

  function VerifySettings() {
    if (settingsChanged) {
      setQuitSettings(true);
    } else {
      setShowModalSettings(false);
    }
  }
  return (
    <>
      <SideBar></SideBar>
      {activePage == "Home" && <Home></Home>}
      {activePage == "Theme Selection" && <ThemeSelection></ThemeSelection>}
      {showModalSettings && (
        <ModalGeneric
          functionCloseModal={() => VerifySettings()}
          mobileFullScreen
          top="50%"
          left="50%"
          title={t("Settings")}
          width="400px"
        >
          <ModalSettings />
        </ModalGeneric>
      )}
      {resetSettings && (
        <ModalMessage
          textMessage={t("Do you want to reset the settings?")}
          onClick1={() => setResetSettings(false)}
          textButton1={t("Cancel")}
          onClick2={() => (
            setResetSettings(false),
            ResetDefaults(),
            setShowModalSettings(false)
          )}
          textButton2={t("Yes")}
        ></ModalMessage>
      )}
      {quitSettings && (
        <ModalMessage
          textMessage={t("Do you want to quit without saving?")}
          onClick1={() => setQuitSettings(false)}
          textButton1={t("Cancel")}
          onClick2={() => (setQuitSettings(false), setShowModalSettings(false))}
          textButton2={t("Yes")}
        ></ModalMessage>
      )}
      {confirmTheme && (
        <ModalMessage
          textMessage={
            t("Do you want to start the game with the theme") +
            " " +
            selectedTheme +
            "?"
          }
          onClick1={() => (setSelectedTheme(""), setConfirmTheme(false))}
          textButton1={t("Cancel")}
          onClick2={() => (setConfirmTheme(false), setGameSettings(true))}
          textButton2={t("Yes")}
        ></ModalMessage>
      )}
      {gameSettings && (
        <ModalGeneric
          functionCloseModal={() => (
            setGameSettings(false),
            setSelectedTheme(""),
            setSelectedDifficulty(""),
            setSelectedGameLenght("")
          )}
          mobileFullScreen
          top="50%"
          left="50%"
          title={t(selectedTheme)}
          width="600px"
        >
          <ModalGameSettings />
        </ModalGeneric>
      )}
    </>
  );
}

export default App;
