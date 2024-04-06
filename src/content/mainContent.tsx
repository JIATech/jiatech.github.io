import CV_1 from "./cv-1";
import CV_2 from "./cv-2";
import CV_3 from "./cv-3";
import { Grid, GridItem } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const Main = () => {
    const { colorMode } = useColorMode();
    return (
        <GridItem
            w="100%"
            h="100%"
            borderTop={"none"}
            area="main"
            overflowY={"auto"}
        >
            <GridItem fontSize={"xl"}>
                <Grid
                    templateColumns="repeat(3, 1fr)"
                    gap={4}
                    color={colorMode === "dark" ? "black" : "white"}
                >
                    <GridItem>
                        <CV_1 />
                    </GridItem>
                    <GridItem>
                        <CV_2 />
                    </GridItem>
                    <GridItem>
                        <CV_3 />
                    </GridItem>
                </Grid>
            </GridItem>
        </GridItem>
    );
};

export default Main;