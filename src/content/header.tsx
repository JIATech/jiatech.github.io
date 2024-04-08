import React from 'react';
// import { useTranslation } from 'react-i18next';
import { Box, useColorMode, Image } from '@chakra-ui/react';
// import { SelfWritingText } from './selfWritingText';
import ToggleDarkMode from '../Toggle.tsx';
import LanguageSelector from './langComponent.tsx';
import Contador from './contador.tsx';


const Header: React.FC = () => {
    const { colorMode } = useColorMode();
    // const { t } = useTranslation();
    // const phrases1 = [
    //     t("header1"),
    // ];
    return (
        <>
            <LanguageSelector />
            <Contador />
            <Box
                as="header"
                p={4}
                color={colorMode === "dark" ? "white" : "white"}
                textAlign={{ base: "left", lg: "left" }}
                fontFamily={"monospace"}
                h="100%"
                w={{ base: "50%", lg: "100%" }}
                fontSize={{ base: "1rem", lg: "1.5rem" }}
                paddingTop={{ base: "5px", lg: "10px" }}
            >
                <Image
                    src="../../assets/logo_lg.png"
                    alt="logo"
                    borderRadius="full"
                    position="relative"
                    top={{ base: "-2rem", lg: "-2rem" }}
                    right={{ base: "5rem", lg: "1rem" }}
                    filter={colorMode === "dark" ? "invert(1)" : "invert(1)"}
                    transform={{ base: "scale(0.5)", lg: "scale(1)" }}
                    userSelect={"none"}
                    zIndex={0}
                />
                {/* <Box zIndex={999} w={{ base: "100%", lg: "50%" }} top={{ base: "0", lg: "0" }} position="absolute">
                <SelfWritingText
                    phrases={phrases1}
                    erase={true}
                    cursor={true}
                />
                </Box> */}
            </Box>
            <ToggleDarkMode />
        </>
    );
};

export default Header;