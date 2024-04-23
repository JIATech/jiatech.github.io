import React from "react";
import { useTranslation } from "react-i18next";
import {
    Box,
    useColorMode,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

const OpenModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { t } = useTranslation();

    return (
        <>
            <Button
                onClick={onOpen}
                style={{
                    margin: "0",
                    padding: "0",
                    backgroundColor: "rgba(0,0,0,0)",
                    color: "white",
                }}
                fontWeight={"normal"}
                boxSize={"auto"}
            >
                {t("contact")}
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent backgroundColor="rgba(0,0,0,0.9)" color="white">
                    <ModalHeader>{t("contact")}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>Wsap: 221-690-8850</Box>
                        <Box>
                            E-mail: arnaboldi.juan@gmail.com{" "}
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
                        </Box>
                        <Box>
                            <ChakraLink
                                href="https://github.com/JIATech"
                                isExternal
                            >
                                GitHub Page
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink
                                href="https://linkedin.com/in/juan-arnaboldi"
                                isExternal
                            >
                                LinkedIn Page
                            </ChakraLink>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            {t("close")}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

const Nav: React.FC = () => {
    const { colorMode } = useColorMode();
    const { t } = useTranslation();
    return (
        <Box
            as="nav"
            color={colorMode === "dark" ? "white" : "white"}
            padding={1}
        >
            <Box>
                <ChakraLink as={ReactRouterLink} to="/">
                    Home
                </ChakraLink>
            </Box>
            <Accordion allowToggle>
                <AccordionItem borderStyle={"double"} borderColor={"white"}>
                    <h2 style={{ margin: "0", padding: "0" }}>
                        <AccordionButton padding={0} margin={0}>
                            <Box textAlign="left" padding={0} margin={0}>
                                {t("projects")}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="/projects">
                                {t("projectReact")}
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="#">
                                {t("projectHTML")}
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="#">
                                {t("projectSPA")}
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="#">
                                {t("projectSvelte")}
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="#">
                                {t("projectVue")}
                            </ChakraLink>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Box>
                {OpenModal()}
            </Box>
        </Box>
    );
};

export default Nav;
