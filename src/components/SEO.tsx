import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

/**
 * Props para el componente SEO
 */
interface SEOProps {
  /** Título de la página */
  title?: string;
  /** Descripción de la página para los motores de búsqueda */
  description?: string;
  /** Palabras clave separadas por comas */
  keywords?: string;
  /** URL de la imagen para compartir en redes sociales */
  image?: string;
  /** URL canónica de la página */
  url?: string;
  /** Tipo de contenido para Open Graph */
  type?: 'website' | 'article';
}

/**
 * Componente para manejar metadatos SEO en toda la aplicación.
 * Utiliza react-helmet-async para gestionar las etiquetas meta del head.
 */
const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  image = '/logo.png', 
  url = 'https://portfolio.jiacode.dev', 
  type = 'website' 
}) => {
  const { t } = useTranslation();
  
  const defaultTitle = t('seo.defaultTitle', 'JIATech - Soluciones tecnológicas');
  const defaultDescription = t('seo.defaultDescription', 'Soluciones tecnológicas modernas y eficientes para todo tipo de negocio');
  const defaultKeywords = t('seo.defaultKeywords', 'tecnología, desarrollo, soluciones, web, aplicaciones, software');
  
  const siteTitle = title ? `${title} | JIATech` : defaultTitle;
  const siteDescription = description || defaultDescription;
  const siteKeywords = keywords || defaultKeywords;

  // Asegurar que las URLs de imágenes sean absolutas
  const absoluteImageUrl = image.startsWith('http') 
    ? image 
    : `https://portfolio.jiacode.dev${image}`;

  return (
    <Helmet>
      {/* Metadatos básicos */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={absoluteImageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
