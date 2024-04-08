import React from "react";
import { Button, ButtonGroup, Box, useColorMode } from "@chakra-ui/react";
import { useLanguage } from "../../FastRefresh.tsx";

const LanguageSwitcher: React.FC = () => {
    const { changeLanguage } = useLanguage();
    const { colorMode } = useColorMode();

    const handleButtonClick = (language: string) => {
        changeLanguage(language);
        window.location.reload();
    };

    return (
        <Box>
            <ButtonGroup defaultValue="en">
                <Button
                    top={14}
                    right={7}
                    position={"fixed"}
                    colorScheme={"transparent"}
                    color={colorMode === "dark" ? "white" : "black"}
                    fontSize={"22px"}
                    value="en"
                    onClick={() => handleButtonClick("en")}
                >
                    ENG
                </Button>
                <Button
                    top={4}
                    right={8}
                    position={"fixed"}
                    colorScheme={"transparent"}
                    fontSize={"24px"}
                    color={colorMode === "dark" ? "white" : "black"}
                    value="es"
                    onClick={() => handleButtonClick("es")}
                >
                    ESP
                </Button>
            </ButtonGroup>
        </Box>
    );
}

export default LanguageSwitcher;
