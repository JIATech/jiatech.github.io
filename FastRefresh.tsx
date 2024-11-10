import { useContext } from "react";
import { LanguageContextProps } from "./LanguageContext";
import { LanguageContext } from "./LanguageContext";

export function useLanguage(): LanguageContextProps {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
