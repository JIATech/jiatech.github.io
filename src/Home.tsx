import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { Grid, GridItem, SlideFade, useColorMode, Box } from "@chakra-ui/react";
import Header from "./content/header";
import Nav from "./content/nav";
import Footer from "./content/footer";
import VideoBackground from "./content/backgroundComponent";
import { useOutlet, useLocation } from "react-router-dom";
import SEO from "./components/SEO";

const Home = () => {
    const { colorMode } = useColorMode();
    const outlet = useOutlet();
    const location = useLocation();
    
    // Generar URL canónica basada en la ruta actual
    const currentPath = location.pathname === "/" ? "" : location.pathname;
    const canonicalUrl = `https://portfolio.jiacode.dev${currentPath}`;
    
    // Determinar título y descripción basados en la ruta
    let pageTitle = "Inicio";
    let pageDescription = "Portfolio de desarrollo y soluciones tecnológicas";
    
    if (location.pathname === "/projects") {
        pageTitle = "Proyectos";
        pageDescription = "Explorar los proyectos y trabajos realizados";
    }
    
    return (
        <I18nextProvider i18n={i18n}>
            <SlideFade in={true} delay={0.5}>
                <>
                    <SEO 
                        title={pageTitle} 
                        description={pageDescription} 
                        url={canonicalUrl}
                        keywords="desarrollo web, portfolio, proyectos, tecnología"
                    />
                    <VideoBackground>
                        <Box overflowX="auto">
                            <Grid
                                templateRows={{
                                    base: "auto auto 1fr auto",
                                    lg: "auto auto 1fr auto",
                                }}
                                templateColumns="1fr"
                                templateAreas={`"header"
                                "nav"
                                "main"
                                "footer"`}
                                gap={0}
                                minW="100%"
                                h="100vh"
                                margin="0"
                                className="content-overlay"
                                backgroundColor={
                                    colorMode === "dark"
                                        ? "rgba(0,0,0,0)"
                                        : "rgba(200, 200, 205, 0.85)"
                                }
                            >
                                <GridItem
                                    w="100%"
                                    h="100%"
                                    area="header"
                                    border="2px"
                                    borderColor={
                                        colorMode === "dark" ? "white" : "rgba(60, 60, 60, 0.5)"
                                    }
                                    backgroundColor={
                                        colorMode === "dark"
                                            ? "rgba(0,0,0,0)"
                                            : "rgba(200, 200, 205, 0.85)"
                                    }
                                >
                                    <Header />
                                </GridItem>
                                <GridItem
                                    w="100%"
                                    h="auto"
                                    area="nav"
                                    border="2px"
                                    borderColor={
                                        colorMode === "dark" ? "white" : "rgba(60, 60, 60, 0.5)"
                                    }
                                    borderTop="none"
                                    backgroundColor={
                                        colorMode === "dark"
                                            ? "rgba(0,0,0,0)"
                                            : "rgba(200, 200, 205, 0.85)"
                                    }
                                >
                                    <Nav />
                                </GridItem>
                                <GridItem
                                    w="100%"
                                    h="100%"
                                    area="main"
                                    border="2px"
                                    borderColor={
                                        colorMode === "dark" ? "white" : "rgba(60, 60, 60, 0.5)"
                                    }
                                    borderTop="none"
                                    pt={6}
                                    pb={6}
                                    overflow="auto"
                                    backgroundColor={
                                        colorMode === "dark"
                                            ? "rgba(0,0,0,0)"
                                            : "rgba(200, 200, 205, 0.8)"
                                    }
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="flex-start"
                                >
                                    <Box
                                        width={{ base: "90%", md: "80%", lg: "70%" }}
                                        maxWidth="1200px"
                                    >
                                        {outlet}
                                    </Box>
                                </GridItem>
                                <GridItem
                                    w="100%"
                                    h="auto"
                                    area="footer"
                                    border="2px"
                                    borderColor={
                                        colorMode === "dark" ? "white" : "rgba(60, 60, 60, 0.5)"
                                    }
                                    borderTop="none"
                                    backgroundColor={
                                        colorMode === "dark"
                                            ? "rgba(0,0,0,0)"
                                            : "rgba(200, 200, 205, 0.85)"
                                    }
                                >
                                    <Footer />
                                </GridItem>
                            </Grid>
                        </Box>
                    </VideoBackground>
                </>
            </SlideFade>
        </I18nextProvider>
    );
};

export default Home;
