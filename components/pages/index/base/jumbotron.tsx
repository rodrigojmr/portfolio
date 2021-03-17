import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  theme,
  useColorMode
} from '@chakra-ui/react';
import Blob from 'components/blob/blob';
import Image from 'next/image';
import React, { FC } from 'react';
import { MdMail } from 'react-icons/md';
import { IoMdDocument } from 'react-icons/io';

const Jumbotron: FC = () => {
  const { colorMode } = useColorMode();
  const buttonBgColor = {
    light: 'gray.200',
    dark: 'var(--chakra-colors-whiteAlpha-200)'
  };

  return (
    <Container maxW="80rem">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={[4, 12, 16]}
        py={[4, 12, 16, 24]}
      >
        <Box mr={2}>
          <Heading as="h1" fontSize="6xl" mb={4}>
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
            <b>Lisbon, Portugal</b> with a passion for learning and constant
            improvement.
          </Text>
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
          <Button
            ml={2}
            as="a"
            target="_blank"
            href="/data/Rodrigo Moura CV.pdf"
            variant="ghost"
            color="white"
            bg={theme.colors.gray[800]}
            leftIcon={<IoMdDocument />}
          >
            My Resume
          </Button>
        </Box>
        <Box p={2} position="relative">
          <Image
            src="/images/common/avatar.png"
            alt="Rodrigo Moura"
            height={350}
            width={350}
            quality={100}
            priority
          />
          {/* <Box position="absolute" height="120%" width="120%" top={0} left={0}>
            <Blob />
          </Box> */}
        </Box>
      </Flex>
    </Container>
  );
};

export default Jumbotron;
