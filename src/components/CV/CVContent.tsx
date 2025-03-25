import React from "react";
import { 
  Container, 
  VStack, 
  useColorMode,
  Box,
  Heading,
  Text
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ProfileSection from "./ProfileSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";

const CVContent: React.FC<{ language?: string }> = ({ language }) => {
  const { colorMode } = useColorMode();
  const { t, i18n } = useTranslation();
  
  // Cambiar idioma si se proporciona
  React.useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);
  
  // Paleta de colores que funciona tanto en modo claro como oscuro
  const bgColor = colorMode === "dark" ? "gray.900" : "rgba(190, 190, 195, 0.8)";
  const accentColor = colorMode === "dark" ? "teal.300" : "teal.600";
  
  return (
    <Box bg={bgColor} pt={8} pb={12}>
      <Container maxW="container.lg">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" mb={4}>
            <Heading as="h1" size="2xl" color={accentColor} mb={2}>
              {t("cv.title")}
            </Heading>
            <Text fontSize="lg">
              {t("cv.subtitle")}
            </Text>
          </Box>
          
          <ProfileSection />
          <ExperienceSection />
          <SkillsSection />
        </VStack>
      </Container>
    </Box>
  );
};

export default CVContent;
