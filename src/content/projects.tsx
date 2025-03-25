import { Grid, GridItem, Card, CardHeader } from "@chakra-ui/react";
import { Heading, CardBody, Text, Center, VStack, Icon } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { AddIcon } from "@chakra-ui/icons";
import { Outlet } from "react-router-dom";
import SEOWrapper from "../routes/SEOWrapper";

// Componente para proyecto vacío
const EmptyProject = ({ number }: { number: number }) => {
    const { colorMode } = useColorMode();
    const { t } = useTranslation();
    
    return (
        <Card
            backgroundColor={colorMode === "dark" ? "rgba(45,55,72,0.3)" : "rgba(226,232,240,0.5)"}
            color={colorMode === "dark" ? "white" : "black"}
            border={"1px dashed"}
            borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
            shadow={"sm"}
            h="100%"
            transition="all 0.3s"
            _hover={{
                transform: "translateY(-5px)",
                shadow: "md",
            }}
        >
            <CardHeader>
                <Heading as="h2" size="md" fontFamily={"monospace"}>
                    {t("projectPlaceholder")} #{number}
                </Heading>
            </CardHeader>
            <CardBody>
                <Center h="150px">
                    <VStack spacing={4}>
                        <Icon as={AddIcon} w={10} h={10} opacity={0.5} />
                        <Text color={colorMode === "dark" ? "gray.400" : "gray.500"} fontStyle="italic">
                            {t("projectComingSoon")}
                        </Text>
                    </VStack>
                </Center>
            </CardBody>
        </Card>
    );
};

const ProjectsContent = () => {
    const { colorMode } = useColorMode();
    const { t } = useTranslation();
    
    return (
        <SEOWrapper 
            title={t("projects")} 
            description={t("projectsDescription")} 
            keywords="portfolio, proyectos, desarrollo web, frontend, react"
        >
            <GridItem
                w="100%"
                h="100%"
                borderTop={"none"}
                area="main"
                overflowY={"auto"}
                p={4}
            >
                <Heading as="h1" size="xl" mb={6} fontFamily="monospace">
                    {t("projects")}
                </Heading>
                
                <Text mb={8}>
                    {t("projectsIntro")}
                </Text>
                
                <Grid
                    templateColumns={{
                        base: "1fr",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)"
                    }}
                    gap={6}
                    color={colorMode === "dark" ? "white" : "black"}
                >
                    <GridItem>
                        <EmptyProject number={1} />
                    </GridItem>
                    <GridItem>
                        <EmptyProject number={2} />
                    </GridItem>
                    <GridItem>
                        <EmptyProject number={3} />
                    </GridItem>
                    <GridItem>
                        <EmptyProject number={4} />
                    </GridItem>
                    <GridItem>
                        <EmptyProject number={5} />
                    </GridItem>
                    <GridItem>
                        <EmptyProject number={6} />
                    </GridItem>
                </Grid>
                <Outlet />
            </GridItem>
        </SEOWrapper>
    );
}

export default ProjectsContent;