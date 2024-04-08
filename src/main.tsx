import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "../LanguageContext.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import '../i18n'
import Home from "./Home.tsx";
import "./index.css";
import { MicrofrontendSPA, MicrofrontendSvelte, MicrofrontendVue, HtmlCssExample } from "./routes/root.tsx";
import ProjectsContent from "./content/projects.tsx";
import Main from "./content/mainContent.tsx";

const router = createBrowserRouter([{ 
    path: "/", 
    element: <Home />,
    children: [
        { path: "/", element: <Main /> },
        { path: "/projects", element: <ProjectsContent /> },
    ]
}, {
    path: "/spa",
    element: <MicrofrontendSPA />
}, {
    path: "/svelte",
    element: <MicrofrontendSvelte />
}, {
    path: "/vue",
    element: <MicrofrontendVue />
}, {
    path: "/htmlcss",
    element: <HtmlCssExample />
}
]);

export default router;

const theme = extendTheme({
    breakpoints: {
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "2xl": "96em",
        custom1: "120em",
    },
    styles: {
        global: {
            "html, body": {
                transitionProperty:
                    "backgroundColor, borderColor, color, fill, stroke",
                transitionDuration: "2s",
                transitionTimingFunction: "ease-out",
            },
        },
    },
    components: {
        Avatar: {
            sizes: {
                md: {
                    w: "48px",
                    h: "48px",
                    fontSize: "24px",
                },
                "2xl": {
                    w: "300px",
                    h: "300px",
                    fontSize: "48px",
                },
            },
        },
        ModalBody: {
            sizes: {
                "2xl": {
                    w: "300px",
                    h: "300px",
                },
            },
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <LanguageProvider>
                <RouterProvider router={router} />
            </LanguageProvider>
        </ChakraProvider>
    </React.StrictMode>
);
