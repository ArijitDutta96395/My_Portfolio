import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  img1,
  img2,
  img3,
} from "../assets";
import {
  ciacon,
  IBM,
  IndianInstitiuteofInternship,
  Indorama,
  pwc,
  xchip,
} from "../assets/company";

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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI and ML Domains",
    icon: mobile,
  },
  {
    title: "IOT and VLSI Researcher",
    icon: backend,
  },
  {
    title: "JAVA & Python Developer",
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
    name: "TypeScript",
    icon: typescript,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Summer Training Intern",
    company_name: "INDORAMA INDIA PVT. LTD",
    icon: Indorama,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Assisting in installation, calibration, and maintenance of industrial instruments such as pressure gauges, thermocouples, and transmitters.",
      "Gaining hands-on experience with PLC and DCS systems for plant monitoring and control.",
      "Supporting troubleshooting and preventive maintenance activities to ensure system reliability.",
      "Collaborating with senior engineers to understand industrial automation workflows and safety standards.",
    ],
  },
  {
    title: "ML Intern",
    company_name: "IBM Skills Built",
    icon: IBM,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Developed a Convolutional Neural Network (CNN) model to classify images of plastic waste into distinct categories.",
      "Implemented data preprocessing techniques such as normalization and augmentation to improve model performance.",
      "Applied optimization strategies to enhance classification accuracy and scalability.",
      "Worked on real-world applicability of the model to support recycling and waste management efficiency.",
    ],
  },
  {
    title: "Launchpad Trainee",
    company_name: "PWC ACCELERATION CENTRES IN INDIA LAUNCHPAD PROGRAM 3.0",
    icon: pwc,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - June 2025",
    points: [
      "Gained hands-on experience in RDBMS, IT Fundamentals, DevOps, Java, and Web Designing to solve real-world business challenges.",
      "Participated in an intensive mentorship and acceleration program focused on scaling startups and developing business solutions.",
      "Collaborated with industry experts to enhance technical and business problem-solving skills.",
      "Developed a deeper understanding of business strategy, innovation, and growth.",
    ],
  },
  {
    title: "ML and Full-Stack Intern",
    company_name: "Indian Institute of Internship",
    icon: IndianInstitiuteofInternship,
    iconBg: "#383E56",
    date: "Jan 2025 - May 2025",
    points: [
      "Worked on Machine Learning and Full Stack Web Development with focus on exploratory data analysis (EDA) and predictive modeling using KNIME.",
      "Conducted market research by analyzing latest industry trends and implementing Salesforce-based solutions.",
      "Implemented two independent projects: one on Full Stack Web Development and another on Machine Learning Models.",
      "Gained hands-on experience with JavaScript, NodeJS, Web APIs, MySQL, and algorithmic problem-solving.",
    ],
  },
  {
    title: "Protocol-Aware Anomaly Detection in IoT Networks",
    company_name: "IEEE CIACON 2025",
    icon: ciacon,
    iconBg: "#E6DEDD",
    date: "May 2025 - July 2025",
    points: [
      // Protocol-Aware Anomaly Detection in IoT Networks
      "Developed an anomaly detection system for IoT networks using DySAT-based Temporal Graph Neural Networks (GNNs), achieving 99% detection accuracy.",
      "Modeled structural, temporal, and protocol-aware patterns for real-time intrusion detection in smart and industrial IoT systems.",
      "Presented research at IEEE CIACON 2025, showcasing innovative approaches to IoT security.",
      "Optimized model performance for low-latency deployment in real-world IoT environments.",
    ],
  },
  {
    title: "VLSI Intern",
    company_name: "XChip Technologies, Bangalore",
    icon: xchip,
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Designing and implementing a low-speed peripheral interface using SPI protocol.",
      "Gaining hands-on experience in RTL design and Verilog-based hardware description.",
      "Performing simulation and functional verification of digital designs using Verilog and UVM.",
      "Learning industry practices in VLSI design, verification, and documentation.",
    ],
  },
];

const positionsOfResponsibility = [
  {
    testimonial:
      "Conducted over 20 workshops on IoT, Robotics, Web Development, DSA etc. effectively teaching 500+ students and enhancing their technical skills also managed workshop, ensuring smooth execution and engagement.",
    name: "IETE HIT SF",
    designation: "Technical Head",
    company: "",
    image: "https://mrem.ac.in/wp-content/uploads/2024/11/IETE-LOGO.png",
  },
  {
    testimonial:
      "Played a key role in organizing workshops on trending echnologies like Artificial Intelligence, Machine Learning, Cloud Computing, and Web, UI/UX Development. Designed engaging visual content, managed the technical aspects of the events, ensuring the smooth execution of hands-on sessions.",
    name: "Google Developers Group",
    designation: "Mentor & Graphics Head",
    company: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMY0tg6QRNZFr5lmQacyCi0xRGXK-0YY8QDHYktkTcPLxY2Prf3jPSF7SAHmhF8LIKDW0&usqp=CAU",
  },
  {
    testimonial:
      "Collaborated with local communities and stakeholders to promote educational initiatives and foster a supportive learning environment tailored to the needs of underprivileged children in rural areas.",
    name: "Samarpan",
    designation: "Teacher",
    company: "",
    image:
      "https://media.licdn.com/dms/image/v2/C560BAQHGBUnEGsakDQ/company-logo_200_200/company-logo_200_200/0/1657611565750/samarpanhit_logo?e=2147483647&v=beta&t=xb5dFJHDjcrRDQtqf-KexXyPAZ0Ha6gZyoW4cbriPDQ",
  },
];

const projects = [
  {
    name: "ML Resume Sifter",
    description:
      "A full-stack resume screening application that allows users to upload resumes, automatically predicts the job category using a trained ML model (TF-IDF), and stores results in a database with full CRUD operations also recommends courses based on skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "uvicorn",
        color: "pink-text-gradient",
      },
    ],
    image: img1,
    source_code_link:
      "https://github.com/ArijitDutta96395/Resume-Screening-App/",
  },
  {
    name: "Sand Rover",
    description:
      "A compact, semi-autonomous robot tailored for difficult terrain. It uses high-torque motors, custom made 11 channnel controller, and a durable frame, making it ideal for agriculture, disaster zones, and construction sites. Achieved 31st Position in KSHITIJ 2025 at IIT Kharagpur also featured in IIT KGPClicks.",
    tags: [
      {
        name: "IoT",
        color: "blue-text-gradient",
      },
      {
        name: "Robotics",
        color: "green-text-gradient",
      },
      {
        name: "Communication",
        color: "pink-text-gradient",
      },
    ],
    image: img2,
    source_code_link: "https://github.com/ArijitDutta96395/Kshitij-2025-bots",
  },
  {
    name: "Workforce Admin",
    description:
      "A Full Stack Employee Management System built with React (Vite), Node.js, Express, and MySQL. It provides secure authentication, responsive UI which is powered by JWT security and RESTful APIs it ensures seamless management with a modern design and smooth navigation.",
    tags: [
      {
        name: "reacts",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mysql2",
        color: "pink-text-gradient",
      },
    ],
    image: img3,
    source_code_link: "https://github.com/ArijitDutta96395/Full-stack",
  },
  
];

export {
  services,
  technologies,
  experiences,
  positionsOfResponsibility,
  projects,
};