import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-refresh';
import svgrPlugin from 'vite-plugin-svgr'; // Para importar SVG como componentes React

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Habilita soporte para React con fast refresh
    svgrPlugin(), // Habilita la importación de archivos SVG como componentes React
    // Aquí puedes agregar más plugins según necesites
  ],
});
