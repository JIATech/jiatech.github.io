import React from 'react';
import { Container, useColorMode } from '@chakra-ui/react'; // Agregar useColorMode
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/Contact/ContactForm';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode(); // Obtener el modo de color actual
  const canonicalUrl = 'https://portfolio.jiacode.dev/contact';

  return (
    <>
      <SEO 
        title={t('contactForm.title')} 
        description={t('contactForm.seoDescription')} 
        url={canonicalUrl}
        keywords="contact, email, portfolio, developer"
      />
      <Container 
        maxW="container.xl" 
        py={12}
        bg={colorMode === 'dark' ? 'gray.800' : 'whiteAlpha.400'} // Fondo según modo
        color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'} // Texto según modo
        borderRadius="md"
        boxShadow="md"
      >
        <ContactForm />
      </Container>
    </>
  );
};

export default Contact;