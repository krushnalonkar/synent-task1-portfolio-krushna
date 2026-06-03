import { FaReact, FaSyncAlt, FaBookOpen, FaServer, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaPalette, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg6 from '../assets/project6.avif';
import project from '../assets/project1.jpg';
import project1 from '../assets/project2.jpg';
import project2 from '../assets/project3.jpg';





export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaReact,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using modern web technologies effectively.',
      color: 'text-purple'
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Designing clean, user-friendly, and visually appealing web experiences for modern users.',
      color: 'text-pink'
    },
    {
      icon: FaBookOpen,
      title: 'Continuous Learning',
      description: 'I continuously learn modern web technologies and enhance my frontend development skills.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'HTML5', 'Tailwind css', 'Bootstrap', 'Javascript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Core java', 'Rest API']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL',]
  },
  {
    title: 'Operating Systems',
    icon: FaServer,
    description: 'Hands-on experience with operating systems for server management and cloud-based deployments.',
    tags: ['Windows', 'Linux', 'Bash', 'Shell']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Selenium', 'Jira', 'Postman']
  }
];



export const projects = [
  {
    title: "Food & Resturant",
    description: "A modern and responsive restaurant website designed for cafés and dining businesses.",
    image: project,
    tech: ["HTML", "CSS", "Javascript", "Stripe"],
    icons: [FaReact, FaNodeJs , FaDatabase , FaStripe],
    demo: "https://krushnalonkar.github.io/my-static-website/",
    code: "https://github.com/krushnalonkar/my-static-website.git",
  },
  {
    title: "Fresh & Organic Foods",
    description: "A responsive static website developed to display a range of natural farm products and daily essentials.",
    image: project1,
    tech: ["HTML5", "Javascript", "CSS",],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://krushnalonkar.github.io/Fresh-Organic-Foods/",
    code: "https://github.com/krushnalonkar/Fresh-Organic-Foods.git",
  },
  {
    title: "Fitness Tracker",
    description: "A responsive frontend gym website designed for owners to showcase services and trainers.",
    image: projectImg3,
    tech: ["HTML", "CSS", "MySQL", "PHP", "JS"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "EmailJS Service"],
    icons: [FaReact, FaCloud],
    demo: "https://krushnalonkar.github.io/portfolio-website/",
    code: "https://github.com/krushnalonkar/portfolio-website.git",
  },
  {
    title: "CURD Operation Reactjs",
    description: "A full-featured CRUD (Create, Read, Update, Delete) application built using React and Axios. This project demonstrates API integration.",
    image: project2,
    tech: ["ReactJS", "axios (API Integration)", "CSS",],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "https://krushnalonkar.github.io/CURD-OPRATION/",
    code: "https://github.com/krushnalonkar/CURD-OPRATION.git",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Master of Computer Application",
    company: "Anantrao Pawar College of Engineering and Research Parvati Pune",
    duration: "2023 - 2025",
    description:
      "During my postgraduate studies I Gained strong foundation in software development, databases, cloud computing, and system design principles.",
    color: "purple"
  },
  {
    role: "BSc Computer Science",
    company: "New Arts Commerce and Science College of Shevgaon",
    duration: "2020 - 2023",
    description:
      "During my undergraduate degree, I gained knowledge in DBMS, mathematics, statistics, electronics, and programming fundamentals.",
    color: "pink"
  },
  {
    role: "SSC Higher Secondary Certificate",
    company: "Abasaheb Kakade Junior College of Shevgaon",
    duration: "2019 - 2020",
    description:
      "Chose Computer Science with PCM in 12th, initiating my continuous academic journey in technology and software development.",
    color: "blue"
  }
];
