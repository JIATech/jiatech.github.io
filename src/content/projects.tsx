import { Grid, GridItem, Box, SimpleGrid, Card, CardHeader } from "@chakra-ui/react";
import { Heading, Button, CardBody, CardFooter } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const ProjectsContent = () => {
    const { colorMode } = useColorMode();
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
                            <Heading>Proyecto 1</Heading>
                        </CardHeader>
                        <CardBody>
                            <SimpleGrid columns={2} spacing={10}>
                                <Box>Descripción</Box>
                                <Box>Imagen</Box>
                            </SimpleGrid>
                        </CardBody>
                        <CardFooter>
                            <Button>Ver más</Button>
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
                            <Heading>Proyecto 2</Heading>
                        </CardHeader>
                        <CardBody>
                            <SimpleGrid columns={2} spacing={10}>
                                <Box>Descripción</Box>
                                <Box>Imagen</Box>
                            </SimpleGrid>
                        </CardBody>
                        <CardFooter>
                            <Button>Ver más</Button>
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
                            <Heading>Proyecto 3</Heading>
                        </CardHeader>
                        <CardBody>
                            <SimpleGrid columns={2} spacing={10}>
                                <Box>Descripción</Box>
                                <Box>Imagen</Box>
                            </SimpleGrid>
                        </CardBody>
                        <CardFooter>
                            <Button>Ver más</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </Grid>
        </GridItem>
    );
}

export default ProjectsContent;