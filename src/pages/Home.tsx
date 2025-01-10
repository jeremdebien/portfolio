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

const Home = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-900 text-gray-300">
                {/* Cover Photo */}
                <div className="bg-gray-800">
                    {/* Cover Photo */}
                    <div className="relative mx-auto max-w-screen-xl">
                        <ImageBox
                            src="https://scontent.fmnl17-6.fna.fbcdn.net/v/t39.30808-6/277101168_5161424857255454_1514321299478499819_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=XKOWYZW3AoIQ7kNvgGil4MP&_nc_oc=AdjlGDe8D6PNl1WirCK5oQNpxDD-HXnzjYxeLdKyQvq_ylsDOdfv-b0AQAlT9V6k7P8&_nc_zt=23&_nc_ht=scontent.fmnl17-6.fna&_nc_gid=AZ0ljDAgudmIIR_fxokODbL&oh=00_AYD1SRDxk9Io07Dss4ukWc3ETRP_hL1hrCybrvWLgXnRBw&oe=6784F5FF"
                            alt="Cover"
                            className="h-48 w-full rounded-bl-lg rounded-br-lg object-cover sm:h-96"
                        />
                        {/* Profile Picture */}
                        <ImageBox
                            src={profile_picture}
                            alt="Profile"
                            className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 translate-y-3/4 transform rounded-full border-4 border-gray-800 sm:left-8 sm:translate-x-0"
                            y_offset={-25}
                        />
                    </div>

                    {/* Profile Info and Navigation */}
                    <div className="mx-auto mt-40 max-w-screen-xl px-8 sm:mt-24">
                        <div className="relative flex items-center justify-between sm:justify-end">
                            <div className="sm:absolute sm:left-52 sm:-translate-y-16 sm:transform">
                                <h1 className="text-3xl font-bold">
                                    Jeremiah de Bien
                                </h1>
                                <p className="text-sm text-gray-400">
                                    929 friends
                                </p>
                            </div>
                            <button className="ml-2 rounded-md bg-blue-600 px-4 py-2 font-medium hover:bg-blue-500">
                                Message
                            </button>
                        </div>

                        <hr className="mt-6 border-t border-gray-700" />

                        <Navbar />
                    </div>
                </div>

                {/* Profile Photo */}

                {/* Main Content */}
                <div className="mx-auto mt-6 grid max-w-screen-xl grid-cols-1 gap-6 px-8 md:grid-cols-5">
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
                            {/* <div className="grid grid-cols-3 gap-2">
                                <img
                                    src="https://via.placeholder.com/80"
                                    alt="Photo 1"
                                    className="h-20 w-full rounded object-cover"
                                />
                                <img
                                    src="https://via.placeholder.com/80"
                                    alt="Photo 2"
                                    className="h-20 w-full rounded object-cover"
                                />
                                <img
                                    src="https://via.placeholder.com/80"
                                    alt="Photo 3"
                                    className="h-20 w-full rounded object-cover"
                                />
                            </div> */}
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
                        {/* <Container>
                            <h2 className="mb-3 text-lg font-bold">Posts</h2>
                            <div className="space-y-4">
                                <div className="rounded-lg bg-gray-700 p-4">
                                    <h3 className="font-semibold">
                                        ACER PREDATOR HELIOS 300 (144Hz)
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        December 5, 2024
                                    </p>
                                    <p className="mt-2">PHP41,999.00</p>
                                </div>
                                <div className="rounded-lg bg-gray-700 p-4">
                                    <h3 className="font-semibold">
                                        Family Outing Photos
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        September 29, 2024
                                    </p>
                                </div>
                            </div>
                        </Container> */}
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
                </div>
            </div>
        </>
    );
};

export default Home;
