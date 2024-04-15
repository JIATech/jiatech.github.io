import React, { useState, useEffect } from "react";
import { Box, Switch, Text } from "@chakra-ui/react";
import { useLanguage } from "../../FastRefresh.tsx";

const LanguageSwitcher: React.FC = () => {
    const { language, changeLanguage } = useLanguage();
    const [isChecked, setIsChecked] = useState(language === "en");

    useEffect(() => {
        setIsChecked(language === "es");
    }, [language]);

    const handleSwitchChange = () => {
        const newLanguage = isChecked ? "en" : "es";
        changeLanguage(newLanguage);
        setIsChecked(!isChecked);
    };

    return (
        <Box position="fixed" top="4" right="8">
            <Switch
                size="lg"
                isChecked={isChecked}
                onChange={handleSwitchChange}
                colorScheme="gray"
            />
            <Text fontSize="sm" mt="2" bg={isChecked ? "grey" : "grey"} color="white" p="2" borderRadius="md" size={"xs"} onClick={handleSwitchChange} _hover={{ cursor: "pointer" }}>
                {isChecked ? "es-ES" : "en-US"}
            </Text>
        </Box>
    );
};

export default LanguageSwitcher;
