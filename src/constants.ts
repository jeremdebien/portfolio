import dost from "./assets/images/dost.png";
import deli from "./assets/images/deli.png";
import clsu from "./assets/images/clsu.png";
import placeholder from "./assets/images/placeholder.png";


/* Technologies */
import html from "./assets/images/html.webp";
import css from "./assets/images/css.png";
import js from "./assets/images/js.png";
import php from "./assets/images/php.png";
import mysql from "./assets/images/mysql.webp";

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
    {
      company: "Deli - Restaurant Finder and Food Delivery",
      logoUrl: deli,
      position: "Co-Founder & Social Media Manager",
      duration: "Jun 2020 - May 2021",
      responsibilities: [
        "Collaborated in founding and managing a local food delivery service.",
        "Oversaw the company's online presence, creating and managing social media campaigns to enhance brand visibility and customer engagement.",
        "Contributed to operational decision-making and service optimization in a fast-paced startup environment.",
      ],
    },
    {
      company: "Freelance",
      logoUrl: placeholder,
      position: "Freelance Administrative Assistant",
      duration: "Jun 2020 - May 2021",
      responsibilities: [
        "Provided transcription services by converting text from images into editable formats.",
        "Performed web scraping to collect and organize data from online sources for analysis.",
        "Assisted with data encoding and processing to ensure accurate record-keeping.",
        "Delivered high-quality work in a timely manner, ensuring attention to detail and accuracy.",
      ],
    },
  ];


  export const PROJECTS = [
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