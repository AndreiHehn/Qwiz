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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
