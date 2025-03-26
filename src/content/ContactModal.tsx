import React from 'react';
import { 
    Box,
    Button,
    Divider,
    Flex,
    Icon,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    Tooltip,
    useColorMode,
    useDisclosure
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { useTranslation } from 'react-i18next';
import { FaEnvelope } from "react-icons/fa";

const ContactModal: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { t } = useTranslation();
    const { colorMode } = useColorMode();
    
    // Color scheme
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

export default ContactModal;
