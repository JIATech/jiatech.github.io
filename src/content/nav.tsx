import React from 'react';
import { Box, useColorMode, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

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
                            <ChakraLink
                                href="https://jiatech.github.io/lorem-react-app.github.io/"
                                isExternal
                            >
                                Proyecto Lorem
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
            <Box>
                <ChakraLink as={ReactRouterLink} to="#">
                    Contacto
                </ChakraLink>
            </Box>
        </Box>
    );
};

export default Nav;
