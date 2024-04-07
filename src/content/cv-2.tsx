import React from "react";
import { Text, Stack, Divider, Center, Box, useColorMode } from "@chakra-ui/react";
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

const CV_2: React.FC = () => {
    const { colorMode } = useColorMode();
    const phrases1 = ["Experiencia"];
    const phrases2 = ["Ministerio de Justicia, Arg."];
    const phrases3 = ["S.P.B., D.T.I."];
    const phrases4 = ["Puesto:"];
    const phrases5 = ["Desarrollador especializado en Backend"];
    const phrases6 = ["Tiempo en el puesto:"];
    const phrases7 = ["Proyectos"];
    const phrases8 = ["Lista de proyectos"];
    const phrases9 = ["Proyecto HTML/CSS"];
    const phrases10 = ["Proyecto SPA"];
    const phrases11 = ["Proyecto Svelte"];
    const phrases12 = ["Proyecto Vue"];
    const phrases13 = ["Proyecto Lorem"];
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
                </Box>
                <SelfWritingText
                    phrases={phrases3}
                    erase={false}
                    cursor={false}
                />
                <Box as="span" fontWeight="bold">
                    <SelfWritingText
                        phrases={phrases4}
                        erase={false}
                        cursor={false}
                    />
                </Box>
                <SelfWritingText
                    phrases={phrases5}
                    erase={false}
                    cursor={false}
                />
                <Box as="span" fontWeight="bold">
                    <SelfWritingText
                        phrases={phrases6}
                        erase={false}
                        cursor={false}
                    />
                </Box>
            </Text>
            <Text fontSize={"14px"} paddingTop={"0px"} marginTop={"0px"}>
                <TimeSince startDate={new Date(2023, 10, 27)} />
            </Text>
            <Center position="relative" paddingTop={"20px"} paddingLeft={"0px"}>
                <Divider borderWidth="1px" my="4" />
                <ChakraLink
                    as={ReactRouterLink}
                    fontWeight="bold"
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
                        <Box>
                            <ChakraLink
                                href="https://jiatech.github.io/lorem-react-app.github.io/"
                            >
                                <SelfWritingText
                                    phrases={phrases13}
                                    erase={false}
                                    cursor={false}
                                />
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="#">
                                <SelfWritingText
                                    phrases={phrases9}
                                    erase={false}
                                    cursor={false}
                                />
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="#">
                                <SelfWritingText
                                    phrases={phrases10}
                                    erase={false}
                                    cursor={false}
                                />
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="#">
                                <SelfWritingText
                                    phrases={phrases11}
                                    erase={false}
                                    cursor={false}
                                />
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="#">
                                <SelfWritingText
                                    phrases={phrases12}
                                    erase={false}
                                    cursor={false}
                                />
                            </ChakraLink>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Stack>
    );
};

export default CV_2;
