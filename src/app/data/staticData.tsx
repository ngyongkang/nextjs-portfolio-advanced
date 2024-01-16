import { CardProps, SkillProps, ProjectProps } from "./types";

/* 
    Variable to contain icon with color.
    Felt like I wasted time because the icons came with colors 
    just didn't know how to fix it.
*/
export const iconsAndColor = {
  javascript: "devicon-javascript-plain text-yellow-500",
  html5: "devicon-html5-plain text-orange-500",
  css3: "devicon-css3-plain text-cyan-500",
  java: "devicon-java-plain text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-white",
  mysql: "devicon-mysql-plain text-blue-300",
  mongodb: "devicon-mongodb-plain text-green-500",
  postgresql: "devicon-postgresql-plain text-blue-300",
  microsoftsqlserver:
    "devicon-microsoftsqlserver-plain text-transparent bg-clip-text bg-gradient-to-b from-red-800 to-white",
  github: "devicon-github-plain text-gray-800",
  gitlab: "devicon-gitlab-plain text-orange-500",
  linux: "devicon-linux-plain text-black",
  windows: "devicon-windows8-plain text-cyan-500",
  react: "devicon-react-plain text-cyan-500",
  nextjs: "devicon-nextjs-plain text-black",
  angularjs: "devicon-angularjs-plain text-red-500",
  nodejs: "devicon-nodejs-plain text-lime-500",
};

// Array variable to hold details on skills
export const skills: SkillProps[] = [
  {
    direction: "t",
    icon: iconsAndColor.javascript,
    proficiency: "80%",
  },
  {
    direction: "t",
    icon: iconsAndColor.html5,
    proficiency: "80%",
  },
  {
    direction: "t",
    icon: iconsAndColor.css3,
    proficiency: "60%",
  },
  {
    direction: "t",
    icon: iconsAndColor.java,
    proficiency: "80%",
  },
  {
    direction: "t",
    icon: iconsAndColor.mysql,
    proficiency: "80%",
  },
  {
    direction: "t",
    icon: iconsAndColor.mongodb,
    proficiency: "60%",
  },
  {
    direction: "t",
    icon: iconsAndColor.postgresql,
    proficiency: "10%",
  },
  {
    direction: "t",
    icon: iconsAndColor.microsoftsqlserver,
    proficiency: "10%",
  },
  {
    direction: "b",
    icon: iconsAndColor.github,
    proficiency: "80%",
  },
  {
    direction: "b",
    icon: iconsAndColor.gitlab,
    proficiency: "80%",
  },
  {
    direction: "b",
    icon: iconsAndColor.linux,
    proficiency: "80%",
  },
  {
    direction: "b",
    icon: iconsAndColor.windows,
    proficiency: "80%",
  },
  {
    direction: "b",
    icon: iconsAndColor.react,
    proficiency: "60%",
  },
  {
    direction: "b",
    icon: iconsAndColor.nextjs,
    proficiency: "50%",
  },
  {
    direction: "b",
    icon: iconsAndColor.angularjs,
    proficiency: "20%",
  },
  {
    direction: "b",
    icon: iconsAndColor.nodejs,
    proficiency: "80%",
  },
];

// Array variable to hold details on experiences
export const experiences: CardProps[] = [
  {
    company: "ST-Engineering",
    jobTitle: "Software Engineer",
    techUsed: [
      { icon: iconsAndColor.javascript },
      { icon: iconsAndColor.html5 },
      { icon: iconsAndColor.css3 },
    ],
    dates: ["Feb 2022", "Dec 2023"],
    points: [
      "Built a Devs Op platform to perform CICD for department.",
      "Did a government project and perform various software integration.",
    ],
  },
  {
    company: "ST-Engineering",
    jobTitle: "Software Engineer",
    techUsed: [
      { icon: iconsAndColor.javascript },
      { icon: iconsAndColor.html5 },
      { icon: iconsAndColor.css3 },
    ],
    dates: ["Feb 2022", "Dec 2023"],
    points: [
      "Built a Devs Op platform to perform CICD for department.",
      "Did a government project and perform various software integration.",
    ],
  },
  {
    company: "ST-Engineering",
    jobTitle: "Software Engineer",
    techUsed: [
      { icon: iconsAndColor.javascript },
      { icon: iconsAndColor.html5 },
      { icon: iconsAndColor.css3 },
    ],
    dates: ["Feb 2022", "Dec 2023"],
    points: [
      "Built a Devs Op platform to perform CICD for department.",
      "Did a government project and perform various software integration.",
    ],
  },
];

export const projects: ProjectProps[] = [
  {
    imgUrl: "/projects/1.png",
    title: "Next JS Portfolio",
    description:
      "First next js application made, was built in Javascript and used Tailwind CSS for styling. Set up a email server as well using my personal domain.",
  },
  {
    imgUrl: "/projects/1.png",
    title: "Next JS Portfolio",
    description:
      "First next js application made, was built in Javascript and used Tailwind CSS for styling. Set up a email server as well using my personal domain.",
  },
  {
    imgUrl: "/projects/1.png",
    title: "Next JS Portfolio",
    description:
      "First next js application made, was built in Javascript and used Tailwind CSS for styling. Set up a email server as well using my personal domain.",
  },
  {
    imgUrl: "/projects/1.png",
    title: "Next JS Portfolio",
    description:
      "First next js application made, was built in Javascript and used Tailwind CSS for styling. Set up a email server as well using my personal domain.",
  },
  {
    imgUrl: "/projects/1.png",
    title: "Next JS Portfolio",
    description:
      "First next js application made, was built in Javascript and used Tailwind CSS for styling. Set up a email server as well using my personal domain.",
  },
];
