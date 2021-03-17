export default interface Publication {
  title: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  technologies: string[];
  image: string;
}
