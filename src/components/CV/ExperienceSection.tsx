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

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills?: string[];
  icon: React.ElementType;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  organization, 
  period, 
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
            description="Desarrollo de sistemas internos para la gestión ministerial, implementando soluciones backend robustas con Node.js, Express y bases de datos SQL. Integración con servicios externos y APIs gubernamentales."
            skills={["Node.js", "Express", "PostgreSQL", "API REST", "JWT"]}
            icon={MdWork}
          />
          
          <TimelineItem 
            title="Analista Programador"
            organization="Consultora Tecnológica"
            period="2018 - 2020"
            description="Desarrollo de soluciones a medida para clientes del sector privado. Implementación de APIs y servicios backend. Mantenimiento de bases de datos y optimización de rendimiento."
            skills={["Java", "Spring Boot", "MySQL", "Docker"]}
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
            description="Formación en desarrollo de software, algoritmos, estructuras de datos, arquitectura de sistemas y gestión de proyectos tecnológicos."
            skills={["Algoritmos", "Arquitectura de Software", "Gestión de Proyectos"]}
            icon={MdSchool}
          />
          
          <TimelineItem 
            title="Certificación en Desarrollo Backend"
            organization="Plataforma de Educación Online"
            period="2019"
            description="Especialización en desarrollo de APIs, microservicios y bases de datos."
            skills={["Node.js", "MongoDB", "Microservicios"]}
            icon={MdSchool}
          />
        </VStack>
      </VStack>
    </Box>
  );
};

export default ExperienceSection;
