import React, { createContext, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

// Definir el tipo para el valor del contexto
export interface LanguageContextType {
    language: string;
    changeLanguage: (language: string) => void;
}

// Crear el contexto con un valor predeterminado que coincida con el tipo
export const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

interface LanguageProviderProps {
    children: ReactNode;
}

// Crear un componente provider que encapsule la lógica de cambio de idioma
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
}) => {
    const [language, setLanguage] = useState<string>(localStorage.getItem("language") || "en");
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
