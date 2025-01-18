import Header from "../components/Header";
import Container from "../components/Container";
import WorkExperience from "../components/WorkExperience";

import { EDUCATION, WORK_EXPERIENCE } from "../constants";

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
                <Container className="my-4">
                    <h2 className="text-lg font-bold">Education</h2>
                </Container>
                <Container className="mt-4">
                    <div className="space-y-4">
                        {EDUCATION.map((edu, idx) => (
                            <WorkExperience
                                key={idx}
                                company={edu.company}
                                logoUrl={edu.logoUrl}
                                position={edu.position}
                                duration={edu.duration}
                                responsibilities={edu.responsibilities}
                            />
                        ))}
                    </div>
                </Container>
            </div>
            <div className="md:col-span-3">
                <Container className="mb-4">
                    <h2 className="text-lg font-bold">
                        Professional Experience
                    </h2>
                </Container>
                <Container>
                    <div className="space-y-4">
                        {WORK_EXPERIENCE.map((work, idx) => (
                            <>
                                <WorkExperience
                                    key={idx}
                                    company={work.company}
                                    logoUrl={work.logoUrl}
                                    position={work.position}
                                    duration={work.duration}
                                    responsibilities={work.responsibilities}
                                />
                                {idx != WORK_EXPERIENCE.length - 1 && (
                                    <hr className="mt-6 border-t border-gray-700" />
                                )}
                            </>
                        ))}
                    </div>
                </Container>
            </div>
        </Header>
    );
};

export default About;
