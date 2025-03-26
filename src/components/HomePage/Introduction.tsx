import React from "react";
import { 
  Box, 
  Container, 
  VStack, 
  Heading, 
  Text, 
  Image, 
  useColorMode,
  Icon,
  Button,
  Link,
  Flex,
  Divider
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Introduction: React.FC = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  
  // Esquema de colores
  const bgColor = colorMode === "dark" 
    ? "gray.900" 
    : "rgba(190, 190, 195, 0.8)"; // Fondo grisáceo
  const cardBg = colorMode === "dark" 
    ? "gray.800" 
    : "rgba(200, 200, 205, 0.9)"; // Tarjeta con un gris más claro
  const textColor = colorMode === "dark" 
    ? "white" 
    : "gray.700"; // Texto menos contrastante
  const accentColor = colorMode === "dark" 
    ? "teal.300" 
    : "teal.600";
  const subtleColor = colorMode === "dark" 
    ? "gray.400" 
    : "gray.600";
  
  return (
    <Box 
      bg={bgColor} 
      py={12}
      minHeight="calc(100vh - 100px)"
      display="flex"
      alignItems="center"
    >
      <Container maxW="container.md">
        <VStack spacing={8} align="stretch">
          {/* Tarjeta principal con foto y nombre */}
          <Box 
            bg={cardBg} 
            borderRadius="xl" 
            overflow="hidden"
            boxShadow="lg"
            textAlign="center"
          >
            <Flex 
              direction={{ base: "column", md: "row" }}
              align="center"
            >
              <Box 
                width={{ base: "100%", md: "40%" }} 
                p={6}
              >
                <Box 
                  width="180px" 
                  height="180px" 
                  borderRadius="full" 
                  overflow="hidden"
                  mx="auto"
                  borderWidth="4px"
                  borderColor={accentColor}
                >
                  <Image 
                    src="../../assets/profile.jpeg" 
                    alt="Juan Ignacio Arnaboldi"
                    fallbackSrc="https://via.placeholder.com/180?text=JIA"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                </Box>
              </Box>
              
              <Box 
                width={{ base: "100%", md: "60%" }} 
                p={6}
                textAlign={{ base: "center", md: "left" }}
              >
                <Heading as="h1" size="2xl" color={textColor} mb={2}>
                  Juan Ignacio Arnaboldi
                </Heading>
                <Text fontSize="xl" fontWeight="medium" color={accentColor} mb={4}>
                  Backend Developer
                </Text>
                <Text fontSize="md" color={subtleColor} mb={6}>
                  La Plata, Buenos Aires, Argentina
                </Text>
                
                <Flex 
                  justify={{ base: "center", md: "flex-start" }}
                  gap={4}
                >
                  <Link href="https://github.com/JIATech" isExternal>
                    <Icon as={FaGithub} boxSize={6} color={accentColor} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/juan-arnaboldi/" isExternal>
                    <Icon as={FaLinkedin} boxSize={6} color={accentColor} />
                  </Link>
                  <Link href="mailto:johndev@jiacode.dev">
                    <Icon as={FaEnvelope} boxSize={6} color={accentColor} />
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Box>
          
          {/* Sección de introducción */}
          <Box 
            bg={cardBg} 
            p={8}
            borderRadius="xl"
            boxShadow="md"
          >
            <Heading as="h2" size="lg" color={accentColor} mb={4}>
              {t("home.intro.title")}
            </Heading>
            <Divider mb={5} />
            <Text fontSize="lg" color={textColor} lineHeight="tall">
              {t("home.intro.paragraph1")}
            </Text>
            <Text fontSize="lg" color={textColor} mt={4} lineHeight="tall">
              {t("home.intro.paragraph2")}
            </Text>
            
            <Flex mt={8} justify="center" gap={4}>
              <Button 
                as={RouterLink} 
                to="/resume" 
                colorScheme="teal" 
                leftIcon={<FaCode />}
                size="lg"
              >
                {t("home.intro.resume_button")}
              </Button>
              <Button 
                as={RouterLink} 
                to="/projects" 
                variant="outline" 
                colorScheme="teal"
                size="lg"
              >
                {t("home.intro.projects_button")}
              </Button>
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Introduction;
