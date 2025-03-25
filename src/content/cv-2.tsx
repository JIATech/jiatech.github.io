import React from "react";
import { useTranslation } from "react-i18next";
import {
    Text,
    Stack,
    Divider,
    Center,
    Box,
    useColorMode,
} from "@chakra-ui/react";
import TimeSince from "./refreshDate";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { SelfWritingText } from "./selfWritingText";

const CV_2: React.FC<{ language?: string }> = ({ language }) => {
    const { colorMode } = useColorMode();
    const { t, i18n } = useTranslation();
    const phrases1 = [t("experience")];
    const phrases2 = [t("company1")];
    const phrases3 = ["S.P.B., D.T.I."];
    const phrases4 = [t("position")];
    const phrases5 = [t("position1")];
    const phrases6 = [t("currentPosition")];
    const phrases7 = [t("projects")];
    const phrases8 = [t("projectsList")];
    const phrase14 = [t("institutionTenure")];

    React.useEffect(() => {
        if (language) {
            i18n.changeLanguage(language);
        }
    }, [language, i18n]);

    return (
        <Stack
            paddingLeft={"5px"}
            spacing={1}
            color={colorMode === "dark" ? "white" : "white"}
        >
            <Center position="relative" paddingTop={"20px"}>
                <Divider borderWidth="1px" my="4" />
                <Text fontWeight={"bold"} fontSize={"16px"}>
                    <SelfWritingText
                        phrases={phrases1}
                        erase={false}
                        cursor={false}
                    />
                </Text>
                <Divider borderWidth="1px" my="4" />
            </Center>
            <Text fontSize={"14px"} paddingBottom={"0px"} marginBottom={"0px"}>
                <Box as="span" fontWeight="bold">
                    <SelfWritingText
                        phrases={phrases2}
                        erase={false}
                        cursor={false}
                    />
                    <br />
                </Box>
                <SelfWritingText
                    phrases={phrases3}
                    erase={false}
                    cursor={false}
                />
                <br />
                <Box as="span" fontWeight="bold">
                    <SelfWritingText
                        phrases={phrases4}
                        erase={false}
                        cursor={false}
                    />
                </Box>
                <br />
                <SelfWritingText
                    phrases={phrases5}
                    erase={false}
                    cursor={false}
                />
                <br />
                <Box as="span" fontWeight="bold">
                    <SelfWritingText
                        phrases={phrases6}
                        erase={false}
                        cursor={false}
                    />
                </Box>
            </Text>
            <Text fontSize={"14px"} paddingTop={"0px"} marginTop={"0px"}>
                <TimeSince startDate={new Date(2023, 9, 27)} />
            </Text>
            <Text fontSize={"14px"} paddingTop={"0px"} marginTop={"0px"}>
                <Box as="span" fontWeight="bold">
                    <SelfWritingText
                        phrases={phrase14} // Employment Period
                        erase={false}
                        cursor={false}
                    />
                </Box>
            </Text>
            <Text fontSize={"14px"} paddingBottom={"0px"} marginBottom={"0px"}>
                <TimeSince startDate={new Date(2011, 0, 28)} />
            </Text>

            <Center position="relative" paddingTop={"20px"} paddingLeft={"0px"}>
                <Divider borderWidth="1px" my="4" />
                <ChakraLink
                    as={ReactRouterLink}
                    fontWeight="bold"
                    fontSize={"16px"}
                    to={"/projects"}
                >
                    <SelfWritingText
                        phrases={phrases7}
                        erase={false}
                        cursor={false}
                    />
                </ChakraLink>
                <Divider borderWidth="1px" my="4" />
            </Center>
            <Accordion allowMultiple defaultIndex={[0]}>
                <AccordionItem border={"none"}>
                    <AccordionButton
                        paddingLeft={"0px"}
                        paddingTop={"0px"}
                        paddingBottom={"0px"}
                    >
                        <Text flex={1} textAlign={"left"} fontSize={"14px"}>
                            <Text as="span" fontWeight="bold">
                                <SelfWritingText
                                    phrases={phrases8}
                                    erase={false}
                                    cursor={false}
                                />
                            </Text>
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel fontSize={"14px"}>
                        <Text>
                            {t("projectsDescription")}
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Stack>
    );
};

export default CV_2;
