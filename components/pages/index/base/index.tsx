import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React, { FC } from 'react';
import IArticle from 'types/article';
import IProject from 'types/project';
import IPublication from 'types/publication';
import ProjectsGrid from 'components/layouts/projects';

const Jumbotron = dynamic(
  import(
    /* webpackChunkName: "Jumbotron" */ 'components/pages/index/base/jumbotron'
  )
);
const Articles = dynamic(
  import(/* webpackChunkName: "Articles" */ 'components/layouts/articles')
);
const Projects = dynamic(
  import(
    /* webpackChunkName: "Projects" */ 'components/pages/index/base/projectsList'
  )
);

interface Props {
  articles: (IArticle & IPublication)[];
  projects: IProject[];
}

const Page: FC<Props> = ({ articles = [], projects = [] }) => {
  return (
    <>
      <Box as="section">
        <Jumbotron />
      </Box>
      <Container maxW="80rem" as="section" px={[4, 12, 16]} py={8}>
        <Heading as="h2" mb={12}>
          Projects
        </Heading>
        <ProjectsGrid projects={projects} />
      </Container>
    </>
  );
};

export default Page;
