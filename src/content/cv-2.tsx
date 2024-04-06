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

const CV_2: React.FC = () => {
    const { colorMode } = useColorMode();
    return (
        <Stack
            paddingLeft={"5px"}
            spacing={1}
            color={colorMode === "dark" ? "white" : "white"}
        >
            <Center position="relative" paddingTop={"20px"}>
                <Divider borderWidth="1px" my="4" />
                <Text fontWeight={"bold"} fontSize={"16px"}>
                    Experiencia
                </Text>
                <Divider borderWidth="1px" my="4" />
            </Center>
            <Text fontSize={"14px"} paddingBottom={"0px"} marginBottom={"0px"}>
                <Box as="span" fontWeight="bold">
                    Ministerio de Justicia, Arg.
                </Box>
                <br />
                S.P.B., D.T.I.
                <br />
                <Box as="span" fontWeight="bold">
                    Puesto:
                </Box>
                <br />
                Desarrollador especializado en Backend
                <br />
                <Box as="span" fontWeight="bold">
                    Tiempo en el puesto:
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
                    Proyectos
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
                            <Text as="span" fontWeight="bold">Lista de proyectos</Text>
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel fontSize={"14px"}>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="/htmlcss">
                                Proyecto HTML/CSS
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="/spa">
                                Proyecto SPA
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="/svelte">
                                Proyecto Svelte
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="/vue">
                                Proyecto Vue
                            </ChakraLink>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Stack>
    );
};

export default CV_2;
