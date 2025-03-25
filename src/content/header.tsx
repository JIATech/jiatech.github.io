import React from "react";
import { 
    Box, 
    useColorMode, 
    Flex, 
    HStack, 
    Avatar, 
    Heading, 
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
    Image,
    Container,
    Divider
} from "@chakra-ui/react";
import ToggleDarkMode from "../Toggle.tsx";
import LanguageSelector from "./langComponent.tsx";
import { SelfWritingText } from "./selfWritingText";

const Header: React.FC = () => {
    const { colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    // Define phrases for the self-writing effect
    const phrases1 = ["Juan Ignacio Arnaboldi"];
    const phrases2 = ["Backend Developer"];

    // Estilos según el tema
    const bgColor = colorMode === "dark" 
        ? "gray.800" 
        : "rgba(200, 200, 205, 0.85)";
    const textColor = colorMode === "dark" 
        ? "white" 
        : "gray.700";
    const accentColor = colorMode === "dark" 
        ? "teal.300" 
        : "teal.600";
    const borderColor = colorMode === "dark" 
        ? "gray.700" 
        : "rgba(120, 120, 130, 0.4)";
    
    return (
        <Box
            as="header"
            bg={bgColor}
            color={textColor}
            borderBottom="1px"
            borderColor={borderColor}
            py={3}
            px={4}
            position="relative"
            width="100%"
        >
            <Container maxW="container.lg">
                <Flex 
                    justifyContent="space-between" 
                    alignItems="center" 
                    width="100%"
                >
                    {/* Left section - Profile and Title */}
                    <Flex alignItems="center" gap={4}>
                        <Avatar
                            name="Juan Ignacio Arnaboldi"
                            src="../../assets/profile2.jpeg"
                            size="lg"
                            onClick={onOpen}
                            _hover={{ 
                                cursor: "pointer",
                                transform: "scale(1.05)",
                                transition: "all 0.3s ease"
                            }}
                            border={`2px solid ${accentColor}`}
                        />
                        
                        <Box>
                            <Heading 
                                as="h1" 
                                size="md" 
                                fontFamily="monospace"
                                color={accentColor}
                            >
                                <SelfWritingText
                                    phrases={phrases1}
                                    erase={false}
                                    cursor={false}
                                />
                            </Heading>
                            
                            <Text 
                                fontSize="sm" 
                                fontFamily="monospace"
                                color={textColor}
                            >
                                <SelfWritingText
                                    phrases={phrases2}
                                    erase={false}
                                    cursor={true}
                                />
                            </Text>
                        </Box>
                    </Flex>
                    
                    {/* Right section - Language and Theme */}
                    <HStack spacing={4}>
                        <LanguageSelector />
                        <Divider orientation="vertical" height="20px" />
                        <ToggleDarkMode />
                    </HStack>
                </Flex>
            </Container>
            
            {/* Profile Image Modal */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
                <ModalOverlay backdropFilter="blur(8px)" />
                <ModalContent bg="transparent" shadow="none">
                    <ModalBody p={0}>
                        <Image
                            src="../../assets/profile2.jpeg"
                            alt="Juan Ignacio Arnaboldi"
                            borderRadius="lg"
                            width="100%"
                            height="auto"
                            objectFit="cover"
                            border={`3px solid ${accentColor}`}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Header;
