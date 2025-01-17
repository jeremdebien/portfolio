import Container from "../components/Container";
import FeaturedCard from "../components/FeaturedCard";
import Header from "../components/Header";

import placeholder from "../assets/images/placeholder.png";

const Projects = () => {
    return (
        <>
            <Header>
                <Container className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
                    <FeaturedCard
                        imageUrls={[
                            placeholder,
                            placeholder,
                            placeholder,
                            placeholder,
                            placeholder,
                            placeholder,
                            placeholder,
                        ]}
                        title="Project 1"
                        description="Project Description"
                        modalText="Test 1"
                    />
                    <FeaturedCard
                        imageUrls={[placeholder, placeholder, placeholder]}
                        title="Project 1"
                        description="Project Description"
                        modalText="Test 1"
                    />
                    <FeaturedCard
                        imageUrls={[placeholder, placeholder, placeholder]}
                        title="Project 1"
                        description="Project Description"
                        modalText="Test 1"
                    />
                    <FeaturedCard
                        imageUrls={[placeholder, placeholder, placeholder]}
                        title="Project 1"
                        description="Project Description"
                        modalText="Test 1"
                    />
                    <FeaturedCard
                        imageUrls={[placeholder, placeholder, placeholder]}
                        title="Project 1"
                        description="Project Description"
                        modalText="Test 1"
                    />
                </Container>
            </Header>
        </>
    );
};

export default Projects;
