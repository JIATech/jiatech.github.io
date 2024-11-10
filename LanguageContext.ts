import { createContext } from "react";

interface LanguageContextProps {
    language: string;
    changeLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);