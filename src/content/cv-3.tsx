import React from "react";
import { useTranslation } from "react-i18next";
import {
    Text,
    Stack,
    Divider,
    Center,
    useColorMode,
    List,
    ListItem,
    Box,
} from "@chakra-ui/react";
import { SelfWritingText } from "./selfWritingText";

const CV_3: React.FC<{ language?: string }> = ({ language }) => {
    const { colorMode } = useColorMode();
    const { t, i18n } = useTranslation();
    const phrases1 = [t("skills")];
    const phrases2 = [t("description1")];
    const phrases3 = [t("description2")];
    const phrases4 = [t("description3")];
    const phrases5 = [t("description4")];
    const phrases6 = [t("description5")];
    const phrases7 = [t("description6")];
    const phrases8 = [t("description7")];
    const phrases9 = [t("skills2")];
    const phrases10 = ["• Python"];
    const phrases11 = ["• PHP"];
    const phrases12 = ["• Vue"];
    const phrases13 = ["• MongoDB"];
    const phrases14 = ["• Svelte"];

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
            </List>
            <Divider borderWidth="1px" w={"99%"} />
            <Center position="relative" paddingTop={"0px"}>
                <Text fontWeight={"bold"} fontSize={"16px"} align="center">
                    <SelfWritingText
                        phrases={phrases9}
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
                            phrases={phrases10}
                            erase={false}
                            cursor={false}
                        />
                    </Box>
                </ListItem>
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
            </List>
        </Stack>
    );
};

export default CV_3;
