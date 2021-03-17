import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  theme,
  useColorMode,
  VStack
} from '@chakra-ui/react';
import React, { FC, FormEvent, useState } from 'react';
import { IoLogoGithub, IoMdArrowForward } from 'react-icons/io';
import { CgScreen } from 'react-icons/cg';
import IProject from 'types/project';

interface Props {
  projects: IProject[];
}

const Projects: FC<Props> = ({ projects = [] }) => {
  const { colorMode } = useColorMode();
  const cardBgColor = { light: 'white', dark: 'gray.800' };
  const cardColor = { light: 'gray.900', dark: 'white' };

  const titleNode = (title: string) => {
    return (
      <Heading as="h3" size="md" letterSpacing="tight" lineHeight="tall">
        {title}
      </Heading>
    );
  };

  const descriptionNode = (description: string) => {
    return <Text fontSize="sm">{description}</Text>;
  };

  const techNode = (techArray: string[]) => {
    return (
      <Flex wrap="wrap">
        {techArray.map((tech, index) => (
          <Box
            _notLast={{ marginRight: '.5rem' }}
            mb=".5rem"
            rounded="base"
            fontSize="xs"
            key={index}
            p={1}
            px={2}
            backgroundColor={theme.colors.blue[600]}
          >
            {tech.toUpperCase()}
          </Box>
        ))}
      </Flex>
    );
  };

  const ctaNode = () => {
    return (
      <Button rightIcon={<IoMdArrowForward />} fontSize="sm">
        View project
      </Button>
    );
  };

  const projectsNode = () => {
    if (!projects.length) {
      return (
        <VStack mx="auto" textAlign="center">
          <Image
            src="/images/common/no-items.svg"
            alt="No projects found!"
            size={64}
          />
          <Text>No projects found!</Text>
        </VStack>
      );
    }

    return (
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {projects.map((project: IProject, index: number) => {
          return (
            <Box
              key={index}
              bg={cardBgColor[colorMode]}
              color={cardColor[colorMode]}
              rounded="md"
              shadow="md"
              overflow="hidden"
            >
              <Image src={project.image} />
              <VStack
                px={6}
                py={4}
                spacing={4}
                minH={48}
                justifyContent="space-between"
                align="left"
              >
                <VStack spacing={1} align="left">
                  {titleNode(project.title)}
                  {descriptionNode(project.description)}
                  {techNode(project.technologies)}
                </VStack>
                <HStack spacing={4}>
                  <Button
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener"
                    leftIcon={<CgScreen />}
                  >
                    Live
                  </Button>
                  <Button
                    as="a"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener"
                    leftIcon={<IoLogoGithub />}
                  >
                    Repo
                  </Button>
                </HStack>
              </VStack>
            </Box>
          );
        })}
      </Grid>
    );
  };

  return <>{projectsNode()}</>;
};

export default Projects;
