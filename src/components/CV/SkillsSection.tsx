import React from "react";
import { 
  Box, 
  Text, 
  VStack, 
  Heading, 
  Divider, 
  useColorMode,
  Grid,
  GridItem,
  Progress,
  Flex,
  Icon,
  Tooltip
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaDocker, FaAws, FaReact, FaVuejs, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiExpress, SiNestjs, SiPostgresql, SiMongodb, SiRedis } from "react-icons/si";

interface SkillProps {
  name: string;
  level: number;
  icon: React.ElementType;
  category: string;
}

const skills: SkillProps[] = [
  // Backend Core
  { name: "Node.js", level: 90, icon: FaNodeJs, category: "backend" },
  { name: "Express", level: 85, icon: SiExpress, category: "backend" },
  { name: "NestJS", level: 80, icon: SiNestjs, category: "backend" },
  { name: "TypeScript", level: 85, icon: SiTypescript, category: "backend" },
  { name: "JavaScript", level: 90, icon: SiJavascript, category: "backend" },
  { name: "Java", level: 75, icon: FaJava, category: "backend" },
  { name: "Python", level: 70, icon: FaPython, category: "backend" },
  
  // Databases
  { name: "PostgreSQL", level: 85, icon: SiPostgresql, category: "database" },
  { name: "MongoDB", level: 80, icon: SiMongodb, category: "database" },
  { name: "Redis", level: 75, icon: SiRedis, category: "database" },
  
  // DevOps
  { name: "Docker", level: 80, icon: FaDocker, category: "devops" },
  { name: "AWS", level: 70, icon: FaAws, category: "devops" },
  
  // Frontend (conocimiento complementario)
  { name: "React", level: 75, icon: FaReact, category: "frontend" },
  { name: "Vue.js", level: 65, icon: FaVuejs, category: "frontend" },
];

const SkillItem: React.FC<SkillProps> = ({ name, level, icon, category }) => {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "dark" ? "white" : "gray.700"; // Texto menos contrastante
  const progressTrackColor = colorMode === "dark" ? "gray.700" : "gray.300"; // Track más suave
  
  // Color según categoría
  const getCategoryColor = () => {
    switch(category) {
      case "backend":
        return "teal";
      case "database":
        return "blue"; 
      case "devops":
        return "purple";
      case "frontend":
        return "orange";
      default:
        return "gray";
    }
  };
  
  return (
    <Box py={2}>
      <Flex align="center" mb={2}>
        <Icon as={icon} color={`${getCategoryColor()}.${colorMode === "dark" ? "300" : "600"}`} boxSize={5} mr={2} />
        <Text fontWeight="medium" color={textColor}>{name}</Text>
        <Text ml="auto" fontSize="sm" color={textColor}>{level}%</Text>
      </Flex>
      <Tooltip label={`${level}% - ${category.charAt(0).toUpperCase() + category.slice(1)}`}>
        <Progress 
          value={level} 
          colorScheme={getCategoryColor()} 
          size="sm" 
          borderRadius="full" 
          bg={progressTrackColor}
        />
      </Tooltip>
    </Box>
  );
};

const SkillsSection: React.FC = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  
  // Paleta de colores que funciona tanto en modo claro como oscuro
  const bgColor = colorMode === "dark" 
    ? "gray.800" 
    : "rgba(200, 200, 205, 0.9)"; // Fondo grisáceo
  const subtleColor = colorMode === "dark" 
    ? "gray.400" 
    : "gray.600";
  
  // Agrupar habilidades por categoría
  const backendSkills = skills.filter(skill => skill.category === "backend");
  const databaseSkills = skills.filter(skill => skill.category === "database");
  const devopsSkills = skills.filter(skill => skill.category === "devops");
  const frontendSkills = skills.filter(skill => skill.category === "frontend");
  
  return (
    <Box 
      bg={bgColor} 
      p={6} 
      borderRadius="lg"
      boxShadow="sm"
      mb={6}
    >
      <VStack align="stretch" spacing={6}>
        <Heading as="h2" size="lg" color="teal.600">{t("skills")}</Heading>
        <Text color={subtleColor}>
          Backend Developer con enfoque en arquitecturas escalables y conocimientos full-stack
        </Text>
        <Divider />
        
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
          <GridItem>
            <Heading as="h3" size="md" color="teal.600" mb={4}>
              Backend Core
            </Heading>
            {backendSkills.map((skill, index) => (
              <SkillItem 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                icon={skill.icon} 
                category={skill.category} 
              />
            ))}
          </GridItem>
          
          <GridItem>
            <Heading as="h3" size="md" color="teal.600" mb={4}>
              Bases de Datos
            </Heading>
            {databaseSkills.map((skill, index) => (
              <SkillItem 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                icon={skill.icon} 
                category={skill.category} 
              />
            ))}
            
            <Heading as="h3" size="md" color="teal.600" mb={4} mt={6}>
              DevOps
            </Heading>
            {devopsSkills.map((skill, index) => (
              <SkillItem 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                icon={skill.icon} 
                category={skill.category} 
              />
            ))}
            
            <Heading as="h3" size="md" color="teal.600" mb={4} mt={6}>
              Frontend (Complementario)
            </Heading>
            {frontendSkills.map((skill, index) => (
              <SkillItem 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                icon={skill.icon} 
                category={skill.category} 
              />
            ))}
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default SkillsSection;
