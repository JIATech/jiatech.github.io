import { Grid, GridItem, Box, SimpleGrid, Card, CardHeader } from "@chakra-ui/react";
import { Heading, Button, CardBody, CardFooter, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ProjectsContent = () => {
    const { colorMode } = useColorMode();
    const { t } = useTranslation();
    return (
        <GridItem
            w="100%"
            h="100%"
            borderTop={"none"}
            area="main"
            overflowY={"auto"}
        >
            <Grid
                templateColumns="repeat(3, 1fr)"
                gap={4}
                color={colorMode === "dark" ? "black" : "white"}
            >
                <GridItem>
                    <Card
                        backgroundColor={
                            colorMode === "dark"
                                ? "rgba(0,0,0,0)"
                                : "rgba(0,0,0,0)"
                        }
                        color={colorMode === "dark" ? "white" : "white"}
                        border={"none"}
                        shadow={"none"}
                    >
                        <CardHeader>
                            <Heading as="h2" size="lg" fontFamily={"monospace"}
                            >React Front Page</Heading>
                        </CardHeader>
                        <CardBody>
                            <SimpleGrid columns={2} spacing={10}>
                                <Box as="span" fontFamily={"monospace"}
                                >React Front Page with a lot of Lorem in it</Box>
                                <Image src="../../assets/lorem.png" />
                            </SimpleGrid>
                        </CardBody>
                        <CardFooter>
                            <Button onClick={() => window.open("https://jiatech.github.io/lorem-react-app.github.io/")}>
                                {t("vermas")}
                            </Button>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card
                        backgroundColor={
                            colorMode === "dark"
                                ? "rgba(0,0,0,0)"
                                : "rgba(0,0,0,0)"
                        }
                        color={colorMode === "dark" ? "white" : "white"}
                        border={"none"}
                        shadow={"none"}
                    >
                        <CardHeader>
                            <Heading>Proyect 2</Heading>
                        </CardHeader>
                        <CardBody>
                            <SimpleGrid columns={2} spacing={10}>
                                <Box>Description</Box>
                                <Box>Image</Box>
                            </SimpleGrid>
                        </CardBody>
                        <CardFooter>
                            <Button>{t("vermas")}</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem>
                    <Card
                        backgroundColor={
                            colorMode === "dark"
                                ? "rgba(0,0,0,0)"
                                : "rgba(0,0,0,0)"
                        }
                        color={colorMode === "dark" ? "white" : "white"}
                        border={"none"}
                        shadow={"none"}
                    >
                        <CardHeader>
                            <Heading>Proyect 3</Heading>
                        </CardHeader>
                        <CardBody>
                            <SimpleGrid columns={2} spacing={10}>
                                <Box>Description</Box>
                                <Box>Image</Box>
                            </SimpleGrid>
                        </CardBody>
                        <CardFooter>
                            <Button>{t("vermas")}</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </Grid>
        </GridItem>
    );
}

export default ProjectsContent;