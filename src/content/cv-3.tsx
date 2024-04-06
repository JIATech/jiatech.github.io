import React from "react";
import { Text, Stack, Divider, Center, useColorMode, List, ListItem, ListIcon, Box } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const CV_3: React.FC = () => {
    const { colorMode } = useColorMode();
    return (
        <Stack
            paddingLeft={"5px"}
            spacing={2}
            color={colorMode === "dark" ? "white" : "white"}
        >
            <Divider borderWidth="1px" w={"99%"} mt={"20px"} />
            <Center position="relative" paddingTop={"0px"}>
                <Text fontWeight={"bold"} fontSize={"16px"} align="center">
                    Habilidades Técnicas Principales
                </Text>
            </Center>
            <Divider borderWidth="1px" w={"99%"} />
            <List fontSize={"14px"}>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        JavaScript
                    </Box>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        Node.js
                    </Box>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        Express.js
                    </Box>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        PostgreSQL
                    </Box>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        MySQL
                    </Box>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        Git
                    </Box>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        Github
                    </Box>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        Docker
                    </Box>
                </ListItem>
            </List>
            <Divider borderWidth="1px" w={"99%"} />
            <Center position="relative" paddingTop={"0px"}>
                <Text fontWeight={"bold"} fontSize={"16px"} align="center">
                    Conocimientos Moderados
                </Text>
            </Center>
            <Divider borderWidth="1px" w={"99%"} />
            <List fontSize={"14px"}>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        HTML+CSS
                    </Box>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        React
                    </Box>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        Python
                    </Box>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        PHP
                    </Box>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        Vue
                    </Box>
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} />
                    <Box as="span" fontStyle="italic">
                        MongoDB
                    </Box>
                </ListItem>
            </List>
        </Stack>
    );
};

export default CV_3;
