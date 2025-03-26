import React from "react";
import { Box, Text, Link, useColorMode, Flex, Icon, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
    const { colorMode } = useColorMode();
    
    // Estilos según el tema
    const textColor = colorMode === "dark" 
        ? "gray.300" 
        : "gray.600";
    const linkHoverColor = colorMode === "dark" 
        ? "white" 
        : "gray.800";
    const bgColor = colorMode === "dark"
        ? "gray.900"
        : "rgba(190, 190, 195, 0.85)"; // Fondo grisáceo

    return (
        <Box 
            as="footer" 
            width="100%" 
            py={4} 
            px={6}
            textAlign="center"
            bgColor={bgColor}
            color={textColor}
        >
            <Flex 
                direction={{ base: "column", md: "row" }} 
                justify="space-between"
                align="center"
                maxW="container.lg"
                mx="auto"
                gap={4}
            >
                <Text fontSize="sm" color={textColor}>
                    &copy; 2025 Juan Ignacio Arnaboldi. All rights reserved.
                </Text>
                
                <HStack spacing={4}>
                    <Link href="https://github.com/JIATech" isExternal>
                        <Icon 
                            as={FaGithub} 
                            w={5} 
                            h={5} 
                            color={textColor}
                            _hover={{ color: linkHoverColor }}
                            transition="color 0.2s"
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/juan-arnaboldi/" isExternal>
                        <Icon 
                            as={FaLinkedin} 
                            w={5} 
                            h={5}
                            color={textColor}
                            _hover={{ color: linkHoverColor }}
                            transition="color 0.2s"
                        />
                    </Link>
                    <Link href="mailto:johndev@jiacode.dev" isExternal>
                        <Icon 
                            as={FaEnvelope} 
                            w={5} 
                            h={5}
                            color={textColor}
                            _hover={{ color: linkHoverColor }}
                            transition="color 0.2s"
                        />
                    </Link>
                </HStack>
            </Flex>
        </Box>
    );
};

export default Footer;
