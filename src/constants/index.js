import {
  mobile,
  creator,
  web,
  ba,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  hth,
  uh,
  ecommerce,  
  drumkit,
  memorygame,
  threejs,
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
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Business Analyst",
    icon: ba,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "IT and Business Analyst",
    company_name: "HTH Communications",
    icon: hth,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Maintain and improve user interaction on the company's web page by regularly updating web content and contact site",
      "Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Ensure data accuracy by adding and updating data to OSS and CRM systems.",
      "Request telecom plans from AT&T, PWG (T-Mobile), Ericsson, and government programs, such as USAC and NLAD",
    ],
  },
  {
    title: "Intern Software Developer",
    company_name: "HTH Communications",
    icon: hth,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - July 2022",
    points: [
      "Created SQL scripts and utilized data extraction to generate reports on user data usage",
      "Assisted the IT team in coordinating with outsourced partners, including resolving technical issues, fulfillment data requests",
      "Facilitated the enrollment of 100k+ affiliate company users by serving as the liaison between the CSR and IT teams",
      "Participating in projects reviews and providing constructive feedback to Project Owner.",
    ],
  },
  {
    title: "Academic Support Assistant",
    company_name: "University of Houston",
    icon: uh,
    iconBg: "#383E56",
    date: "Jan 2020 - Feb 2022",
    points: [
      "Modernized and maintained the research group's website, utilizing HTML, CSS, and JavaScript to improve user experience and visual design.",
      "Managed computer systems and updated software for all computers in the research group, ensuring its functionality",
      "Collected information and compiled data to write grant reports and proposals, utilizing strong analytical and writing skills to convey technical information effectively",
      "Managed accounts and grant expenses, keeping accurate records of financial transactions",
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
    name: "E-Commerce", 
    description: "Web-based platform that allows users to add them to cart, checkout,and place orders using Stripe payment processing.", 
    tags: [ 
      { 
        name: "react", 
        color: "blue-text-gradient", 
      }, 
      { 
        name: "mongodb", 
        color: "green-text-gradient", 
      }, 
      { 
        name: "express", 
        color: "pink-text-gradient", 
      }, 
      { 
        name: "node", 
        color: "yellow-text-gradient", 
      }, 
      { 
        name: "redux", 
        color: "purple-text-gradient", 
      }, 
    ], 
    image: ecommerce, 
    source_code_link: "https://github.com/quangnphan/mern-stack-ecommerce", },
    {
      name: "DrumKit",
      description: "Web-based drum machine that allows users to create and share their own drum beats.",
      tags: [    
        {
          name: "jQuery",
          color: "blue-text-gradient"
        },
        {
          name: "html",
          color: "green-text-gradient"
        },
        {
          name: "css",
          color: "pink-text-gradient"
        },       
        {
          name: "javascript",
          color: "purple-text-gradient"
        }
      ],
      image: drumkit,
      source_code_link: "https://github.com/Loc-Nguyen-git/drumKit"
    },
    {
      name: "MemoryGame",
      description: "Web-based memory game that allows users to test their memory skills.",
      tags: [    
        {
          name: "jQuery",
          color: "blue-text-gradient"
        },
        {
          name: "html",
          color: "green-text-gradient"
        },
        {
          name: "css",
          color: "pink-text-gradient"
        },       
        {
          name: "javascript",
          color: "purple-text-gradient"
        }
      ],
      image: memorygame,
      source_code_link: "https://github.com/Loc-Nguyen-git/memorygame"
    },
];

export { services, technologies, experiences, testimonials, projects };
