// import CV_1 from "./cv-1";
import { Text, Stack, Divider, Center, Box } from "@chakra-ui/react";
import TimeSince from "./refreshDate";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import { SelfWritingText } from "./selfWritingText";
import CV_2 from "./cv-2";
import CV_3 from "./cv-3";
import { Grid, GridItem } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { CopyIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const Main = () => {
    const { colorMode } = useColorMode();
    const { t } = useTranslation();
    const phrases1 = [t("data")];
    const phrases2 = [t("birthdate")];
    const phrases3 = [t("age")];
    const phrases4 = [t("nationality")];
    const phrases5 = [t("argentinian")];
    const phrases6 = [t("phone")];
    const phrases7 = ["+54 9 221 690 8850"];
    const phrases8 = ["E-mail:"];
    const phrases9 = ["arnaboldi.juan@gmail.com"];
    const phrases10 = [t("location")];
    const phrases11 = ["La Plata, Buenos Aires"];
    const phrases12 = [t("education")];
    const phrases13 = [t("present")];
    const phrases14 = [t("university")];
    const phrases15 = [t("degree")];

    return (
        <GridItem
            w="100%"
            h="100%"
            borderTop={"none"}
            area="main"
            overflowY={"auto"}
        >
            <GridItem fontSize={"xl"}>
                <Grid
                    templateColumns="repeat(3, 1fr)"
                    gap={4}
                    color={colorMode === "dark" ? "black" : "white"}
                >
                    <GridItem>
                        {/* <CV_1 language={language} /> */}
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
                                        <Text
                                            flex={1}
                                            textAlign={"left"}
                                            fontSize={"14px"}
                                        >
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
                                            <TimeSince
                                                startDate={
                                                    new Date(1991, 12, 25)
                                                }
                                            />
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
                                    />{" "}
                                    <Button
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                "arnaboldi.juan@gmail.com"
                                            );
                                        }}
                                        leftIcon={<CopyIcon />}
                                        size={"xs"}
                                        bgColor={"white"}
                                        color={"black"}
                                    ></Button>
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
                                        <br />
                                    </Box>{" "}
                                    <SelfWritingText
                                        phrases={phrases14}
                                        erase={false}
                                        cursor={false}
                                    />
                                    <br />
                                    <SelfWritingText
                                        phrases={phrases15}
                                        erase={false}
                                        cursor={false}
                                    />
                                </Text>
                            </Stack>
                        </Accordion>
                    </GridItem>
                    <GridItem>
                        <CV_2 />
                    </GridItem>
                    <GridItem>
                        <CV_3 />
                    </GridItem>
                </Grid>
            </GridItem>
        </GridItem>
    );
};

export default Main;