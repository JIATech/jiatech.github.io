# JIATech Website

## Descripción
Sitio web oficial de JIATech, desarrollado como una Single Page Application (SPA) moderna utilizando React, TypeScript y Vite. El sitio cuenta con soporte multilingüe (español e inglés) y una interfaz de usuario moderna basada en Chakra UI.

## Características
- 🚀 Construido con React 18 y TypeScript
- 📦 Vite como build tool para desarrollo rápido
- 🎨 Chakra UI para diseño moderno y accesible
- 🌐 Soporte multilingüe con i18next
- 🧩 Ejemplos de integración con microfrontends
- Optimización SEO y metadatos
- Análisis de rendimiento con Web Vitals

## Requisitos Previos
- Node.js (v18 o superior)
- PNPM (v9.14 o superior)

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jiatech/jiatech.github.io.git
cd jiatech.github.io

# Instalar dependencias
pnpm install
```

## Desarrollo

```bash
# Iniciar servidor de desarrollo
pnpm dev
```

El servidor de desarrollo estará disponible en [http://localhost:5173](http://localhost:5173)

## Construcción

```bash
# Crear build para producción
pnpm build
```

## Despliegue

El proyecto está configurado para desplegarse en GitHub Pages:

```bash
# Desplegar a GitHub Pages
pnpm deploy
```

## Estructura del Proyecto

```
jiatech.github.io/
├── public/                # Recursos estáticos
│   ├── assets/            # Imágenes y otros recursos
│   └── locales/           # Archivos de traducción (i18n)
│       ├── en/            # Inglés
│       └── es/            # Español
├── src/                   # Código fuente
│   ├── components/        # Componentes reutilizables
│   │   └── SEO.tsx        # Componente para gestión de metadatos SEO
│   ├── content/           # Contenido de las páginas
│   ├── routes/            # Definición de rutas
│   │   └── SEOWrapper.tsx # Wrapper SEO para rutas secundarias
│   ├── utils/
│   │   └── reportWebVitals.ts # Utilidad para análisis de rendimiento
│   ├── Home.tsx           # Componente principal
│   └── main.tsx           # Punto de entrada
└── ...                    # Archivos de configuración
```

## Tecnologías Utilizadas

- **Frontend**: React, TypeScript, Chakra UI
- **Routing**: React Router
- **Internacionalización**: i18next
- **Bundler**: Vite
- **Despliegue**: GitHub Pages
- **SEO**: React Helmet Async
- **Análisis de Rendimiento**: Web Vitals

## SEO y Metadatos

El proyecto incluye optimización para motores de búsqueda mediante:

- Componente `SEO.tsx` reutilizable basado en react-helmet-async
- `SEOWrapper.tsx` para facilitar la implementación en rutas secundarias
- Generación automática de URLs canónicas
- Meta tags para Open Graph y Twitter Cards
- Dominio principal configurado como `portfolio.jiacode.dev`

## Análisis de Rendimiento

La aplicación utiliza Web Vitals para monitorear métricas importantes de rendimiento:

- FID (First Input Delay): tiempo de respuesta a la primera interacción
- LCP (Largest Contentful Paint): tiempo de renderizado del elemento más grande
- CLS (Cumulative Layout Shift): estabilidad visual
- FCP (First Contentful Paint): tiempo hasta mostrar el primer contenido
- TTFB (Time to First Byte): tiempo de respuesta del servidor

Los datos se pueden enviar a Google Analytics u otro servicio de análisis para su seguimiento.

## Licencia

Ver archivo [LICENSE](./LICENSE) para más detalles.