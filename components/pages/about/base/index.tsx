import {
  Box,
  Grid,
  Heading,
  HStack,
  Link,
  Text,
  useColorMode,
  VStack
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const Page: FC = () => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: 'white', dark: 'gray.900' };
  const cardColor = { light: 'gray.900', dark: 'white' };

  const headingNode = () => {
    return (
      <HStack spacing={4} alignItems="center">
        <Box
          bg={cardColor[colorMode]}
          color={cardBgColor[colorMode]}
          rounded="full"
          p={1}
          w={100}
          h={100}
        >
          <Image
            src="/images/common/avatar.png"
            alt="Rodrigo Moura"
            height={100}
            width={100}
            quality={100}
            priority
          />
        </Box>
        <Box>
          <VStack spacing={2} align="left">
            <Heading as="h1" size="xl">
              Rodrigo Moura
            </Heading>
            <Text>A little bit about me</Text>
          </VStack>
        </Box>
      </HStack>
    );
  };

  const bioDescriptionNode = () => {
    return <></>;
  };

  const socialLinksNode = () => {
    return (
      <VStack spacing={4} align="left">
        <VStack spacing={8} align="left">
          <Heading as="h2" size="lg">
            Social profiles
          </Heading>
          <Text>You can find me in the following social websites:</Text>
        </VStack>
        <Box d="flex" alignItems="center">
          <HStack spacing={4}>
            <Link
              py={2}
              px={4}
              href="https://github.com/rodrigojmr"
              rounded="md"
              bg="#333"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoGithub} /> <Text>Github</Text>
              </HStack>
            </Link>
            <Link
              py={2}
              px={4}
              href="https://www.linkedin.com/in/rodrigo-jorge-moura/"
              rounded="md"
              bg="#0e76a8"
              color="#fff"
              fontWeight="bold"
              isExternal
            >
              <HStack spacing={2} alignItems="center">
                <Box as={IoLogoLinkedin} /> <Text>LinkedIn</Text>
              </HStack>
            </Link>
          </HStack>
        </Box>
      </VStack>
    );
  };

  return (
    <Box maxW="2xl" mx="auto" px={4} py={8}>
      <Grid templateColumns="1fr">
        <Box as="section">
          <VStack spacing={8} align="left">
            {headingNode()}
            {bioDescriptionNode()}
            {socialLinksNode()}
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default Page;
