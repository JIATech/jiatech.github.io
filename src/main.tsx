import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "../LanguageProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { HelmetProvider } from "react-helmet-async";
import "../i18n";
import Home from "./Home.tsx";
import "./index.css";
import {
    MicrofrontendSPA,
    MicrofrontendSvelte,
    MicrofrontendVue,
    HtmlCssExample,
} from "./routes/root.tsx";
import ProjectsContent from "./content/projects.tsx";
import Introduction from "./components/HomePage/Introduction.tsx";
import Resume from "./pages/Resume.tsx";
import Contact from "./pages/Contact.tsx";
import reportWebVitals from "./utils/reportWebVitals";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            { path: "/", element: <Introduction /> },
            { path: "/projects", element: <ProjectsContent /> },
            { path: "/resume", element: <Resume /> },
            { path: "/contact", element: <Contact /> },
        ],
    },
    {
        path: "/spa",
        element: <MicrofrontendSPA />,
    },
    {
        path: "/svelte",
        element: <MicrofrontendSvelte />,
    },
    {
        path: "/vue",
        element: <MicrofrontendVue />,
    },
    {
        path: "/htmlcss",
        element: <HtmlCssExample />,
    },
]);

export default router;

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
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
        <HelmetProvider>
            <ChakraProvider theme={theme}>
                <LanguageProvider>
                    <RouterProvider router={router} />
                </LanguageProvider>
            </ChakraProvider>
        </HelmetProvider>
    </React.StrictMode>
);

// Reportar métricas de rendimiento web
reportWebVitals(() => {
    // Aquí puedes enviar los datos a un servicio de análisis
    // Si tienes Google Analytics configurado, puedes enviar allí las métricas:
    // window.gtag('event', metrics.name, {
    //   value: Math.round(metrics.value * 1000),
    //   metric_id: metrics.id,
    //   metric_value: metrics.value,
    //   metric_delta: metrics.delta,
    // });
});
