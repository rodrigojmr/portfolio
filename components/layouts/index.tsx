import { ChakraProvider, extendTheme, theme } from '@chakra-ui/react';
import Container from 'components/layouts/container';
import React, { FC } from 'react';

const customTheme = extendTheme({
  ...theme,
  config: {
    useSystemColorMode: true
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none'
        }
      }
    }
  },
  fonts: {
    ...theme.fonts,
    heading: "'Inter', serif",
    body: "'Fira Sans', sans-serif",
    mono: 'Menlo, Monaco, Consolas, Courier New, monospace'
  }
});

const Layout: FC = ({ children }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Container>{children}</Container>
    </ChakraProvider>
  );
};

export default Layout;
