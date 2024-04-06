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

const CV_1: React.FC = () => {
    const { colorMode } = useColorMode();
    return (
        <Accordion allowMultiple>
            <Stack paddingLeft={"5px"} spacing={1} color={colorMode === "dark" ? "white" : "white"}>
                <Center position="relative" paddingTop={"20px"}>
                    <Divider borderWidth="1px" my="4" />
                    <Text fontWeight={"bold"} fontSize={"16px"}>Datos</Text>
                    <Divider borderWidth="1px" my="4" />
                </Center>
                <AccordionItem border={"none"}>
                    <AccordionButton
                        paddingLeft={"0px"}
                        paddingTop={"0px"}
                        paddingBottom={"0px"}
                    >
                        <Text flex={1} textAlign={"left"} fontSize={"14px"}>
                             <Box as="span" fontWeight="bold">Fecha de Nac.:</Box>‎ 25.12.1991
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel
                        paddingLeft={"0px"}
                        paddingTop={"0px"}
                        paddingBottom={"0px"}
                    >
                        <Text fontSize={"14px"}>
                             <Box as="span" fontWeight="bold">Edad:</Box>
                        </Text>
                        <Text fontSize={"14px"}>
                            <TimeSince startDate={new Date(1991, 12, 25)} />
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
                <Text fontSize={"14px"}>
                    <Box as="span" fontWeight="bold">Nacionalidad:</Box>{" "}
                    Argentina
                </Text>
                <Text fontSize={"14px"}>
                    <Box as="span" fontWeight="bold">Cel.:</Box> +54 9 221
                    690 8850
                </Text>
                <Text fontSize={"14px"}>
                    <Box as="span" fontWeight="bold">E-mail:</Box>{" "}
                    arnaboldi.juan@gmail.com
                </Text>
                <Text fontSize={"14px"}>
                    <Box as="span" fontWeight="bold">Ubicación:</Box>{" "}
                    La Plata, Buenos Aires
                </Text>
                <Center position="relative" paddingTop={"20px"}>
                    <Divider borderWidth="1px" my="4" />
                    <Text fontWeight={"bold"} fontSize={"16px"}>
                        Formación
                    </Text>
                    <Divider borderWidth="1px" my="4" />
                </Center>
                <Text fontSize={"14px"}>
                    2021 - Actualidad <br />
                    UES21, sede La Plata <br />
                    Licenciatura en Informática (en curso)
                </Text>
            </Stack>
        </Accordion>
    );
};

export default CV_1;
