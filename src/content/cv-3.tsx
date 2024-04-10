import React from "react";
import { useTranslation } from "react-i18next";
import { Text, Stack, Divider, Center, useColorMode, List, ListItem, Box } from "@chakra-ui/react";
import { SelfWritingText } from "./selfWritingText";

const CV_3: React.FC<{ language?: string }> = ({ language }) => {
    const { colorMode } = useColorMode();
    const { t, i18n } = useTranslation();
    const phrases1 = [t("skills")];
    const phrases2 = ["> JavaScript"];
    const phrases3 = ["> Node.js"];
    const phrases4 = ["> Express.js"];
    const phrases5 = ["> PostgreSQL"];
    const phrases6 = ["> MySQL"];
    const phrases7 = ["> Git"];
    const phrases8 = ["> Github"];
    const phrases9 = ["> Docker"];
    const phrases10 = [t("skills2")];
    const phrases11 = ["> HTML+CSS"];
    const phrases12 = ["> React"];
    const phrases13 = ["> Python"];
    const phrases14 = ["> PHP"];
    const phrases15 = ["> Vue"];
    const phrases16 = ["> MongoDB"];

    React.useEffect(() => {
        if (language) {
            i18n.changeLanguage(language);
        }
    }, [language, i18n]);

    return (
        <Stack
            paddingLeft={"5px"}
            spacing={2}
            color={colorMode === "dark" ? "white" : "white"}
        >
            <Divider borderWidth="1px" w={"99%"} mt={"20px"} />
            <Center position="relative" paddingTop={"0px"}>
                <Text fontWeight={"bold"} fontSize={"16px"} align="center">
                    <SelfWritingText
                        phrases={phrases1}
                        erase={false}
                        cursor={false}
                    />
                </Text>
            </Center>
            <Divider borderWidth="1px" w={"99%"} />
            <List fontSize={"14px"}>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases2}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases3}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases4}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases5}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases6}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases7}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases8}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases9}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
            </List>
            <Divider borderWidth="1px" w={"99%"} />
            <Center position="relative" paddingTop={"0px"}>
                <Text fontWeight={"bold"} fontSize={"16px"} align="center">
                    <SelfWritingText
                        phrases={phrases10}
                        erase={false}
                        cursor={false}
                    />
                </Text>
            </Center>
            <Divider borderWidth="1px" w={"99%"} />
            <List fontSize={"14px"}>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases11}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases12}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases13}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases14}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases15}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
                <ListItem>
                    <Box as="span" fontStyle="italic">
                        <SelfWritingText
                            phrases={phrases16}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
            </List>
        </Stack>
    );
};

export default CV_3;
