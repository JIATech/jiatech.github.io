import { ReportHandler } from 'web-vitals';

/**
 * Esta función reporta las métricas de rendimiento de la aplicación web (Web Vitals)
 * Incluye métricas importantes como:
 * - FID (First Input Delay): tiempo que tarda la web en responder a la primera interacción del usuario
 * - LCP (Largest Contentful Paint): tiempo que tarda en renderizarse el elemento más grande visible en la ventana
 * - CLS (Cumulative Layout Shift): movimientos inesperados de elementos visibles
 * - FCP (First Contentful Paint): tiempo hasta que se muestra el primer contenido
 * - TTFB (Time to First Byte): tiempo que tarda el navegador en recibir el primer byte del servidor
 */
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
