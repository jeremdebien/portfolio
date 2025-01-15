import profile_picture from "../assets/images/profile.jpg";
import dost from "../assets/images/dost.png";
import deli from "../assets/images/deli.png";
import placeholder from "../assets/images/placeholder.png";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
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
                        <h2 className="mb-3 text-lg font-bold">
                            Featured Projects
                        </h2>
                        <FeaturedCard
                            imageUrls={[
                                "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/469718213_559281246999361_1247980601863416211_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6MlhvVDVHOQQ7kNvgEYm2JE&_nc_oc=AdhcHqnTGGOByPeeT-TBEDouKvgMAIWfybeyRFBVijZMwR6Qq9-UfmiKFzy0guxgLRs&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=AJYYchalMhGi3m5oEELcsAn&oh=00_AYC23d7gGWLzeTVUvjNKZ0JNqYRdXqck6gPGdBuE8DoZvw&oe=6786F419",
                                "https://via.placeholder.com/80",
                                "https://via.placeholder.com/80",
                            ]}
                            title="Project 1"
                            description="Project Description"
                            modalText="Test 1"
                        />
                        <FeaturedCard
                            imageUrls={[
                                "https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/469718213_559281246999361_1247980601863416211_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6MlhvVDVHOQQ7kNvgEYm2JE&_nc_oc=AdhcHqnTGGOByPeeT-TBEDouKvgMAIWfybeyRFBVijZMwR6Qq9-UfmiKFzy0guxgLRs&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=AJYYchalMhGi3m5oEELcsAn&oh=00_AYC23d7gGWLzeTVUvjNKZ0JNqYRdXqck6gPGdBuE8DoZvw&oe=6786F419",
                                "https://via.placeholder.com/80",
                                "https://via.placeholder.com/80",
                            ]}
                            title="Project 1"
                            description="Project Description"
                            modalText="Test 1"
                            className="mt-4"
                        />
                    </Container>
                    <Container className="mt-4">
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
                </div>

                {/* Main Column (Posts Section) */}
                <div className="md:col-span-3">
                    <Container>Post</Container>
                    <Post date="November 30, 2024">Hello World!</Post>
                    <Post date="November 30, 2024">Hello World!</Post>
                    <Post date="November 30, 2024">Hello World!</Post>
                    <Post date="November 30, 2024">
                        <ImageBox
                            alt="Hello"
                            src="https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/344764207_559739482963957_7775866385496566895_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pys7W3IALq4Q7kNvgGEYZjD&_nc_oc=AdhgjKX90wYuFMe-CNRWRGLTHSzh4SSOV4PYtejAm9LTqEvl0m8eVSsQUMlmIiiCo7U&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=Al5HbmVmSK-po5pG5utxxwr&oh=00_AYB2JDnp3VSmUlX2Myr5Y-JRJPycTePn-g8lfQKJIMUT8Q&oe=67870369"
                        />
                    </Post>
                </div>
            </Header>
        </>
    );
};

export default Home;
