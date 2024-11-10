import React, { useState, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./LanguageContext";

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
}) => {
    const [language, setLanguage] = useState<string>(
        localStorage.getItem("language") || "en"
    );
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        setLanguage(language);
        localStorage.setItem("language", language);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
