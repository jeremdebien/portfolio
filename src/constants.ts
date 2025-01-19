import dost from "./assets/images/dost.png";
// import deli from "./assets/images/deli.png";
import clsu from "./assets/images/clsu.png";
// import placeholder from "./assets/images/placeholder.png";


/* Technologies */
import html from "./assets/images/html.webp";
import css from "./assets/images/css.png";
import js from "./assets/images/js.png";
import php from "./assets/images/php.png";
import mysql from "./assets/images/mysql.webp";
import dart from "./assets/images/dart.png";
import firebase from "./assets/images/firebase.png";
import flutterflow from "./assets/images/flutterflow.png";
import flutter from "./assets/images/flutter.png";
import python from "./assets/images/python.png";
import django from "./assets/images/django.png";
import postgre from "./assets/images/postgresql.png";
import redis from "./assets/images/redis.png";
import tailwind from "./assets/images/tailwind.png";
import react from "./assets/images/react.png";
import typescript from "./assets/images/typescript.png";

/* Kusinero Kings */
import kk1 from "./assets/images/kusinero-kings/kk1.png";
import kk2 from "./assets/images/kusinero-kings/kk2.png";
import kk3 from "./assets/images/kusinero-kings/kk3.png";
import kk4 from "./assets/images/kusinero-kings/kk4.png";

/* Photography Portfolio */
import pp1 from "./assets/images/photography-portfolio/pp1.png";
import pp2 from "./assets/images/photography-portfolio/pp2.png";
import pp3 from "./assets/images/photography-portfolio/pp3.png";
import pp4 from "./assets/images/photography-portfolio/pp4.png";

/* Marvelusion */
import mv1 from "./assets/images/marvelusion/mv1.png";
import mv2 from "./assets/images/marvelusion/mv2.png";
import mv3 from "./assets/images/marvelusion/mv3.png";
import mv4 from "./assets/images/marvelusion/mv4.png";
import mv5 from "./assets/images/marvelusion/mv5.png";

/* Project EDU  */
import edu1 from "./assets/images/projectedu/edu1.png";
import edu2 from "./assets/images/projectedu/edu2.png";
import edu3 from "./assets/images/projectedu/edu3.png";
import edu4 from "./assets/images/projectedu/edu4.png";
import edu5 from "./assets/images/projectedu/edu5.png";
import edu6 from "./assets/images/projectedu/edu6.png";
import educover from "./assets/images/projectedu/edu_cover.png";

/* Kule */
import kule from "./assets/images/kule/kule.png";
import kule1 from "./assets/images/kule/kule1.png";
import kule2 from "./assets/images/kule/kule2.png";
import kule3 from "./assets/images/kule/kule3.png";
import kule4 from "./assets/images/kule/kule4.png";
import kule5 from "./assets/images/kule/kule5.png";


/* Harvesteer */
import harvesteer from "./assets/images/harvesteer/harvesteer.png";
import harvesteer1 from "./assets/images/harvesteer/harvesteer1.png";
import harvesteer2 from "./assets/images/harvesteer/harvesteer2.png";
import harvesteer3 from "./assets/images/harvesteer/harvesteer3.png";
import harvesteer4 from "./assets/images/harvesteer/harvesteer4.png";
import harvesteer5 from "./assets/images/harvesteer/harvesteer5.png";
import harvesteer6 from "./assets/images/harvesteer/harvesteer6.png";
import harvesteer7 from "./assets/images/harvesteer/harvesteer7.png";

/* React Portfolio */
import portfolio1 from "./assets/images/portfolio/portfolio1.png";
import portfolio2 from "./assets/images/portfolio/portfolio2.png";
import portfolio3 from "./assets/images/portfolio/portfolio3.png";
import portfolio4 from "./assets/images/portfolio/portfolio4.png";


export const EDUCATION = [
    {
        company: "Central Luzon State University",
        logoUrl: clsu,
        position:"BS Information Technology",
        duration:"Aug 2021 - Present",
        responsibilities:[
            "Developed a Machine Learning-based crop management system (HARVESTEER) using Django REST Framework and Flutter.",
            "Learned relevant technologies and tools for web development, including PHP, Laravel, Vue.js, HTML, CSS, JavaScript, and TypeScript.",
            "Gained expertise in database management, focusing on database design, querying, and optimization.",
            "Proficient in programming languages such as Java, Python, and implementing Object-Oriented Programming (OOP) concepts.",
            "Acquired knowledge of Agile methodologies, including project management frameworks like Scrum.",
            "Learned core principles of software engineering, including the software development life cycle and design patterns.",
            "Developed problem-solving skills in data structures and algorithms for efficient code implementation.",
        ]
    }
]

