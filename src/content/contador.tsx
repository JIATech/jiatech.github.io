import React from "react";

// Links estadísticas https://www.contadorvisitasgratis.com/geozoom.php?c=n78lr2lx86r81xsc7p9pn4ubgwsxelu2&base=counter11

const Contador: React.FC = () => {
    return (
        <>
            <div id="sfcn78lr2lx86r81xsc7p9pn4ubgwsxelu2" z-index="999"></div>
            <script
                type="text/javascript"
                src="https://counter11.optistats.ovh/private/counter.js?c=n78lr2lx86r81xsc7p9pn4ubgwsxelu2&down=async"
                async
            ></script>
            <noscript>
                <a
                    href="https://www.contadorvisitasgratis.com"
                    title="contador de paginas web"
                >
                    <img
                        src="https://counter11.optistats.ovh/private/contadorvisitasgratis.php?c=n78lr2lx86r81xsc7p9pn4ubgwsxelu2"
                        title="contador de paginas web"
                        alt="contador de paginas web"
                    />
                </a>
            </noscript>
        </>
    );
};

export default Contador;
