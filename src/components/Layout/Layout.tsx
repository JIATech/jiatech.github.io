import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../../content/header';
import Nav from '../../content/nav';
import Footer from '../../content/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Nav />
      <Box as="main" minHeight="calc(100vh - 200px)">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
