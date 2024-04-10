import React, { useState, useEffect } from "react";
import { Box, Switch, Text } from "@chakra-ui/react";
import { useLanguage } from "../../FastRefresh.tsx";

const LanguageSwitcher: React.FC = () => {
    const { language, changeLanguage } = useLanguage(); // Asumiendo que useLanguage expone el idioma actual
    const [isChecked, setIsChecked] = useState(language === "es");

    useEffect(() => {
        setIsChecked(language === "es");
    }, [language]);

    const handleSwitchChange = () => {
        const newLanguage = isChecked ? "en" : "es";
        changeLanguage(newLanguage);
        // No recargar página, `changeLanguage` debería disparar re-renderización necesaria
        setIsChecked(!isChecked);
    };

    return (
        <Box position="fixed" top="4" right="8">
            <Switch
                size="lg"
                isChecked={isChecked}
                onChange={handleSwitchChange}
            />
            <Text fontSize="md" mt="2">
                {isChecked ? "es-ES" : "en-US"}
            </Text>
        </Box>
    );
};

export default LanguageSwitcher;
