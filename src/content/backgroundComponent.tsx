import { Box, useColorMode } from "@chakra-ui/react";
import React from "react"; // Importar React para acceso a React.ReactNode

// Definiendo props para VideoBackground
interface VideoBackgroundProps {
    children?: React.ReactNode; // `children` puede ser cualquier elemento React
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ children }) => {
    const { colorMode } = useColorMode(); // Obtener el modo de color actual
    return (
        <Box height="100vh" width="100vw" overflow="hidden" position="relative">
            <video
                autoPlay
                loop
                muted
                playsInline // Agrega esto para soporte móvil
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1",
                    filter:
                        colorMode === "dark"
                            ? "blur(8px) grayscale(0.8) brightness(0.7)"
                            : "invert(1) grayscale(0.8) blur(8px)",
                }}
            >
                <source src="/src/assets/video3.mp4" type="video/mp4" />
                Tu navegador no soporta el tag de video.
            </video>
            {children} {/* Renderiza los children pasados al componente */}
        </Box>
    );
};

export default VideoBackground;
