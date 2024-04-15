import { useColorMode, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [opacity, setOpacity] = useState(1);

    const handleClick = () => {
        // Iniciar la transición reduciendo la opacidad
        setOpacity(0);
        setTimeout(() => {
            // Cambiar el modo de color una vez que la opacidad es 0
            toggleColorMode();
            // Restablecer la opacidad después de un breve retraso para permitir la transición
            setOpacity(1);
        }, 100); // Asegúrate de que este tiempo coincida con tu transición de opacidad
    };

    return (
        <Button
            title="Toggle dark mode"
            onPointerDown={handleClick}
            position="fixed"
            top={2}
            left={2}
            style={{
                opacity: opacity,
                transition: "opacity 100ms ease-in-out",
            }}
            zIndex="tooltip"
        >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
}
