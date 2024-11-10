import { createContext } from "react";

export interface LanguageContextProps {
    language: string;
    changeLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);