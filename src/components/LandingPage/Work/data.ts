import creeo from "../../../assets/creeo-1.webp";
import commehub from "../../../assets/commehub.webp";
import bleuwater from "../../../assets/bleuwater.webp";

export interface Project {
  image: string;
  name: string;
  description: string;
  projectType: ProjectType;
  link: string;
  bg: string;
  color: string;
  label: string;
}

export type ProjectType =
  | "Personal Project"
  | "In Development"
  | "Live Website"
  | "Live Website";

export const projects: Project[] = [
  {
    image: creeo,
    name: "Creeo.",
    description: "Helping NFT creators Generate art, and deploy NFTs",
    link: "/work/creeo",
    projectType: "In Development",
    bg: "rgba(242, 153, 74, 0.21)",
    color: "rgba(242, 153, 74, 1)",
    label: "ui/ux",
  },
  {
    image: commehub,
    name: "Commehub.",
    description: "Helping small businesses source and group purchase  goods",
    link: "/work/commehub",
    projectType: "Personal Project",
    bg: "rgba(88, 59, 232, 0.21)",
    color: "rgba(88, 59, 232, 1)",
    label: "ui/ux",
  },
  {
    image: bleuwater,
    name: "Bleuwater.",
    description: "Helping small businesses source and group purchase  goods",
    link: "/work/bleuwater",
    projectType: "Live Website",
    bg: "rgba(255, 255, 255, 1)",
    color: "rgba(18, 18, 18, 1)",
    label: "ui/ux",
  },
];
