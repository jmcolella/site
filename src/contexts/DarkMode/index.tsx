import { createContext, useState } from "react";
import { DarkModeEnum } from "./types";

interface DarkModeContextValue {
  mode: DarkModeEnum;
  toggleMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextValue>({ mode: DarkModeEnum.LIGHT, toggleMode: () => {} });

interface DarkModeProviderProps {
  children: React.ReactNode;
}
export const DarkModeProvider = ({children}: DarkModeProviderProps) => {
  const [mode, setMode] = useState<DarkModeEnum>(() => {
    if (window?.matchMedia("(prefers-color-scheme: dark)")?.matches) {
      return DarkModeEnum.DARK;
    } else {
      return DarkModeEnum.LIGHT;
    }
  });

  const toggleMode = () => {
    document.documentElement.setAttribute('data-theme', mode === DarkModeEnum.DARK ? 'light' : 'dark');

    setMode(mode === DarkModeEnum.DARK ? DarkModeEnum.LIGHT : DarkModeEnum.DARK);
  };

  return (
    <DarkModeContext.Provider value={{mode, toggleMode}}>{children}</DarkModeContext.Provider>
  );
};