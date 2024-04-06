import React from "react";
import { Text, Stack, Divider, Center, Box } from "@chakra-ui/react";
import TimeSince from "./refreshDate";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorMode,
} from '@chakra-ui/react'
import { SelfWritingText } from "./selfWritingText";

const CV_1: React.FC = () => {
    const { colorMode } = useColorMode();
    const phrases1 = [
        "Datos",
    ];
    const phrases2 = ["Fecha de Nac.: 25.12.1991"];
    const phrases3 = ["Edad:"];
    const phrases4 = ["Nacionalidad:"];
    const phrases5 = ["Argentina"];
    const phrases6 = ["Cel.:"];
    const phrases7 = ["+54 9 221 690 8850"];
    const phrases8 = ["E-mail:"];
    const phrases9 = ["arnaboldi.juan@gmail.com"];
    const phrases10 = ["Ubicación:"];
    const phrases11 = ["La Plata, Buenos Aires"];
    const phrases12 = ["Formación"];
    const phrases13 = ["2021 - Actualidad"];
    const phrases14 = ["UES21, sede La Plata"];
    const phrases15 = ["Licenciatura en Informática (en curso)"];
    return (
        <Accordion allowMultiple>
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
                <AccordionItem border={"none"}>
                    <AccordionButton
                        paddingLeft={"0px"}
                        paddingTop={"0px"}
                        paddingBottom={"0px"}
                    >
                        <Text flex={1} textAlign={"left"} fontSize={"14px"}>
                            <Box as="span" fontWeight="bold">
                                <SelfWritingText
                                    phrases={phrases2}
                                    erase={false}
                                    cursor={false}
                                />
                            </Box>
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel
                        paddingLeft={"0px"}
                        paddingTop={"0px"}
                        paddingBottom={"0px"}
                    >
                        <Text fontSize={"14px"}>
                            <Box as="span" fontWeight="bold">
                                <SelfWritingText
                                    phrases={phrases3}
                                    erase={false}
                                    cursor={false}
                                />
                            </Box>
                        </Text>
                        <Text fontSize={"14px"}>
                            <TimeSince startDate={new Date(1991, 12, 25)} />
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
                <Text fontSize={"14px"}>
                    <Box as="span" fontWeight="bold">
                        <SelfWritingText
                            phrases={phrases4}
                            erase={false}
                            cursor={false}
                        />
                    </Box>{" "}
                    <SelfWritingText
                        phrases={phrases5}
                        erase={false}
                        cursor={false}
                    />
                </Text>
                <Text fontSize={"14px"}>
                    <Box as="span" fontWeight="bold">
                        <SelfWritingText
                            phrases={phrases6}
                            erase={false}
                            cursor={false}
                        />
                    </Box>{" "}
                    <SelfWritingText
                        phrases={phrases7}
                        erase={false}
                        cursor={false}
                    />
                </Text>
                <Text fontSize={"14px"}>
                    <Box as="span" fontWeight="bold">
                        <SelfWritingText
                            phrases={phrases8}
                            erase={false}
                            cursor={false}
                        />
                    </Box>{" "}
                    <SelfWritingText
                        phrases={phrases9}
                        erase={false}
                        cursor={false}
                    />
                </Text>
                <Text fontSize={"14px"}>
                    <Box as="span" fontWeight="bold">
                        <SelfWritingText
                            phrases={phrases10}
                            erase={false}
                            cursor={false}
                        />
                    </Box>{" "}
                    <SelfWritingText
                        phrases={phrases11}
                        erase={false}
                        cursor={false}
                    />
                </Text>
                <Center position="relative" paddingTop={"20px"}>
                    <Divider borderWidth="1px" my="4" />
                    <Text fontWeight={"bold"} fontSize={"16px"}>
                        <SelfWritingText
                            phrases={phrases12}
                            erase={false}
                            cursor={false}
                        />
                    </Text>
                    <Divider borderWidth="1px" my="4" />
                </Center>
                <Text fontSize={"14px"}>
                    <Box as="span" fontWeight="bold">
                        <SelfWritingText
                            phrases={phrases13}
                            erase={false}
                            cursor={false}
                        />
                    </Box>{" "}
                    <SelfWritingText
                        phrases={phrases14}
                        erase={false}
                        cursor={false}
                    />
                    <SelfWritingText
                        phrases={phrases15}
                        erase={false}
                        cursor={false}
                    />
                </Text>
            </Stack>
        </Accordion>
    );
};

export default CV_1;
