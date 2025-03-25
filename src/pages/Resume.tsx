import React from "react";
import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import CVContent from "../components/CV/CVContent";
import SEOWrapper from "../routes/SEOWrapper";

const Resume: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  return (
    <SEOWrapper 
      title="Juan Ignacio Arnaboldi | Resume"
      description="Backend Developer with holistic vision specialized in creating scalable and robust solutions."
      keywords="backend developer, node.js, typescript, database, API, web development, La Plata, Argentina"
    >
      <Box py={4}>
        <CVContent language={currentLanguage} />
      </Box>
    </SEOWrapper>
  );
};

export default Resume;
