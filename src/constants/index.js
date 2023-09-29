import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
  database,
  firebase,
  mysql,
  nextJs,fiverr,proximateSol,ilmoirfan,
  animedia,
  maxco,
  stock,
  eventify,
  mlm,
  ateco,
  skainet,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Developer",
    icon: database,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "NextJs",
    icon: nextJs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
 
];

const experiences = [
  {
    title: "React.js Developer Freelancer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "green",
    date: "April 2020 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with client and their teams including designers and product managers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer Intern",
    company_name: "Proximate Solutions",
    icon: proximateSol,
    iconBg: "#E6DEDD",
    date: "April 2023 - July 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Gain alot of experience in problem solving and maintaining the code structures",
      "Participating in code reviews and ensure the proper testing of the applications",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Ilm O Irfan Technologies",
    icon: ilmoirfan,
    iconBg: "#ffff",
    date: " September 2023 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Attending Meetings with different teams and working on the new startup idea projects",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IPTV Channel (MAXCO.TV)",
    description:
      "Web-based platform that allows users to search channels from various providers, providing a convenient and efficient solution for channel and hosting needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      
    ],
    image: maxco,
    source_code_link: "https://github.com/Arsalanbashir831/MTV",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "SpringBoots Java",
        color: "pink-text-gradient",
      },
      {
        name: "MYSQL",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Arsalanbashir831/Jobscribes",
  },
  {
    name: "ATECO Welding Inspector Database Managment",
    description:
      "A comprehensive web application which mantains the ATECO companies welding inspector data and their generated reports",
    tags: [
      {
        name: "Ejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoose",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ateco,
    source_code_link: "https://github.com/Arsalanbashir831/Saudia",
  },
  {
    name: "Skainet.ai Mobile",
    description:
      "Skainet.ai is the mobile application which is integrated with the gpt 3.5 and 4 apis and skainet application have embeded AI which will generate any thing for the user's group chat and the user have to buy the subscription to use that AI",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: skainet,
    source_code_link: "https://github.com/huzaifa003/prototype",
  },
  {
    name: "Eventify Mobile",
    description:
      "Eventify is the mobile application which will manage all the events occuring across the world.Google maps api is integrated to show the location of the events and user can also view the location of their followers and also join the events with them",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: eventify,
    source_code_link: "https://github.com/Arsalanbashir831/EventifyUpdate",
  },

  {
    name: "Stock Trading Dashboard",
    description:
      "Stock Trading Dashboard will manage all the trading analytics. The app using the rest api to show the real time data from the hosted backend server.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RestApis",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
     
    ],
    image: stock,
    source_code_link: "https://github.com/Arsalanbashir831/Dashboard",
  },
  {
    name: "Multi Level Marketing",
    description:
      "Multilevel marketing (MLM) is a business model that involves unsalaried, hierarchical sales teams selling products directly to consumers in conjunction with recruiting additional company sales representatives. Multilevel marketing may also be referred to as referral marketing or network marketing.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "RestApis",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
     
    ],
    image: mlm,
    source_code_link: "https://github.com/Arsalanbashir831/MLM_WEP_APP",
  },
  {
    name: "Animedia",
    description:
      "A social media application which is a mixture of the twitter and instagram. It uses all the concepts of context api and redux etc",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
     
      
     
    ],
    image: animedia,
    source_code_link: "https://github.com/Arsalanbashir831/Animedia",
  },
];

export { services, technologies, experiences, testimonials, projects };
