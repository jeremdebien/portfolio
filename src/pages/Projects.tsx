import Container from "../components/Container";
import FeaturedCard from "../components/FeaturedCard";
import Header from "../components/Header";

import placeholder from "../assets/images/placeholder.png";

import html from "../assets/images/html.webp";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";

import kk1 from "../assets/images/kusinero-kings/kk1.png";
import kk2 from "../assets/images/kusinero-kings/kk2.png";
import kk3 from "../assets/images/kusinero-kings/kk3.png";
import kk4 from "../assets/images/kusinero-kings/kk4.png";

import pp1 from "../assets/images/photography-portfolio/pp1.png";
import pp2 from "../assets/images/photography-portfolio/pp2.png";
import pp3 from "../assets/images/photography-portfolio/pp3.png";
import pp4 from "../assets/images/photography-portfolio/pp4.png";

const Projects = () => {
    return (
        <>
            <Header>
                <Container className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                    <FeaturedCard
                        imageUrls={[pp1, pp2, pp3, pp4]}
                        title="Photography Portfolio"
                        description="My photography portfolio is a sleek and minimalist web application built entirely with vanilla HTML and CSS. Designed to showcase my work elegantly, it features a responsive layout, intuitive navigation, and visually appealing galleries that highlight the artistry and storytelling of each photograph. This project emphasizes the power of simplicity and clean code in creating an impactful online presence"
                        coverImage={pp1}
                        technologies={[
                            { image: html, text: "HTML" },
                            { image: css, text: "CSS" },
                        ]}
                    />
                    <FeaturedCard
                        imageUrls={[kk1, kk2, kk3, kk4]}
                        title="Kusinero Kings"
                        description="Kusinero Kings is a dynamic restaurant website designed to spotlight the delicious offerings of the restaurant. Built using vanilla HTML, CSS, and JavaScript, it features an interactive menu, and a visually engaging design. The website provides a user-friendly experience, inviting visitors to explore the culinary delights and ambiance of Kusinero Kings."
                        coverImage={kk1}
                        technologies={[
                            { image: html, text: "HTML" },
                            { image: css, text: "CSS" },
                            { image: js, text: "JavaScript" },
                        ]}
                    />
                    <FeaturedCard
                        imageUrls={[placeholder, placeholder, placeholder]}
                        title="Project 1"
                        description="Project Description"
                    />
                    <FeaturedCard
                        imageUrls={[placeholder, placeholder, placeholder]}
                        title="Project 1"
                        description="Project Description"
                    />
                    <FeaturedCard
                        imageUrls={[placeholder, placeholder, placeholder]}
                        title="Project 1"
                        description="Project Description"
                    />
                </Container>
            </Header>
        </>
    );
};

export default Projects;