export const WORK_EXPERIENCE = [
    {
      company: "Project LODI, DOST Central Office-PES-ITD",
      logoUrl: dost,
      position: "System Developer Intern",
      duration: "Jun 2024 - Aug 2022",
      responsibilities: [
        "Developed features for a web application using PHP, Laravel as its framework, and Vue.js.",
        "Implemented PDF generation of reports by collecting and processing relevant data.",
        "Designed and implemented email verification systems for user registration and password recovery functionalities.",
        "Gained hands-on experience in full-stack development and enhanced technical problem-solving skills.",
      ],
    },
    // {
    //   company: "Deli - Restaurant Finder and Food Delivery",
    //   logoUrl: deli,
    //   position: "Co-Founder & Social Media Manager",
    //   duration: "Jun 2020 - May 2021",
    //   responsibilities: [
    //     "Collaborated in founding and managing a local food delivery service.",
    //     "Oversaw the company's online presence, creating and managing social media campaigns to enhance brand visibility and customer engagement.",
    //     "Contributed to operational decision-making and service optimization in a fast-paced startup environment.",
    //   ],
    // },
    // {
    //   company: "Freelance",
    //   logoUrl: placeholder,
    //   position: "Freelance Administrative Assistant",
    //   duration: "Jun 2020 - May 2021",
    //   responsibilities: [
    //     "Provided transcription services by converting text from images into editable formats.",
    //     "Performed web scraping to collect and organize data from online sources for analysis.",
    //     "Assisted with data encoding and processing to ensure accurate record-keeping.",
    //     "Delivered high-quality work in a timely manner, ensuring attention to detail and accuracy.",
    //   ],
    // },
  ];


  export const PROJECTS = [
    {
        imageUrls: [portfolio1, portfolio2, portfolio3, portfolio4],
        title: "React Portfolio",
        description: 
        "React Portfolio is my professional portfolio built using React, TypeScript, and Tailwind CSS. It showcases my skills, projects, and achievements as a web and mobile developer. I designed it to be modern, responsive, and easy to navigate, highlighting my expertise and the work I’m most proud of.",
        coverImage: portfolio1,
        technologies: [
            { image: react, text: "React" },
            { image: typescript, text: "TypeScript" },
            { image: tailwind, text: "Tailwind CSS" },
        ],
    },
    {
        imageUrls: [harvesteer1, harvesteer2, harvesteer3, harvesteer4, harvesteer5, harvesteer6, harvesteer7],
        title: "Harvesteer",
        description: 
        "HARVESTEER is a Machine Learning-based crop management app designed to address challenges in traditional farming, such as inefficient data collection and labor management. My contributions included designing the system architecture, selecting tools such as networking devices and a Raspberry Pi for the local server, and configuring the weather API to provide real-time updates. I developed the backend using Django REST Framework. I worked on the mobile app using Dart and Flutter. The app integrates features such as real-time weather updates, interactive dashboards, farm performance insights, and timely alerts to optimize resource management.",
        coverImage: harvesteer,
        technologies: [
            { image: flutter, text: "Flutter" },
            { image: dart, text: "Dart" },
            { image: django, text: "Django" },
            { image: python, text: "Python" },
            { image: postgre, text: "PostgreSQL" },
            { image: redis, text: "Redis" },
        ],
    },
    {
        imageUrls: [edu1, edu2, edu3, edu4, edu5, edu6],
        title: "Project EDU",
        description: 
            "ProjectEDU is a management platform created using Flutterflow, Firebase, and custom Dart code, designed to streamline the management of educational data. Teachers can upload data from Excel files, eliminating the need for manual entry and reducing redundancy. The system consolidates various data points, attaching them to individual student profiles, and generates graphs for easy reporting on a dashboard. Additionally, ProjectEDU features a teacher profile where educators can track their achievements. The platform also includes PDF generation via web services API, making it a comprehensive tool for managing both student and teacher data efficiently.",
        coverImage: educover,
        technologies: [
            { image: flutterflow, text: "FlutterFlow" },
            { image: firebase, text: "Firebase" },
            { image: dart, text: "Dart" },
        ],
    },
    {
        imageUrls: [kule1, kule2, kule3, kule4, kule5],
        title: "Kule",
        description: 
            "A content production and tracking system designed to address challenges from disorganized information flow, including announcements, important events, target deliverables, and various paperwork such as meeting minutes, articles, and multimedia materials, across multiple tools like shared documents and text messages. The system streamlines the organization's processes by automating information forwarding based on a defined hierarchical structure, batch scanning QR codes for efficient attendance tracking, and offering easier and centralized access to all publication data.",
        coverImage: kule,
        technologies: [
            { image: flutterflow, text: "FlutterFlow" },
            { image: firebase, text: "Firebase" },
            { image: dart, text: "Dart" },
        ],
    },
    {
        imageUrls: [mv1, mv2, mv3, mv4, mv5],
        title: "Marvelusion",
        description: 
            "Marvelusion is a dynamic movie booking web app built using vanilla PHP, HTML, CSS, JavaScript, and MySQL. It allows users to book movies, select seats, and leave reviews, creating an engaging cinema experience. The platform also features an admin dashboard for managing movies, schedules, and bookings, offering seamless operational control. Marvelusion combines simplicity and functionality, making movie-going more convenient for users and administrators alike.",
        coverImage: mv1,
        technologies: [
            { image: php, text: "PHP" },
            { image: mysql, text: "MySQL" },
            { image: html, text: "HTML" },
            { image: css, text: "CSS" },
            { image: js, text: "JavaScript" },
        ],
    },
    {
        imageUrls: [pp1, pp2, pp3, pp4],
        title: "Photography Portfolio",
        description:
            "My photography portfolio is a sleek and minimalist web application built entirely with vanilla HTML and CSS. Designed to showcase my work elegantly, it features a responsive layout, intuitive navigation, and visually appealing galleries that highlight the artistry and storytelling of each photograph. This project emphasizes the power of simplicity and clean code in creating an impactful online presence.",
        coverImage: pp1,
        technologies: [
            { image: html, text: "HTML" },
            { image: css, text: "CSS" },
        ],
    },
    {
        imageUrls: [kk1, kk2, kk3, kk4],
        title: "Kusinero Kings",
        description:
            "Kusinero Kings is a dynamic restaurant website designed to spotlight the delicious offerings of the restaurant. Built using vanilla HTML, CSS, and JavaScript, it features an interactive menu, and a visually engaging design. The website provides a user-friendly experience, inviting visitors to explore the culinary delights and ambiance of Kusinero Kings.",
        coverImage: kk1,
        technologies: [
            { image: html, text: "HTML" },
            { image: css, text: "CSS" },
            { image: js, text: "JavaScript" },
        ],
    },

   
];