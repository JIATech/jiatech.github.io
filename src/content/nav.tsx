import React from "react";
import { useTranslation } from "react-i18next";
import {
    Box,
    useColorMode,
    Flex,
    Button,
    Icon,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    HStack,
    Tooltip,
    Divider,
    Text
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { CopyIcon } from "@chakra-ui/icons";
import { FaHome, FaFileAlt, FaCode, FaEnvelope } from "react-icons/fa";

const ContactModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { t } = useTranslation();
    const { colorMode } = useColorMode();
    
    // Esquema de colores
    const accentColor = colorMode === "dark" ? "teal.300" : "teal.600";
    const modalBg = colorMode === "dark" ? "gray.800" : "white";
    const modalText = colorMode === "dark" ? "white" : "gray.800";

    return (
        <>
            <Tooltip 
                label={t("contact")}
                aria-label="Contact tooltip"
                hasArrow
            >
                <Button
                    onClick={onOpen}
                    variant="ghost"
                    color="currentColor"
                    size="md"
                    p={2}
                    _hover={{ 
                        backgroundColor: accentColor, 
                        color: colorMode === "dark" ? "white" : "white"
                    }}
                    borderRadius="full"
                >
                    <Icon as={FaEnvelope} boxSize={5} />
                </Button>
            </Tooltip>
            
            <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
                <ModalOverlay backdropFilter="blur(4px)" />
                <ModalContent 
                    backgroundColor={modalBg} 
                    color={modalText}
                    borderRadius="xl"
                    boxShadow="xl"
                >
                    <ModalHeader 
                        fontSize="xl" 
                        borderBottomWidth="1px" 
                        pb={4}
                        color={accentColor}
                    >
                        {t("contact")}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={6}>
                        <Flex direction="column" gap={4}>
                            <Box>
                                <Text fontWeight="semibold" mb={2}>Telegram:</Text>
                                <Flex align="center">
                                    <Text>https://t.me/arnold2024</Text>
                                    <Button
                                        ml={2}
                                        size="sm"
                                        onClick={() => {
                                            navigator.clipboard.writeText("https://t.me/arnold2024");
                                        }}
                                        leftIcon={<CopyIcon />}
                                        colorScheme="teal"
                                        variant="ghost"
                                    >
                                        {t("copy")}
                                    </Button>
                                </Flex>
                            </Box>
                            <Divider />
                            <Box>
                                <Text fontWeight="semibold" mb={2}>E-mail:</Text>
                                <Flex align="center">
                                    <Text>johndev@jiacode.dev</Text>
                                    <Button
                                        ml={2}
                                        size="sm"
                                        onClick={() => {
                                            navigator.clipboard.writeText("johndev@jiacode.dev");
                                        }}
                                        leftIcon={<CopyIcon />}
                                        colorScheme="teal"
                                        variant="ghost"
                                    >
                                        {t("copy")}
                                    </Button>
                                </Flex>
                            </Box>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="teal" mr={3} onClick={onClose}>
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
    
    // Esquema de colores
    const bgColor = colorMode === "dark" 
        ? "gray.800" 
        : "rgba(200, 200, 205, 0.85)"; // Fondo más grisáceo
    const borderColor = colorMode === "dark" 
        ? "gray.700" 
        : "rgba(120, 120, 130, 0.4)"; // Borde más grisáceo
    const textColor = colorMode === "dark" 
        ? "white" 
        : "gray.700"; // Texto menos contrastante
    const accentColor = colorMode === "dark" 
        ? "teal.300" 
        : "teal.600";
    
    return (
        <Box
            as="nav"
            color={textColor}
            py={3}
            px={4}
            borderBottomWidth="1px"
            borderColor={borderColor}
            bg={bgColor}
            position="relative"
            zIndex={2}
            boxShadow="sm"
            width="100%"
        >
            <Flex 
                maxW="container.lg" 
                mx="auto" 
                justify="space-between" 
                align="center"
            >
                <HStack spacing={6}>
                    <Tooltip 
                        label="Home"
                        aria-label="Home tooltip"
                        hasArrow
                    >
                        <Button
                            as={ReactRouterLink}
                            to="/"
                            variant="ghost"
                            color="currentColor"
                            size="md"
                            p={2}
                            leftIcon={<FaHome />}
                            _hover={{ 
                                backgroundColor: accentColor, 
                                color: colorMode === "dark" ? "white" : "white"
                            }}
                            borderRadius="md"
                        >
                            Home
                        </Button>
                    </Tooltip>
                    
                    <Tooltip 
                        label="Resume"
                        aria-label="Resume tooltip"
                        hasArrow
                    >
                        <Button
                            as={ReactRouterLink}
                            to="/resume"
                            variant="ghost"
                            color="currentColor"
                            size="md"
                            p={2}
                            leftIcon={<FaFileAlt />}
                            _hover={{ 
                                backgroundColor: accentColor, 
                                color: colorMode === "dark" ? "white" : "white"
                            }}
                            borderRadius="md"
                        >
                            CV
                        </Button>
                    </Tooltip>
                    
                    <Tooltip 
                        label="Projects"
                        aria-label="Projects tooltip"
                        hasArrow
                    >
                        <Button
                            as={ReactRouterLink}
                            to="/projects"
                            variant="ghost"
                            color="currentColor"
                            size="md"
                            p={2}
                            leftIcon={<FaCode />}
                            _hover={{ 
                                backgroundColor: accentColor, 
                                color: colorMode === "dark" ? "white" : "white"
                            }}
                            borderRadius="md"
                        >
                            {t("projects")}
                        </Button>
                    </Tooltip>
                    
                    <Tooltip 
                        label="Contact"
                        aria-label="Contact page tooltip"
                        hasArrow
                    >
                        <Button
                            as={ReactRouterLink}
                            to="/contact"
                            variant="ghost"
                            color="currentColor"
                            size="md"
                            p={2}
                            leftIcon={<FaEnvelope />}
                            _hover={{ 
                                backgroundColor: accentColor, 
                                color: colorMode === "dark" ? "white" : "white"
                            }}
                            borderRadius="md"
                        >
                            {t('contactForm.title')}
                        </Button>
                    </Tooltip>
                </HStack>
                
                <ContactModal />
            </Flex>
        </Box>
    );
};

export default Nav;
