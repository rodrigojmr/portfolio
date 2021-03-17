import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  useColorMode
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import { MdMail } from 'react-icons/md';

const About: FC = () => {
  const { colorMode } = useColorMode();
  const buttonBgColor = {
    light: 'gray.200',
    dark: 'var(--chakra-colors-whiteAlpha-200)'
  };

  return (
    <Container maxW="80rem">
      <Center>
        <Heading as="h2">About</Heading>
      </Center>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={[4, 12, 16]}
        py={[4, 12, 16, 24]}
      >
        <Box>
          <Heading as="h1" fontSize="6xl" fontFamily="body" mb={4}>
            Hi, I'm{' '}
            <Box
              as="span"
              bgGradient="linear-gradient(45deg, #4aacc2,
                #00a1cb,
                #0095d5,
              #0087df,
              #0078e6,
              #0066e9,
              #0051e5,
              #0d32d9)"
              bgClip="text"
            >
              Rodrigo
            </Box>
          </Heading>
          <Text fontSize="xl" mb={4}>
            I'm a <Box as="b">Frontend Developer</Box> from{' '}
            <b>Lisbon, Portugal</b> with a passion for <b>learning</b> and
            constant <b>improvement.</b>
          </Text>
          <HStack spacing={2}>
            <Button
              as="a"
              href="#contact"
              bg="#0078e6"
              color="white"
              _hover={{ bg: '#0087df' }}
              leftIcon={<MdMail />}
            >
              Get In Touch
            </Button>
          </HStack>
        </Box>
        <Box p={2}>
          <Image
            src="/images/common/avatar.png"
            alt="Rodrigo Moura"
            height={350}
            width={350}
            quality={100}
            priority
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default About;
