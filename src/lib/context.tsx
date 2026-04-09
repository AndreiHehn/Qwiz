/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export const AppContext = createContext({} as AppContextProps);

interface AppContextProviderProps {
  children: ReactNode;
}
interface AppContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  showModalSettings: boolean;
  setShowModalSettings: Dispatch<SetStateAction<boolean>>;
  settingsChanged: boolean;
  setSettingsChanged: Dispatch<SetStateAction<boolean>>;
  resetSettings: boolean;
  setResetSettings: Dispatch<SetStateAction<boolean>>;
  quitSettings: boolean;
  setQuitSettings: Dispatch<SetStateAction<boolean>>;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  activePage: string;
  setActivePage: Dispatch<SetStateAction<string>>;
  confirmTheme: boolean;
  setConfirmTheme: Dispatch<SetStateAction<boolean>>;
  selectedTheme: string;
  setSelectedTheme: Dispatch<SetStateAction<string>>;
  selectedThemeID: string;
  setSelectedThemeID: Dispatch<SetStateAction<string>>;
  gameSettings: boolean;
  setGameSettings: Dispatch<SetStateAction<boolean>>;
  selectedDifficulty: string;
  setSelectedDifficulty: Dispatch<SetStateAction<string>>;
  selectedGameLenght: string;
  setSelectedGameLenght: Dispatch<SetStateAction<string>>;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("qwiz_theme") || "app";
  });
  const [language, setLanguage] = useState(
    localStorage.getItem("qwiz_language") || "en",
  );
  const [showModalSettings, setShowModalSettings] = useState(false);
  const [settingsChanged, setSettingsChanged] = useState(false);
  const [resetSettings, setResetSettings] = useState(false);
  const [quitSettings, setQuitSettings] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activePage, setActivePage] = useState("Home");
  const [confirmTheme, setConfirmTheme] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedThemeID, setSelectedThemeID] = useState("");
  const [gameSettings, setGameSettings] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedGameLenght, setSelectedGameLenght] = useState("");

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        language,
        setLanguage,
        showModalSettings,
        setShowModalSettings,
        settingsChanged,
        setSettingsChanged,
        resetSettings,
        setResetSettings,
        quitSettings,
        setQuitSettings,
        selectedCategory,
        setSelectedCategory,
        activePage,
        setActivePage,
        confirmTheme,
        setConfirmTheme,
        selectedTheme,
        setSelectedTheme,
        selectedThemeID,
        setSelectedThemeID,
        gameSettings,
        setGameSettings,
        selectedDifficulty,
        setSelectedDifficulty,
        selectedGameLenght,
        setSelectedGameLenght,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
