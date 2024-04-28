import { createContext, useEffect, useState } from "react";
import { DarkModeEnum } from "./types";

interface DarkModeContextValue {
  mode: DarkModeEnum;
  toggleMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextValue>({ mode: DarkModeEnum.LIGHT, toggleMode: () => {} });

const getInitialColorScheme = (): DarkModeEnum => (window?.matchMedia("(prefers-color-scheme: dark)")?.matches ? DarkModeEnum.DARK : DarkModeEnum.LIGHT);

interface DarkModeProviderProps {
  children: React.ReactNode;
}
export const DarkModeProvider = ({children}: DarkModeProviderProps) => {
  const [mode, setMode] = useState<DarkModeEnum>(getInitialColorScheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', getInitialColorScheme());
  }, []);

  const toggleMode = () => {
    const nextMode = mode === DarkModeEnum.DARK ? DarkModeEnum.LIGHT : DarkModeEnum.DARK;

    document.documentElement.setAttribute('data-theme', nextMode);

    setMode(nextMode);
  };

  return (
    <DarkModeContext.Provider value={{mode, toggleMode}}>{children}</DarkModeContext.Provider>
  );
};