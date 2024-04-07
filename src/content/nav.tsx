import React from "react";
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

const OpenModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
            >
                Contacto
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent backgroundColor="rgba(0,0,0,0.9)" color="white">
                    <ModalHeader>Contacto</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Box>
                            <ChakraLink
                                href="https://linkedin.com/in/juan-arnaboldi"
                                isExternal
                            >
                                LinkedIn Page
                            </ChakraLink>
                        </Box>
                        <Box>Wsap: 221-690-8850</Box>
                        <Box>E-mail: arnaboldi.juan@gmail.com</Box>
                        <Box>
                            <ChakraLink
                                href="https://github.com/JIATech"
                                isExternal
                            >
                                GitHub Page
                            </ChakraLink>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

const Nav: React.FC = () => {
    const { colorMode } = useColorMode();
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
                <AccordionItem border={"none"}>
                    <h2 style={{ margin: "0", padding: "0" }}>
                        <AccordionButton padding={0} margin={0}>
                            <Box textAlign="left" padding={0} margin={0}>
                                Proyectos
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="/projects">
                                React Lorem
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="#">
                                Proyecto HTML/CSS
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="#">
                                Proyecto SPA
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="#">
                                Proyecto Svelte
                            </ChakraLink>
                        </Box>
                        <Box>
                            <ChakraLink as={ReactRouterLink} to="#">
                                Proyecto Vue
                            </ChakraLink>
                        </Box>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            {OpenModal()}
        </Box>
    );
};

export default Nav;
