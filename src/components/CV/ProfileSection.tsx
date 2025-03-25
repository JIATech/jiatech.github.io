import React from "react";
import { 
  Box, 
  Text, 
  VStack, 
  HStack, 
  Heading, 
  Divider, 
  useColorMode,
  Icon,
  Flex,
  Link
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MdLocationOn } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ProfileSection: React.FC = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  
  // Paleta de colores que funciona tanto en modo claro como oscuro
  const bgColor = colorMode === "dark" 
    ? "gray.800" 
    : "rgba(200, 200, 205, 0.9)"; // Fondo grisáceo
  const textColor = colorMode === "dark" 
    ? "white" 
    : "gray.700"; // Texto menos contrastante
  const subtleColor = colorMode === "dark" 
    ? "gray.400" 
    : "gray.600";
  const accentColor = colorMode === "dark" 
    ? "teal.300" 
    : "teal.600";
  
  return (
    <Box 
      bg={bgColor} 
      p={6} 
      borderRadius="lg"
      boxShadow="sm"
      mb={6}
    >
      <VStack align="stretch" spacing={4}>
        <HStack justify="space-between" align="center">
          <VStack align="start" spacing={1}>
            <Heading as="h2" size="xl" color={accentColor}>
              Juan Ignacio Arnaboldi
            </Heading>
            <Text fontSize="lg" fontWeight="medium" color={subtleColor}>
              Backend Developer
            </Text>
            <Box mt={3}>
              <HStack>
                <Icon as={HiMail} boxSize={5} color={accentColor} />
                <Link href="mailto:johndev@jiacode.dev" color={textColor} isExternal>
                  johndev@jiacode.dev
                </Link>
              </HStack>
            </Box>
          </VStack>
        </HStack>
        
        <Divider />
        
        <Flex wrap="wrap" justify="space-between" gap={4}>
          <HStack spacing={2}>
            <Icon as={FaBirthdayCake} color={accentColor} />
            <Text color={textColor}>{t("birthdate")}</Text>
          </HStack>
          
          <HStack spacing={2}>
            <Icon as={MdLocationOn} color={accentColor} />
            <Text color={textColor}>La Plata, Buenos Aires, Argentina</Text>
          </HStack>
          
          {/* <HStack spacing={2}>
            <Icon as={MdPhone} color={accentColor} />
            <Text color={textColor}>+54 9 221-690-8850</Text>
          </HStack> */}
        </Flex>
      </VStack>
    </Box>
  );
};

export default ProfileSection;
