import React, { ReactNode } from 'react';
import SEO from '../components/SEO';
import { useLocation } from 'react-router-dom';

interface SEOWrapperProps {
  title: string;
  description: string;
  keywords?: string;
  children: ReactNode;
  type?: 'website' | 'article';
}

/**
 * Componente para envolver páginas secundarias con metadatos SEO
 * Simplifica la implementación de SEO en rutas fuera del componente principal
 */
const SEOWrapper: React.FC<SEOWrapperProps> = ({ 
  title, 
  description, 
  keywords, 
  children, 
  type = 'website'
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const canonicalUrl = `https://portfolio.jiacode.dev${currentPath}`;
  
  return (
    <>
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        url={canonicalUrl}
        type={type}
      />
      {children}
    </>
  );
};

export default SEOWrapper;
