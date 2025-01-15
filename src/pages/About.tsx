import Header from "../components/Header";
import Container from "../components/Container";
import WorkExperience from "../components/WorkExperience";

import dost from "../assets/images/dost.png";
import deli from "../assets/images/deli.png";
import clsu from "../assets/images/clsu.png";
import placeholder from "../assets/images/placeholder.png";

const About = () => {
    return (
        <Header className="grid-cols-1 gap-6 px-8 md:grid-cols-5">
            <div className="md:col-span-2">
                <Container>
                    <h2 className="mb-2 text-lg font-bold">About Me</h2>
                    <p className="text-justify text-gray-400">
                        Hi! I'm Jeremiah de Bien, a dedicated and
                        detail-oriented software engineer with hands-on
                        experience in{" "}
                        <b className="underline">web development</b>,
                        specializing in <b className="underline">Laravel</b> and{" "}
                        <b className="underline">Django</b> frameworks.
                        Proficient in designing and implementing backend
                        systems, including data-driven PDF report generation and
                        secure user authentication features. Holds a{" "}
                        <b className="underline">
                            Level 3 TOPCIT Certification
                        </b>
                        , demonstrating advanced technical proficiency and
                        problem-solving capabilities. Skilled in collaborating
                        within Agile environments and delivering scalable,
                        user-centered solutions.
                    </p>
                </Container>
            </div>
            <div className="md:col-span-3">
                <Container>
                    <h2 className="mb-3 text-lg font-bold">
                        Professional Experience
                    </h2>
                    <div className="space-y-4">
                        <WorkExperience
                            company="Project LODI, DOST Central Office-PES-ITD"
                            logoUrl={dost}
                            position="System Developer Intern"
                            duration="Jun 2024 - Aug 2022"
                            responsibilities={[
                                "Developed features for a web application using PHP, Laravel as its framework, and Vue.js.",
                                "Implemented PDF generation of reports by collecting and processing relevant data.",
                                "Designed and implement email verification systems for user registration and password recovery functionalities.",
                                "Gained hands-on experience in full-stack development and enhanced technical problem-solving skills.",
                            ]}
                        />
                        <hr className="mt-6 border-t border-gray-700" />
                        <WorkExperience
                            company="Deli - Restaurant Finder and Food Delivery"
                            logoUrl={deli}
                            position="Co-Founder & Social Media Manager"
                            duration="Jun 2020 - May 2021"
                            responsibilities={[
                                "Collaborated in founding and managing a local food delivery service.",
                                "Oversaw the company's online presence, creating and managing social media campaigns to enhance brand visibility and customer engagement.",
                                "Contributed to operational decision-making and service optimization in a fast-paced startup environment.",
                            ]}
                        />
                        <hr className="mt-6 border-t border-gray-700" />
                        <WorkExperience
                            company="Freelance"
                            logoUrl={placeholder}
                            position="Freelance Administrative Assistant"
                            duration="Jun 2020 - May 2021"
                            responsibilities={[
                                "Provided transcription services by converting text from images into editable formats.",
                                "Performed web scraping to collect and organize data from online sources for analysis.",
                                "Assisted with data encoding and processing to ensure accurate record keeping.",
                                "Delivered high-quality work in a timely manner, ensuring attention to detail and accuracy.",
                            ]}
                        />
                    </div>
                </Container>
                <Container className="mt-4">
                    <h2 className="mb-3 text-lg font-bold">Education</h2>
                    <div className="space-y-4">
                        <WorkExperience
                            company="Central Luzon State University"
                            logoUrl={clsu}
                            position="BS Information Technology"
                            duration="Aug 2021 - Present"
                            responsibilities={[
                                "Developed features for a web application using PHP, Laravel as its framework, and Vue.js.",
                                "Implemented PDF generation of reports by collecting and processing relevant data.",
                                "Designed and implement email verification systems for user registration and password recovery functionalities.",
                                "Gained hands-on experience in full-stack development and enhanced technical problem-solving skills.",
                            ]}
                        />
                    </div>
                </Container>
            </div>
        </Header>
    );
};

export default About;
