import Container from "../components/Container";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaLinkedin,
} from "react-icons/fa";
import Post from "../components/Post";
import ImageBox from "../components/ImageBox";
import FeaturedCard from "../components/FeaturedCard";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";

import topcit from "../assets/images/topcit.png";
import lodi from "../assets/images/lodi.png";
import aws from "../assets/images/aws.png";

import { WORK_EXPERIENCE, PROJECTS } from "../constants";

const Home = () => {
    return (
        <>
            <Header className="grid-cols-1 gap-6 px-8 md:grid-cols-5">
                {/* Left Column (Intro Section) */}
                <div className="md:col-span-2">
                    <Container>
                        <h2 className="mb-3 text-lg font-bold">Intro</h2>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2">
                                <FaEnvelope className="mr-2" />
                                <a href="mailto:jeremiahdebien@gmail.com">
                                    jeremiahdebien@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaPhoneAlt className="mr-2" />
                                <a href="tel:+639760116080">
                                    +(63) 976 011 6080
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaMapMarkerAlt className="mr-4" />
                                San Jose City, Nueva Ecija
                            </li>
                            <li className="flex items-center space-x-2">
                                <FaLinkedin className="mr-2" />
                                <a
                                    href="https://www.linkedin.com/in/jeremiah-de-bien/"
                                    className="hover:underline"
                                >
                                    Jeremiah de Bien
                                </a>
                            </li>
                        </ul>
                    </Container>
                    {/* Projects */}
                    <Container className="mt-4">
                        <h2 className="= mb-3 text-lg font-bold">
                            Featured Projects
                        </h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {PROJECTS.slice(0, 2).map((project, idx) => (
                                <FeaturedCard
                                    key={idx}
                                    imageUrls={project.imageUrls}
                                    title={project.title}
                                    description={project.description}
                                    coverImage={project.coverImage}
                                    technologies={project.technologies}
                                    isShortenDescription={true}
                                />
                            ))}
                        </div>
                    </Container>
                    <Container className="mt-4">
                        <h2 className="mb-3 text-lg font-bold">
                            Professional Experience
                        </h2>
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

                {/* Main Column (Posts Section) */}
                <div className="md:col-span-3">
                    <Container>
                        <h2 className="text-lg font-bold">Certificates</h2>
                    </Container>
                    <Post date="December 17, 2024">
                        I'm proud to share that I have completed the AWS Academy
                        Cloud Foundation course! 🎉 Here's my certificate of
                        completion
                        <ImageBox alt="AWS Certificate" src={aws} />
                    </Post>
                    <Post date="August 9, 2024">
                        Yay!! I’ve successfully completed my 400-hour training
                        under the DOST’s Project LODI (Learning Opportunity and
                        Development Initiative)! 🎉 It was such an enriching
                        experience filled with learning and growth!
                        <ImageBox alt="Project LODI Certificate" src={lodi} />
                    </Post>
                    <Post date="August 8, 2024">
                        I just got my certificate from TOPCIT (Test of Practical
                        Competency in ICT). I got a score which is equivalent to
                        a Level 3 certification. I'm so happy to have passed the
                        exam and I'm looking forward to taking more exams in the
                        future.
                        <ImageBox alt="TOPCIT Certificate" src={topcit} />
                    </Post>
                    <Post date="August 2021">Hello World!</Post>
                </div>
            </Header>
        </>
    );
};

export default Home;
