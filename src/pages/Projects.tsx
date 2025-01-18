import Container from "../components/Container";
import FeaturedCard from "../components/FeaturedCard";
import Header from "../components/Header";

import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <>
            <Header>
                <Container className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project, idx) => (
                        <FeaturedCard
                            key={idx}
                            imageUrls={project.imageUrls}
                            title={project.title}
                            description={project.description}
                            coverImage={project.coverImage}
                            technologies={project.technologies}
                            isShortenDescription={true}
                            isShowTech={true}
                        />
                    ))}
                </Container>
            </Header>
        </>
    );
};

export default Projects;
