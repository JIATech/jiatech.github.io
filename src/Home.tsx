import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { Grid, GridItem, SlideFade, useColorMode, Box } from "@chakra-ui/react";
import Title from "./content/title";
import Header from "./content/header";
import Nav from "./content/nav";
import Footer from "./content/footer";
import VideoBackground from "./content/backgroundComponent";
import { useOutlet } from "react-router-dom";

const Home = () => {
    const { colorMode } = useColorMode();
    const outlet = useOutlet();
    return (
        <SlideFade in={true} delay={0.5}>
            <>
                <VideoBackground>
                    <Box overflowX="auto">
                        <Grid
                            templateRows={{
                                base: "12% 6%",
                                lg: "20% 6% auto 20%",
                            }} // Alto de header, title, contenido principal y footer
                            templateColumns="20vh auto" // Ancho de nav y main
                            templateAreas={`"header header"
                            "nav title"
                            "nav main"
                            "nav footer"`} // Áreas definidas
                            gap={0}
                            minW="100vh"
                            h="100vh"
                            margin={{ base: "0", lg: "0 25vh" }}
                            className="content-overlay"
                            backgroundColor={
                                colorMode === "dark"
                                    ? "rgba(0,0,0,0)"
                                    : "rgba(0,0,0,0.40)"
                            }
                        >
                            <GridItem
                                w="100%"
                                h="100%"
                                area="header"
                                border={"2px"}
                                borderColor={
                                    colorMode === "dark" ? "white" : "black"
                                }
                                backgroundColor={
                                    colorMode === "dark"
                                        ? "rgba(0,0,0,0)"
                                        : "rgba(0,0,0,0.7)"
                                }
                            >
                                <Header />
                            </GridItem>
                            <GridItem
                                w="100%"
                                h="100%"
                                area="nav"
                                border={"2px"}
                                borderColor={
                                    colorMode === "dark" ? "white" : "black"
                                }
                                borderRight={"none"}
                                borderTop={"none"}
                                backgroundColor={
                                    colorMode === "dark"
                                        ? "rgba(0,0,0,0)"
                                        : "rgba(0,0,0,0.7)"
                                }
                            >
                                <Nav />
                            </GridItem>
                            <GridItem
                                w="100%"
                                h="100%"
                                area="title"
                                border={"2px"}
                                borderTop={"none"}
                                borderBottom={"none"}
                                backgroundColor={
                                    colorMode === "dark"
                                        ? "rgba(0,0,0,0)"
                                        : "rgba(0,0,0,0.7)"
                                }
                                fontSize={{ base: "1.5rem", lg: "2rem" }}
                            >
                                <Title />
                            </GridItem>
                            <GridItem
                                w="100%"
                                h="100%"
                                area="main"
                                overflowY={"auto"}
                                borderTop={"none"}
                                border={"2px"}
                                borderColor={
                                    colorMode === "dark" ? "white" : "black"
                                }
                                backgroundColor={
                                    colorMode === "dark"
                                        ? "rgba(0,0,0,0)"
                                        : "rgba(0,0,0,0.7)"
                                }
                            >
                                <I18nextProvider i18n={i18n}>
                                    {outlet}
                                </I18nextProvider>
                            </GridItem>
                            <GridItem
                                w="100%"
                                h="100%"
                                area="footer"
                                border={"2px"}
                                borderColor={
                                    colorMode === "dark" ? "white" : "black"
                                }
                                borderTop={"none"}
                                backgroundColor={
                                    colorMode === "dark"
                                        ? "rgba(0,0,0,0)"
                                        : "rgba(0,0,0,0.7)"
                                }
                            >
                                <Footer />
                            </GridItem>
                        </Grid>
                    </Box>
                </VideoBackground>
            </>
        </SlideFade>
    );
};

export default Home;
