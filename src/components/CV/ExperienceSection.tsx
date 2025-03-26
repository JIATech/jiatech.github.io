import React from "react";
import { 
  Box, 
  Text, 
  VStack, 
  HStack, 
  Heading, 
  Divider, 
  useColorMode,
  Badge,
  Icon,
  Flex
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MdWork, MdSchool } from "react-icons/md";
import TimeSince from "../TimeSince";

const period2 = () => {
  return <TimeSince startDate={new Date(2023, 9, 27)} />;
};
interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  timesince?: React.ReactNode;
  description: string;
  skills?: string[];
  icon: React.ElementType;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  organization, 
  period, 
  timesince, 
  description, 
  skills = [],
  icon
}) => {
  const { colorMode } = useColorMode();
  const accentColor = colorMode === "dark" ? "teal.300" : "teal.600";
  const subtleColor = colorMode === "dark" ? "gray.400" : "gray.600";
  const textColor = colorMode === "dark" ? "white" : "gray.700";
  
  return (
    <HStack align="flex-start" spacing={4}>
      <Box 
        position="relative"
        minHeight="150px"
      >
        <Icon 
          as={icon} 
          boxSize={6} 
          color={accentColor} 
          position="absolute"
          top={0}
          left="50%"
          transform="translateX(-50%)"
        />
        <Box 
          position="absolute"
          top="28px"
          bottom={0}
          left="50%"
          transform="translateX(-50%)"
          width="2px"
          bg={accentColor}
          opacity={0.4}
        />
      </Box>
      
      <VStack 
        align="stretch" 
        spacing={2}
        flex={1}
        pb={6}
      >
        <Heading as="h3" size="md" color={accentColor}>{title}</Heading>
        <HStack justify="space-between">
          <Text fontWeight="bold" color={textColor}>{organization}</Text>
          <Text fontSize="sm" color={subtleColor}>{period}</Text>
        </HStack>
        <HStack>
          {timesince && <Text fontSize="sm" color={subtleColor}>{period2()}</Text>}
        </HStack>
        <Text color={textColor}>{description}</Text>
        
        {skills.length > 0 && (
          <Flex wrap="wrap" gap={2} mt={2}>
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                colorScheme="teal" 
                variant={colorMode === "dark" ? "solid" : "subtle"}
              >
                {skill}
              </Badge>
            ))}
          </Flex>
        )}
      </VStack>
    </HStack>
  );
};

const ExperienceSection: React.FC = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  
  // Paleta de colores para la sección
  const bgColor = colorMode === "dark" 
    ? "gray.800" 
    : "rgba(200, 200, 205, 0.9)";
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
      <VStack align="stretch" spacing={6}>
        <Heading as="h2" size="lg" color={accentColor}>{t("experience")}</Heading>
        <Divider />
        
        <VStack align="stretch" spacing={0}>
          <TimelineItem 
            title={t("position1")}
            organization={t("company1")}
            period="2020 - Presente"
            timesince={period2()}
            description={t("description1")}
            skills={[
              t("nodeJs"),
              t("express"),
              t("postgreSQL"),
              t("apiRest"),
              t("jwt")
            ]}
            icon={MdWork}
          />
          
          <TimelineItem 
            title={t("position2")}
            organization={t("company2")}
            period="2018 - 2020"
            description={t("description2")}
            skills={[
              t("java"),
              t("springBoot"),
              t("mySQL"),
              t("docker")
            ]}
            icon={MdWork}
          />
        </VStack>
        
        <Heading as="h2" size="lg" color={accentColor} pt={4}>{t("education")}</Heading>
        <Divider />
        
        <VStack align="stretch" spacing={0}>
          <TimelineItem 
            title={t("degree")}
            organization={t("university")}
            period={t("present")}
            description={t("degreeDescription")}
            skills={[
              t("algorithms"),
              t("softwareArchitecture"),
              t("projectManagement")
            ]}
            icon={MdSchool}
          />
          
          <TimelineItem 
            title={t("certification")}
            organization={t("onlinePlatform")}
            period={t("year2019")}
            description={t("descriptionCertification")}
            skills={[
              t("nodeJs"),
              t("mongoDB"),
              t("microservices")
            ]}
            icon={MdSchool}
          />
        </VStack>
      </VStack>
    </Box>
  );
};

export default ExperienceSection;
