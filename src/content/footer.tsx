import React from "react";
import { Box, Text, Link, Icon, Flex, useColorMode } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
    const { colorMode } = useColorMode();
    return (
        <Box
            as="footer"
            py={4}
            color={colorMode === "dark" ? "white" : "white"}
            userSelect={"none"}
        >
            <Box maxW="container.lg" mx="auto" textAlign="center">
                <Text>&copy; 2024 JIATech.</Text>
                <Flex justifyContent="center" mt={2}>
                    <Link
                        href="https://github.com/JIATech"
                        target="_blank"
                        rel="noopener noreferrer"
                        mx={2}
                    >
                        <Icon as={FaGithub} boxSize={6} />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/juan-arnaboldi"
                        target="_blank"
                        rel="noopener noreferrer"
                        mx={2}
                    >
                        <Icon as={FaLinkedin} boxSize={6} />
                    </Link>
                </Flex>
            </Box>
        </Box>
    );
};

export default Footer;
